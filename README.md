# HeroesApp

Information Page about heroes from DC and Marvel
## **Technologies used**
-  React
-  JavasScript
-  vite

## **Known bugs and errors**

no bugs and errors

## **pending updates**

no pending updates

## **Version**

-   V1.0.0: initial project

# Installation and configuration of Jest + React Testing Library
## Projects React + Vite

1. Installations:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Optional: if we use Fetch API
```
yarn add --dev whatwg-fetch
```

3. Update scripts of __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Create configuration of babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Optional, Create Jest config and setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// in case you need the implementation of FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```
