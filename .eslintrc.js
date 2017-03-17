// http://eslint.org/docs/user-guide/configuring

module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": "vue",
  "plugins": ["flow-vars", "react"],
  "globals": {
    "$": true,
    "define": true,
    "require": true
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "amd": true
  },
  "rules": {
    // 不需要
    "space-before-function-paren": 0,
    "eol-last": 0,
    "no-extra-semi": 0,
    "semi": 0,
    "eqeqeq": 0,
    "one-var": 0,
    "no-undef": 0,
    "object-curly-spacing": 0,
    "space-before-blocks": 0,
    "no-trailing-spaces ": 0,
    "prefer-const": 0,
    "no-trailing-spaces": 0,
    "consistent-return": 0,
    "comma-dangle": 0,
    "padded-blocks": 0,
    "space-in-parens": 0,
    "no-multiple-empty-lines": 0,
    "spaced-comment": 0,
    "no-else-return": 0,
    "valid-jsdoc": [0, {
      "requireParamDescription": true,
      "requireReturnDescription": true
    }],

    // 警告
    "no-extra-boolean-cast": 1,
    "no-extra-parens": 1,
    "no-empty": 1,
    "no-use-before-define": [1, "nofunc"],
    "complexity": [1, 10],
    "no-unused-vars": 1,
    "comma-spacing": 1,

    // vue
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,

    // react
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,

    // 错误
    "no-debugger": 2,
    "no-constant-condition": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-invalid-regexp": 2,
    "no-func-assign": 2,
    "valid-typeof": 2,
    "no-unreachable": 2,
    "no-unexpected-multiline": 2,
    "no-sparse-arrays": 2,
    "no-shadow-restricted-names": 2,
    "no-cond-assign": 2,
    "no-native-reassign": 2,

    // 代码风格
    "no-multi-spaces": 1,
    "key-spacing": [1, {
      "beforeColon": false,
      "afterColon": true
    }],
    "block-scoped-var": 2,
    "accessor-pairs": 2,
    "dot-location": [2, "property"],
    "no-lone-blocks": 2,
    "no-labels": 2,
    "no-extend-native": 2,
    "no-floating-decimal": 2,
    "no-loop-func": 2,
    "no-new-func": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-return-assign": [2, "always"],
    "no-redeclare": [2, {
      "builtinGlobals": true
    }],
    "no-unused-expressions": [2, {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-with": 2,
    "space-infix-ops": 2,
    "no-warning-comments": [2, {
      "terms": ["todo", "fixme", "any other term"],
      "location": "anywhere"
    }],
    "curly": 1,

    // common js
    "no-duplicate-imports": 1
  }
};
