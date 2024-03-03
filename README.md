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

This module required for working with TypeScript:
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