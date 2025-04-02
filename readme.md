<img src="https://raw.githubusercontent.com/thauanbo/thauanbo/refs/heads/main/img/banner-project.png" alt="Banner" width="100%">

# Valentine

Projeto interativo para uma experiência divertida de "Pedido de Namoro", com integração ao Supabase para registro de cliques.

## Funcionalidades

- Botão "Não" dinâmico com mensagens sequenciais;

- Efeito visual de crescimento no botão "Sim";

- Registro de cliques no Supabase;

- Redirecionamento para página de confirmação;

- Design responsivo e animado;

## Estrutura do Projeto

```
meu-projeto/
├── index.html
├── config.js
├── css/
│ └── style.css
├── js/
│ └── app.js (Lógica principal)
└── public/
└── yes_page.html (Página de confirmação)
```
## Stack utilizada

**Front-end:**
- HTML5
- CSS3
- JavaScript

**Backend as a Service:**
- Supabase (Banco de dados em tempo real)


## Clone o Projeto

```bash
  git clone https://github.com/thauanbo/Valentine.git
```

## Uso/Exemplos

Opções de clique "Não":
```
Botão "Não":

Exibe mensagens divertidas sequencialmente

Aumenta o tamanho do botão "Sim" a cada cliqu
```
Opção de clique "Sim":
```
Botão "Sim":

Registra o clique no banco de dados Supabase

Mostra estado de carregamento

Redireciona para página de confirmação
```

## Variáveis de ambiente:
```

SUPABASE_URL: URL do seu projeto Supabase

SUPABASE_KEY: Chave ANON do Supabase
```

## Implementação Supabase

```tsql
CREATE TABLE button_clicks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  action_type TEXT,
  user_agent TEXT,
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE POLICY "Permitir inserts públicos" ON button_clicks
FOR INSERT TO public WITH CHECK (true);
```


## 🔗 Links
[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/thauanbo)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thauan-barbosa/)
