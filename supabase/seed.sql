-- Seed data for products table
INSERT INTO products (name, description, type, price, payment_link_id, stripe_price_id, features, active)
VALUES
  ('Pack PRO', 'Pack Quant com todas as estratégias (23 robôs), Copy Invest incluído e backtest sem limites', 'pack', 700.00, 'LINK_PACK_PRO', 'price_1234567890', ARRAY['Todos os 23 robôs incluídos', 'Pack Starter + Pack Trader + Pack Global', 'Acesso a todos os robôs', 'Backtest sem limites', 'Suporte VIP 24/7'], TRUE),
  
  ('Pack Starter', 'Pack com 14 estratégias para WIN e BIT, incluindo Trend 3, Take 40, V Rev, Location 1, Take GO e mais', 'pack', 300.00, 'LINK_PACK_STARTER', 'price_2345678901', ARRAY['14 Robôs Starter', 'Estratégias para WIN e BIT', 'Tendência, Reversão e Scalp', 'Operações automatizadas', 'Suporte básico'], TRUE),
  
  ('Pack Global', 'Pack com 3 estratégias para mercado global, incluindo Robô GR Global, Criptomoedas e Ações e Futuros', 'pack', 300.00, 'LINK_PACK_GLOBAL', 'price_3456789012', ARRAY['3 Robôs para mercados globais', 'Operações em criptomoedas', 'Operações em ações e futuros', 'Gestão de risco integrada', 'Suporte avançado'], TRUE),
  
  ('Robô GR PRO', 'Robô avançado para operações em múltiplos mercados com análise técnica avançada', 'optional', 199.90, 'LINK_ROBO_GR_PRO', 'price_4567890123', ARRAY['Operações em múltiplos mercados', 'Análise técnica avançada', 'Filtros de volatilidade', 'Compatível com múltiplos ativos'], TRUE),
  
  ('Plataforma Tridar Copy Trading', 'Serviço de copy trading que replica operações de traders profissionais na sua conta', 'optional', 200.00, 'LINK_TRIDAR_COPY', 'price_5678901234', ARRAY['Copy trading automatizado', 'Operações de traders profissionais', 'Relatórios detalhados de performance', 'Configuração personalizada de risco'], TRUE),
  
  ('Máquina VPS Trader', 'Máquina virtual dedicada para execução contínua dos seus robôs de trading', 'optional', 110.00, 'LINK_VPS_TRADER', 'price_6789012345', ARRAY['Servidor dedicado 24/7', 'Baixa latência para execução', 'Suporte técnico especializado', 'Backup automático diário'], TRUE);
