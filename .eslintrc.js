module.exports = {
    root: true,
    extends: [
        '@react-native-community/eslint-config',
        'standard-with-typescript'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-native'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    env: {
        'react-native/react-native': true,
    },
    rules: {
        'prettier/prettier': 0,
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'error',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            }
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
        ],
        'react-native/no-raw-text': [
            'warn',
            {
                skip: ['CustomText'],
            }
        ],
        'react-native/no-single-element-style-arrays': 'warn',
        'object-curly-spacing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/require-array-sort-compare': [
            'error',
            {
                ignoreStringArrays: true,
            }
        ],
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'always',
                allowMultiline: true,
                children: true,
            }
        ],
        'eol-last': ['error', 'always'],
        'no-multiple-empty-lines': 'error',
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: {
                    body: 1,
                    parameters: 2,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
            }
        ],
        indent: 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            }
        ],
    },
};
