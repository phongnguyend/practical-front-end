### ESLint
[ESLint](https://eslint.org)

### Editor Intergration
[Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Plugins:
[ESLint Plugin Angular](https://www.npmjs.com/package/eslint-plugin-angular)

[ESLint Plugin React](https://www.npmjs.com/package/eslint-plugin-react)

### .eslintrc.json:
```js
{
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "no-console": 1
  }
}
```
