### ESLint
[ESLint](https://eslint.org)

### Editor Intergration
[Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Plugins:
[Rules for AngularJs](https://www.npmjs.com/package/eslint-plugin-angular)

[Rules for React](https://www.npmjs.com/package/eslint-plugin-react)

### Configuration:
.eslintrc.json:
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
```js
0: off
1: warn
2: error
```
Refer: [Configuring ESLint](https://eslint.org/docs/2.0.0/user-guide/configuring)
