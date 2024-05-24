1.	Get ready your local environment with JDK 8 , Node.js 18.18.0 and npm 10.5.0
2.	Suppose your working directory is PWD and Java
3.	Clone https://github.com/devendra80/fullstack-web-one repo in PWD folder
4.	Now you will have PWD/be and PWD/fe folder for back end and front end app.
5.	Run back-end app
	A.	Open command prompt (assuming windows os)
	B.	go to PWD/be folder
	C.	Run mvn spring-boot:run 
	D.	Wait to appear something on console as given below
		Tomcat started on port(s): 8080 (http) with context path ''
		Started SpringBootH2Application in 5.086 seconds (JVM running for 5.922)
	E.	Now back end is ready and it has inbuild H2 database.
	F.	Check by typing this url http://localhost:8080/employees in browser and you should see 5 records.
6.	Run front-end app
	A.	Open command prompt (assuming windows os)
	B.	go to PWD/fe folder
	C.	Run npm install
	D.	Run npm start
	D.	Wait to appear something on console as given below
		webpack compiled successfully
	E.	Now front-end app is ready and it is connected to back-end server running on http://localhost:8080
	F.	Now type this url http://localhost:3000/ and you access a simple web page
7.	Happy fullstacking


===============Adding Basic Auth Security===================

1.	Get ready your local environment with JDK 8 , Node.js 18.18.0 and npm 10.5.0
2.	Suppose your working directory is PWD and Java
3.	Clone https://github.com/devendra80/fullstack-web-one repo in PWD folder
4.	Now you will have PWD/be-basic-auth and PWD/fe-basic-auth folder for back end and front end app.
5.	Run back-end app
	A.	Open command prompt (assuming windows os)
	B.	go to PWD/be-basic-auth folder
	C.	Run mvn spring-boot:run 
	D.	Wait to appear something on console as given below
		Tomcat started on port(s): 8080 (http) with context path ''
		Started SpringBootH2Application in 5.086 seconds (JVM running for 5.922)
	E.	Now back end is ready and it has inbuild H2 database.
	F.	Check by typing this url http://localhost:8080/employees in browser and i
	G.	Open postman, enter basic auth with un=user, pw=password and now use above url, you will see 5 records.
6.	Run front-end app
	A.	Open command prompt (assuming windows os)
	B.	go to PWD/fe-basic-auth folder
	C.	Run npm install
	D.	Run npm start
	D.	Wait to appear something on console as given below
		webpack compiled successfully
	E.	Now front-end app is ready and it is connected to back-end server running on http://localhost:8080
	F.	Now type this url http://localhost:3000/ and you access a simple web page
7.	Happy fullstacking