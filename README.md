# Landing Page - Letyeri Diel

Trabalho N3 da disciplina Frontend Design Engineering

## Sobre o projeto

A landing page é uma apresentação pessoal feita utilizando o aprendizado de sala sobre HTML, CSS e integração com o básicas. A página tem uma área de apresentação, uma seção sobre mim, uma seção que faz integração com as API's do site BrasilAPI e uma seção de contato com links das redes sociais.

## Seções da página

- **Cabeçalho**: É uma barra de navegação com as minhas iniciais e 3 links para navegação rápida.
- **Apresentação**: Coloquei uma breve introdução de quem eu sou.
- **Portifólio Acadêmico**: Deixei 3 blocos (caixas) com informações sobre mim, meu curso atual e minha formação em Engenharia Civil.
- **BrasilAPI**: Aqui estão as 3 API's onde é possível fazer consultas em rotas reais usando o site Brasil API.
- **Contato**: Deixei os links para as minhas redes sociais.
- **Rodapé**: informações finais da página.

## Oque foi utilizado no desenvolvimento:
- HTML
- CSS
- JavaScript
- GitHub
- Vercel

## Integração com a BrasilAPI

O site https://brasilapi.com.br/ oferece várias rotas prontas com dados públicos brasileiros. 

Usei 3 delas na página:

**CEP** - digita um CEP e mostra o endereço (estado, cidade, bairro e rua).
**Registro BR** - digita um domínio `.br` e mostra o status dele (se está registrado, quando expira, etc).
**Câmbio** - digita uma moeda extrangeira e uma data, com isso, elç mostra a cotação de compra e venda atual.

### Como você pode testar:

| Consulta |
| CEP: `78550000` |
| Registro BR | `google.com.br` |
| Câmbio | Moeda: `USD` / Data: um dia útil recente |


## Dificuldades encontradas

- Verifiquei que a API de Câmbio só funciona em dias úteis (fim de semana dá erro).
- Fazer as caixinhas ficarem alinhadas no mesmo tamanho.
- Fazer o layout ficar responsivel em diferentes telas.

## Desenvolvido por:

Letyeri Diel
Curso: Análise e Desenvolvimento de Sistemas
1º Semestre Fasipe