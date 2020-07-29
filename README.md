# reuperação de senha
**RF (Requisitos funcionais)**

- O usuário deve poder recuperar sua senha informando seu email;
- O usuário deve receber email com instruções de recuperação;
- Usuário deve poder resetar sua senha;

**RNF (Requisitos não funcionais)**

- Utilizar mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

**RN (Requisitos de negócio)**

- O link enviado por email por email para resetar senha deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;
# atualização do perfil

**RF**

- Usuáriod eve pode atualizar seu perfil (email, nome e senha)

**RNF**


**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário precisa confirmar a nova senha;
# painel do prestador

**RF**
- O usuário deve poder listar bseus agendamentos de um dia específico.
- O prestador deve receber uma noticifação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- os agendamento do prestador no dia, deve ser armazenados em cache;
- as notificação do prestador deve ser armazenadas no MongoDB;
- as notificações do prestador, devem ser enviados em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida. para que o prestador possa controlar;
# agendamenmto de serviços

**RF**

- O usário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar todos os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar os horários disponiveis de um dia específico de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
-  A listada de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve duara 1h exatamente;
- os agendamentos deve estar disponíveis entre 8h e 18h (primei;ro as 8 e último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um hoirário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
