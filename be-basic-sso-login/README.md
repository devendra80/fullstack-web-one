# Getting Started with Create React App

This project a simple demo of SSO on a React.js based app as front-end and spring boot app as back-end. For SSO provider , open source keycloak is being installed locally.

## Setting up SSO env

Install Keycloak by using docker image
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:24.0.4 start-dev

This command starts Keycloak exposed on the local port 8080 and creates an initial admin user with the 
username = admin and password = admin.

Refer https://www.keycloak.org/getting-started/getting-started-docker to setup realm, user, register app 


## Setting up back-end app

In the project directory (be-basic-sso-login):
1.	Clone
2. 	Edit application.properties
		spring.security.oauth2.resourceserver.jwt.jwk-set-uri=<open id cert url>
3. 	Run program 
		mvn spring-boot:run

## Setting up front-end app

In the project directory (be-basic-sso-login):
1. 	Clone
2.	Edit index.js to update IDP server
3.	Edit App.js to invoke back-end API
4.	Run program
	npm install
	npm start
5.	Open [http://localhost:3000]

