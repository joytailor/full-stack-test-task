module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/prop-types": 0,
        "no-console": 1,
        "jsx-a11y/label-has-for": 0,
        "linebreak-style": ["error", "windows"],
        "react/jsx-filename-extension": [0],
        "react/prefer-stateless-function": [0],
        "linebreak-style": [0],
        "import/prefer-default-export": [0],
        "react/destructuring-assignment": [0],
        "react/jsx-no-bind": [0],
        "jsx-a11y/label-has-associated-control": [0]
    }
};