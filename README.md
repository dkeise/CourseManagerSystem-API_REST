# CourseManagerSystem-API_REST

# Arquitetura Model-Routes-Service-Controller

* Model: Modelo de dados.
* Routes: Rotas de acesso da API.
* Controllers: Funções Middleware para interagir com as rotas.
* Services(DAO): DAO.

API Rest feito em TypeScript, utilizado Firebase Firestorm Database.
Trabalho de tela de login, com operação de CRUD para Pós em Engenharia de Software 

O link raiz da API, não funciona porque deriva.
    
    https://us-central1-course-manager-system.cloudfunctions.net/api

Padrões de resposta HTTP:
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

Estudantes
Rotas:
	
	Retorna um studante específico pelo seu ID com método GET:
	https://us-central1-course-manager-system.cloudfunctions.net/api/students/
       	
	Retorna um studante específico pelo seu ID com método GET:
	https://us-central1-course-manager-system.cloudfunctions.net/api/students/:id
        
	Retorna um estudante específico pelo seu email e senha:
        https://us-central1-course-manager-system.cloudfunctions.net/api/students/:email/:password

Professores
Rotas:
        
	Retorna todos os professores com método GET:
        https://us-central1-course-manager-system.cloudfunctions.net/api/teachers/
	
	Retorna um professor específico pelo seu ID com método GET:
        https://us-central1-course-manager-system.cloudfunctions.net/api/teachers/:id
	
	Retorna um professor específico pelo seu email e senha:
        https://us-central1-course-manager-system.cloudfunctions.net/api/teachers/:email/:password

       
        Emails de teste:
    ✓	amanda_124@student.com ->124ffgh4
	✓	robert_018@student.com -> 12ui8w9q
	✓	richard_412@student.com -> 318yg78g
	✓	rayssa_005@student.com -> 0846kk1q
	✓	fabiane_945@student.com -> fgh937sf
	✓	diza_467@student.com -> dakkq123l
	✓	gabi_245@student.com -> ggab135
	✓	keise_778@student.com -> kk12lso1
	✓	talita_355@student.com -> 113pqr44
	✓	vitor_567@student.com -> 124jkrtq
	✓	joel_453@student.com -> jty221rt
	✓	aline_654@student.com -> aaii234tu
	✓	junior_345@student.com -> jun333upq
	✓	robson_332@student.com -> r123npki
	✓	james_123@student.com -> jam123ec

	✓	miguel_eas@teacher.com -> djnuk289
	✓	paulo_dns@teacher.com -> 23dniu9jd
	✓	rubbens_nas@teacher.com -> 124dda23d
	✓	luis_das@student.com -> 1wsqfew124
	✓	joaquin_dks@teacher.com -> sackll214
	✓	carlos_ads@teacher.com -> askl211q1
	✓	fernanda_nej@teacher.com -> 13endsa13
	✓	yasmin_nsj@teacher.com -> asdkl1212
	✓	maxwell_ndj@teacher.com -> opaL91W
	✓	vilar_qwr@teacher.com -> asjbkq321
