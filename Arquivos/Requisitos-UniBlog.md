# 📑 Documento de Requisitos (DR) – UniBlog

## 1. INTRODUÇÃO

### 1.1 Objetivo
Este documento tem como objetivo especificar os requisitos funcionais e não funcionais do UniBlog, um blog universitário digital voltado para a comunidade acadêmica. Ele servirá de base para o desenvolvimento, acompanhamento e validação do sistema, garantindo que o software atenda às necessidades do cliente e dos usuários finais.

### 1.2 Escopo resumido
O UniBlog é uma plataforma digital destinada a estudantes, professores e demais membros da comunidade universitária. Seu objetivo é centralizar informações acadêmicas e extracurriculares em um único ambiente, permitindo a publicação de postagens, eventos, artigos e oportunidades, além de facilitar a interação entre usuários por meio de perfis, comentários e grupos acadêmicos. O sistema será responsivo, intuitivo e seguro, visando fortalecer a comunicação no ambiente universitário.

---

## 2. DESCRIÇÃO GERAL

### 2.1 Usuários do sistema
- Estudantes universitários (graduação, tecnólogos e pós-graduação).  
- Professores e pesquisadores.  
- Comunidades acadêmicas (grupos de estudo, atléticas, projetos, eventos).  
- Administradores do sistema (para moderação e gerenciamento de conteúdo).  

### 2.2 Funcionalidades gerais
- Cadastro e login de usuários com autenticação segura.  
- Publicação de posts (texto, imagem, vídeo e anexos).  
- Feed em formato de timeline.  
- Sistema de comentários e curtidas.  
- Perfis de usuários personalizados (foto, biografia, histórico).  
- Busca e filtros por palavras-chave, categorias e autores.  
- Gerenciamento de eventos e comunidades acadêmicas.  
- Painel administrativo para controle de usuários e postagens.  
- Notificações internas de interações e novos conteúdos.  

### 2.3 Restrições e premissas 
- O sistema deve ser responsivo (tablet e mobile).  
- O sistema deve estar em conformidade com a **LGPD** (Lei Geral de Proteção de Dados).  
- O sistema deve utilizar infraestrutura em nuvem para hospedagem.  
- Escopo inicial limitado às funcionalidades essenciais (cadastro/login, feed, perfis e interações).  
- Equipe reduzida de até **4 colaboradores**.  
- Prazo de entrega: **MVP em 90 dias**; versão final (v1.0) em até **150 dias**.  

---

## 3. REQUISITOS ESPECÍFICOS

### 3.1 Requisitos Funcionais (RF)
- **RF01** – O sistema deve permitir o cadastro e login de usuários com autenticação segura.  
- **RF02** – O sistema deve permitir a publicação de posts com título, conteúdo, imagens e anexos.  
- **RF03** – O sistema deve permitir adicionar comentários em cada postagem.  
- **RF04** – O sistema deve permitir que usuários curtam e compartilhem publicações.  
- **RF05** – O sistema deve disponibilizar perfis personalizados com foto, descrição e histórico de postagens.  
- **RF06** – O sistema deve disponibilizar um painel administrativo para gerenciamento de usuários e conteúdos.  
- **RF07** – O sistema deve permitir busca e filtragem de publicações por palavras-chave, categorias e autores.  
- **RF08** – O sistema deve enviar notificações internas sobre novos posts e interações.  
- **RF09** – O sistema deve permitir o gerenciamento de eventos e grupos acadêmicos.  

### 3.2 Requisitos Não Funcionais (RNF)
- **RNF01** – O sistema deve ter interface responsiva adaptável a tablet e mobile.  
- **RNF02** – O tempo de resposta para carregamento de páginas deve ser inferior a 2 segundos.   
- **RNF03** – O sistema deve ser compatível com múltiplas plataformas (Windows, Linux, macOS).  
- **RNF04** – O sistema deve criptografar dados sensíveis (senhas e informações pessoais).  

---

 ## 4. CASOS DE USO

### UC01 – Cadastro/Login de Usuário
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário abre o UniBlog.  
  2. Se não houver login em cache, informa e-mail e senha ou realiza cadastro.  
  3. O sistema autentica os dados.  
  4. O usuário seleciona um perfil existente.  
  5. O sistema valida e redireciona para o feed.  
