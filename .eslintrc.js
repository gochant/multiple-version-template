module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "plugins": [
        "requirejs"
    ],
    "globals": {
        "define": false
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            //"always"
        ]
    }
};