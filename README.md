# ☁️ Weather API - 

Esta é uma API REST para consulta de previsão do tempo, desenvolvida com foco em **Clean Architecture** e princípios **SOLID**, aplicando conceitos avançados de backend em Node.js.

O projeto utiliza uma estratégia de **Caching** para otimizar o consumo de APIs externas, garantindo performance de milissegundos e economia de créditos em provedores de dados climáticos.

---

## 🚀 Tecnologias e Ferramentas

* **Node.js & TypeScript**
* **Fastify** (Framework Web)
* **Axios** (Integração com API Visual Crossing)
* **Redis & Docker** (Estratégia de Cache em memória)
* **Zod** (Validação de Schemas e Variáveis de Ambiente)
* **SOLID & Clean Architecture**

---

## 🛠️ Arquitetura

A aplicação foi desenhada para ser independente de ferramentas externas:

* **Repository Pattern:** Abstração completa das fontes de dados (Axios e Redis) por meio de interfaces.
* **Use Cases:** Lógica centralizada para coordenação entre o cache e a API externa.
* **Factories:** Injeção de dependência automatizada para facilitar a manutenção e testes.

---

