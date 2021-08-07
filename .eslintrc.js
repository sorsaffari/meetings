module.exports = {
    plugins: ['prettier'],
    extends: ['react-app', 'react-app/jest', 'plugin:react/recommended', 'prettier', 'plugin:prettier/recommended'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        /**
         * Prettier Rules
         */
        'prettier/prettier': 'error',

        /**
         * Javascript Rules
         */
        // possible errors
        'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', { allow: ['error'] }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-await-in-loop': 'error',
        'no-dupe-else-if': 'error',
        'no-import-assign': 'error',
        'no-template-curly-in-string': 'error',
        // best practices
        'block-scoped-var': 'error',
        'default-case': 'error',
        'default-param-last': 'error',
        eqeqeq: 'error',
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-extra-bind': 'error',
        'no-multi-spaces': 'error',
        'no-return-await': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'require-await': 'error',
        'dot-notation': 'error',
        'guard-for-in': 'error',
        'no-else-return': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-lone-blocks': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-sequences': 'error',
        yoda: 'error',
        // variables
        'no-undef-init': 'error',
        // stylistic issues
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: 'error',
        'comma-spacing': ['error', { before: false, after: true }],
        'consistent-this': ['error', 'self'],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'no-lonely-if': 'error',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'prefer-object-spread': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-before-blocks': 'error',
        // ES6
        'arrow-spacing': 'error',
        'no-confusing-arrow': 'error',
        'no-duplicate-imports': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'prefer-template': 'error',
        'rest-spread-spacing': 'error',
        'template-curly-spacing': 'error',
        'prefer-spread': 'error',
        'prefer-rest-params': 'error',
        'no-useless-computed-key': 'error',

        /**
         * React Rules
         */
        'react/prop-types': 'off',
    },
};
