# 🚀 AWS Linux Lab

> Laboratório de Infraestrutura Linux desenvolvido durante meus estudos em Cloud Computing e Administração de Sistemas.

---

# 📌 Sobre o projeto

Este projeto documenta a construção de um ambiente Linux utilizando uma instância Ubuntu hospedada na Amazon EC2.

Durante o laboratório foram configurados diversos serviços utilizados em ambientes profissionais, incluindo servidor web, HTTPS, Virtual Hosts, Reverse Proxy e uma API desenvolvida em Node.js.

---

# 🏗️ Arquitetura

```text
                    Internet
                         │
                         ▼
               HTTPS (443)
                         │
                         ▼
                    Nginx
               (Reverse Proxy)
                         │
         ┌───────────────┴───────────────┐
         ▼                               ▼
   Site Principal                  API Node.js
 (/var/www/html)                localhost:3000
```

---

# 🛠️ Tecnologias utilizadas

- Ubuntu Server 26.04
- Amazon EC2
- Linux
- SSH
- Git
- GitHub
- Nginx
- Node.js
- Express
- Systemd
- Let's Encrypt
- Certbot
- DuckDNS

---

# 📚 Projetos desenvolvidos

| Projeto | Status |
|----------|:------:|
| Administração Linux | ✅ |
| Servidor Web (Nginx) | ✅ |
| HTTPS com Let's Encrypt | ✅ |
| Virtual Hosts | ✅ |
| API Node.js | ✅ |
| Reverse Proxy | ✅ |
| Serviço com systemd | ✅ |

---

# 📖 Conhecimentos adquiridos

- Administração básica de Linux
- Gerenciamento de permissões
- SSH utilizando chave privada
- Configuração do Nginx
- Hospedagem de múltiplos sites
- HTTPS com Let's Encrypt
- Node.js
- Express
- Reverse Proxy
- Gerenciamento de serviços com systemd

---

# 🚀 Próximos projetos

- PostgreSQL
- Docker
- Docker Compose
- Kubernetes
- Terraform
- Ansible

---

# 👨‍💻 Autor

**Romário Henrique**

Projeto desenvolvido como parte da minha jornada de estudos em Infraestrutura, Linux, Cloud Computing e DevOps.
