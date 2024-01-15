Services
* Distributed systems.
	- RPC
'90s
	- DCOM
	- CORBA
'00s
	- Web Services (HTTP, XML, SOAP, WSDL)
		- ASP.NET Web Services
		- WS-*
		- WCF
	- gRPC, ...
	- REST (architecture)
		- HTTP (client, server*)
		- RESTFul Services
			- JSON, XML
		- OData
		- GraphQL (Facebook)

* npx create-next-app@latest ndemo9 --ts

Northwind, Products

GET    /api/product/[id]
DELETE /api/product/[id]
GET    /api/product/search/[filtro]
POST   /api/product * BODY
PUT    /api/product * BODY

route.ts, Route Handlers

---------------------------------
Next.js

Rendering Strategies
- Client Side Rendering (CSR)
- Server Side Rendering (SSR)
	- Static Rendering
	- Dynamic Rendering
	- Streaming

- Components
	- Client Component
	- Server Component

	/product
	/product/[id]
	/product/create

	page.tsx
--------------------------------------------
OWASP. Top 10 (2021), vulneravility
- Broken Access Control
- Cryptographic Failures
- Injection
- Insecure Design
	- Secure SDLC
- Security Misconfiguration
	- Center for Internet Security (CIS) guidelines
- Vulnerable and Outdated Components
	* ej.: log4j (execute code)
- Identification and Authentication Failures (**)
- Software and Data Integrity Failures
- Security Logging and Monitoring Failures
- Server-Side Request Forgery (SSRF)

- Best practices
	- Development
		- TypeScript
		- ESLint
	- Use HTTPS with SSL/TLS
	- HSTS
	- HTTP Only
	- Salting and peppering password
	- Never trust frontend
	- Headers
		https://owasp.org/www-project-secure-headers/

- Authentication & Authorization

	User Authentication
	- Strategies for identify identity
		- Knowledge based
		- Ownership based
		+ Two-Factor
		- Biological based

	- Cookie based vs Token based


- node_modules
ejercicio1
ejercicio2
ejercicio3
ejercicio4
ejercicio5






	



