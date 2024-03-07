# ExpressAPIPostgres

# Description
Simple MarketPlace API using Express and PostgreSQL

![SwaggerUIScreen](images/SwaggerUIScreen.png)


## Prerequisites:
Install the below tools to work with this project:

- NodeJS: https://nodejs.org/en


- TypeScript: https://www.typescriptlang.org/download
    Command Used on this project to install TypeScript:
        - npm install typescript --save-dev

If you wish to compile the code in TypeScript and generate js files, use this command:

```bash
npx tsc
```

### Project Initial Configuration Generation
Before beginning the project, this command was used to generate an initial package.json configuration:
```bash
npm init --yes
```

### TypeScript Configuration
To begin working with TypeScript, this command was used:
```bash
npx tsc --init
```

These package and TypeScript execution engine are required for working with TypeScript:
```bash
npm install @types/node typescript
npm install -D ts-node
```

# Express modules Installation
Install the below modules to build api routes:
```bash
npm install express
npm install cors
```

### Types for above TypeScript modules
Install these types so that TypeScript can work with the modules above:
```bash
npm add @types/express
npm add @types/cors
```


## Before running the API
Install all dependencies from the package.json to start working with this project:
```bash
npm install
```

## Generating OpenAPISpec and Running the API
tsoa has to be installed globaly to generate routes and the OAS spec, so this command had to be run:
```bash
npm install -g tsoa
```
To generate the tsoa routes and the openapi spec on the build directory, respectively, run:
```bash
tsoa routes
tsoa spec
```
After that you can build the js files of the project with tsc and then run the generated JavaScript project:
```bash
npx tsc
node dist/src/index.js
```

## Running PostgreSQL Database
To test the API with some real database data, we use PostgreSQL Server to run a database server and DBeaver to run the marketplace.sql file to create the database and its tables, you can install each one with the links below:

https://www.postgresql.org/download/windows/


## Test of Post method
Use this command to test the post method of the /client route:
curl -X POST -H "Content-Type: application/json" -d '{
  "client_id": 123,
  "name": "First Client",
  "email": "first@client.com",
  "phone_number": "+123456789"
}' http://localhost:4000/client

Alternatively, you can now access the /docs route on your browser and test the post route with the Swagger UI