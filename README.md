# ExpressAPIPostgres

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

This module is required for working with TypeScript:
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


## Run the API
Running the API is simple, install all modules from the package.json with:
```bash
npm install
```

and then you can run the API with:
```bash
npm run dev
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
