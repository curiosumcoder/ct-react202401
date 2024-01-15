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