- **Fluxo alternativo**:  
  - Caso o usuário não possua perfil, é direcionado para **UC05 – Criar Perfil**. 


**![UC01](https://www.plantuml.com/plantuml/png/HP31IWCn48RlUOgVdjh3MZruaLAg1K7m84gyZvlPxK0saKaM1F5XV1PVpDb2oIqayttv_pcKIbhdARh8GqNDK1bF5K6K-oevEUfhLlWoaqe65NYtF54Q8sFbZzStw72aGALgtZxdKH82By3Vhn4hV3l0e-lsMDz_g2XyaeUOnqsxVqf3reaKt4qaSLiudGXvldX9RTZmkNAgqfCYKCXbSwPzyxnnvDv2a-A5TP1unjufIbZaU6NhTPdu92KyCeUcMRV_S6K-QtUxj5DfHjnXj-ClInBAVkz-tC5Eji1_)**

---

### UC02 – Publicação de Conteúdo
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa a área de nova publicação.  
  2. Insere título e conteúdo.  
  3. Opcionalmente adiciona imagens ou anexos.  
  4. O sistema salva e exibe a postagem no feed.  
- **Fluxo alternativo**:  
  - O usuário pode associar a publicação a uma categoria (eventos, estudos, oportunidades).  

**![UC02](https://www.plantuml.com/plantuml/png/VP2nIWD148RxVOgVLBaYAfOIZeHWOIC1kGUOx8tdm6P7TkP2G7mQ2ojVmFPUp4r0rCPkuF--_uTPcLFnSPz2uaU7AueCJuvU2aSNpO6YQq5d8nLHaA4BfuZoa1YpRdDrZGMsuov9fEbzUbFqZ8rcv-cprnbU0j1XiMWnNqSseu9xFT0VfVbXxh9naGAVFdnC2aRyxlf5hNk9efaAP4y3Pxkap4Ur1ZTOBlNv7AQs3S3yWTAXWepRe-oaOAlcrTatvwhkXApDD4g5DkGyQ15gSD7-fvvc-EYSUwihhs5Lh_h5Bm00)**

---

### UC03 – Interação com Publicações
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa uma postagem no feed.  
  2. Pode curtir, descurtir ou comentar.  
  3. O sistema registra a interação e atualiza em tempo real.  
- **Fluxo alternativo**:  
  - O usuário pode mencionar outro perfil nos comentários.  
  - O autor da postagem recebe uma notificação da interação.  

**![UC03](https://www.plantuml.com/plantuml/png/XP11IiH044NtESLdLZEBgE1EXZ1XH72X348Eq7OgiQ3J1TNL88gdSU49FC5Sp7GsZhYONL7r_dzGksHEBK-X2ZGOJA0ylXXwLlB64YldJHHToavPu1AwgfnS70DXrUslhb7ZFXgfEtuTFmLU9XpoSs1V5j-KLdYlW0vrtM3TUah9AGuocqUQ40LtHFtc5zbdDTRBMqf-cKvFCb4qjwpMJpHoCdNwHqzeBRl0RpErXBh2Fb3qBB68IGSE6roSrk46sosz6iK-DKq9F8hnmDufscoYXJzl_5VqKUtcgRpt1m00)**

---

### UC04 – Pesquisa de Conteúdo ou Perfil
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa a barra de pesquisa.  
  2. Digita o termo de busca.  
  3. O sistema retorna resultados filtrados.  
- **Fluxo alternativo**:  
  - Caso nenhum resultado seja encontrado, o sistema exibe uma mensagem de “não encontrado”.  

**![UC04](https://www.plantuml.com/plantuml/png/TP2nIWD148RxVOgVDCaL9nPM4ewOc5OaU0-mtatEWSqEpin2G7mQty8sB-PU2gti1hxlW-7Vc4VrSaeXqT7X0kNfpJ6oqk0iESJ1HT5RYSg2QEZ3Z6AU4c7HxsxlqEAPxBsmHOo4dMIdo_Sea5A17Zajy1607ctROVKma5bKRAFg7Fp6pP_po1DxTLv8Jp8xssB3LLWTo4LpPGUoaZoEOiqrwcUwF_ChAvPFbo_1FW_r5wtAii5DzqzxZ_MQpavvjAuBds5Jhph83m00)**

---

### UC05 – Criar Perfil
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa a área de criação de perfil.  
  2. Informa dados obrigatórios (nome, curso, e-mail).  
  3. O sistema valida e cria o perfil.  
  4. O usuário é redirecionado para o feed.  

**![UC05](https://www.plantuml.com/plantuml/png/LOynIiP044RxFSL7ggG8sDXA929OASBQZzb9NDZimEoa4azZuG4yGYxc9YZor-yDtvkX6AbjQtA9PuC9D2vlXX2L9ukI7Kqc2bysqYYW0kyEH7b9ZCQFLzVeCMeanHFh75E3TmTuzFqDsjk9Io4zXVrh_nG4_lMwV-iXpw9hrUueIC7ZQuqWsx_hOZcqzeLI39NpnL9tNlj3UEQpk0PNIe9xvl27Fzp0ETGVVm00)**

---

### UC06 – Gerenciar Perfil
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa seu perfil.  
  2. O sistema valida os dados e exibe publicações e informações.  
  3. O usuário pode editar informações pessoais.  
  4. O usuário pode trocar para outro perfil existente.  

**![UC06](https://www.plantuml.com/plantuml/png/LOz1IaD138RtSugVhleM3rovb8eKSQKBvm3flBmQc4uaoO0WdiSJU89Up5UHbYwJxyyN_eq7MVH3JPNdG2XCzc-1IOnBYBP49TIGlPE9WXmvdH2rVMMiyiFDBKOyid4hGeONjbdg2fy9o1Z7Ewpl2xkVqR20zVP3Th9i-gvAeUFtyOSTZASsgnt-v-7lEbyysqc2x3gqIDsLn8TBxjMqaE6TZF3Sm_Jy-Ijjk4sdjhy0)**

--

### UC07 – Sair do Aplicativo
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa a opção de sair.  
  2. O sistema encerra a sessão e retorna à tela inicial.  

**![UC07](https://www.plantuml.com/plantuml/png/7OunJiGm44Lxd-8hJP8Y4XqT2a8Kj0GVOEGCOIJZGUC93U8kA-rHSh6DjtvFJs-kJkRxTmwPFnskCDc-7AiO9nSjWPAh8TQTJ1HK4KD3LBRCwEBBmoCcB2I6LV7yaoMHowzs-0j0n3GzOLWuSpfZPEYRseyd6rvBOZCoB5phSLKmtjdLcdPSyC6Py5Oa2UNntedXFynSrhPx0m00)**

---
### Caso de uso - UniBlog
**![Caso de uso - UniBlog](https://www.plantuml.com/plantuml/png/hP4_JZD13CNxEOMLwlkAA3sALe7mHtH88GSmCyvYQNOSlDue0d4Q2av0GvkBCT4I1R99eA3r-ptxsHxLXcfD5LsacO49A9Vt1e6LlB4aXzv4OLetg2pEhSkOoaZGcoO-YrBsuCa1EDWmqEyNyEyI7qaXovm67WFMflBVmG6XzKmeaiypKM5EEkEO3VkgBJrM_b8wWU6GbaOf5CMUE3TKFpHSeuANPBHw3pBOpDXbhpEWMFAQhM3Ut4Nsk7fTlL6T0ntLDz4QjInlfHVf9Fn5ctEg_Tzq6aj5oV1eeyx9MbGXoKAsPyidEAorpjF0dm_Z2akg1fXe-TEuAr9Adh__lbDisOl0jlDxJZusWOhYYErMnH-oTV9Ca1M20CxNcnelykRFRfJ3DrNy0000)**  

---

## 5. RASTREABILIDADE

| ID Requisito | Caso de Uso                        |
|--------------|------------------------------------|
| RF01         | UC01 – Cadastro/Login de Usuário   |
| RF02         | UC02 – Publicação de Conteúdo      |
| RF03         | UC03 – Interação com Publicações   |
| RF04         | UC03 – Interação com Publicações   |
| RF05         | UC05 – Criar Perfil                |
| RF06         | UC06 – Gerenciar Perfil            |
| RF07         | UC04 – Pesquisa de Conteúdo/Perfil |
| RF08         | UC03 – Interação com Publicações   |
| RF09         | UC02 – Publicação de Conteúdo      |

