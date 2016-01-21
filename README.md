# Angular2-seed
just an Angular2 seed project made in Typescript with some components, directives and pipes...

### Arquitecture
I have choose a folder structure like this:
- src: typescript files
  - components:
  - directives:
  - pipes:
  - services:
  - boot.ts (app initializer)
- template: views
- app: typescript compiled files ("outDir" at tsconfig.json)

### Angular2
to run:
- npm install (if node_modules is missing)
- npm start (this command compile typescript, watches for changes in generated js files and launches a lite server)
