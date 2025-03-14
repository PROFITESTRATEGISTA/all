import { useState, useRef } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Loader2 } from "lucide-react";

export default function UserProfile() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profile, setProfile] = useState({
    firstName:
      user?.user_metadata?.first_name ||
      localStorage.getItem("userFirstName") ||
      "",
    lastName:
      user?.user_metadata?.last_name ||
      localStorage.getItem("userLastName") ||
      "",
    email: user?.email || "",
    avatarUrl:
      user?.user_metadata?.avatar_url ||
      localStorage.getItem("userAvatarUrl") ||
      "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // For development environment, just simulate a successful update
      if (import.meta.env.DEV) {
        // Update local state to reflect changes
        localStorage.setItem("userFirstName", profile.firstName);
        localStorage.setItem("userLastName", profile.lastName);
        localStorage.setItem("userAvatarUrl", profile.avatarUrl);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Force reload to apply changes immediately
        window.location.reload();

        toast({
          title: "Perfil atualizado",
          description: "Suas informações foram atualizadas com sucesso.",
        });
        setLoading(false);
        return;
      }

      // Production code
      const { error } = await supabase.auth.updateUser({
        data: {
          first_name: profile.firstName,
          last_name: profile.lastName,
          avatar_url: profile.avatarUrl,
        },
      });

      if (error) throw error;

      toast({
        title: "Perfil atualizado",
        description: "Suas informações foram atualizadas com sucesso.",
      });

      // Force reload to apply changes immediately
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar seu perfil.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (passwords.new !== passwords.confirm) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwords.new,
      });

      if (error) throw error;

      setPasswords({
        current: "",
        new: "",
        confirm: "",
      });

      toast({
        title: "Senha atualizada",
        description: "Sua senha foi atualizada com sucesso.",
      });
    } catch (error) {
      console.error("Error updating password:", error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar sua senha.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "Erro",
        description: "A imagem deve ter no máximo 2MB.",
        variant: "destructive",
      });
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Erro",
        description: "O arquivo deve ser uma imagem.",
        variant: "destructive",
      });
      return;
    }

    setUploadingPhoto(true);

    try {
      // For development, we'll just use a URL reader instead of uploading to Supabase storage
      if (import.meta.env.DEV) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const avatarUrl = event.target?.result as string;
          setProfile({ ...profile, avatarUrl });
          // Save to localStorage immediately
          localStorage.setItem("userAvatarUrl", avatarUrl);
          setUploadingPhoto(false);

          // Force reload to apply changes immediately
          window.location.reload();
        };
        reader.readAsDataURL(file);
        return;
      }

      // In production, upload to Supabase Storage
      const fileExt = file.name.split(".").pop();
      const fileName = `${user?.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
      const avatarUrl = data.publicUrl;

      // Update profile with new avatar URL
      setProfile({ ...profile, avatarUrl });

      // Update user metadata with new avatar URL
      await supabase.auth.updateUser({
        data: {
          avatar_url: avatarUrl,
        },
      });

      toast({
        title: "Foto atualizada",
        description: "Sua foto de perfil foi atualizada com sucesso.",
      });

      // Force reload to apply changes immediately
      window.location.reload();
    } catch (error) {
      console.error("Error uploading avatar:", error);
      toast({
        title: "Erro",
        description: "Não foi possível fazer upload da imagem.",
        variant: "destructive",
      });
    } finally {
      setUploadingPhoto(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Meu Perfil</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <Card className="w-full md:w-64 h-fit">
          <CardContent className="pt-6 flex flex-col items-center">
            <div
              className="relative group cursor-pointer"
              onClick={handleAvatarClick}
            >
              <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                {profile.avatarUrl ? (
                  <AvatarImage src={profile.avatarUrl} alt="Foto de perfil" />
                ) : (
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                    alt="Avatar gerado"
                  />
                )}
                <AvatarFallback>
                  {profile.firstName.charAt(0)}
                  {profile.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {uploadingPhoto ? (
                  <Loader2 className="h-6 w-6 text-white animate-spin" />
                ) : (
                  <Camera className="h-6 w-6 text-white" />
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
                disabled={uploadingPhoto}
              />
            </div>
            <p className="text-xs text-gray-500 mb-2">
              Clique para alterar a foto
            </p>
            <h3 className="font-bold text-lg">
              {profile.firstName} {profile.lastName}
            </h3>
            <p className="text-sm text-gray-500">{profile.email}</p>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Informações Pessoais</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nome</Label>
                        <Input
                          id="firstName"
                          value={profile.firstName}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Sobrenome</Label>
                        <Input
                          id="lastName"
                          value={profile.lastName}
                          onChange={(e) =>
                            setProfile({ ...profile, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={profile.email} disabled />
                      <p className="text-xs text-gray-500">
                        O email não pode ser alterado.
                      </p>
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Salvando..." : "Salvar Alterações"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Alterar Senha</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Senha Atual</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={passwords.current}
                        onChange={(e) =>
                          setPasswords({
                            ...passwords,
                            current: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nova Senha</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={passwords.new}
                        onChange={(e) =>
                          setPasswords({ ...passwords, new: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirmar Nova Senha
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={passwords.confirm}
                        onChange={(e) =>
                          setPasswords({
                            ...passwords,
                            confirm: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Atualizando..." : "Atualizar Senha"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
