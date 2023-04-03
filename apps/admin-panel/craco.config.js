const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@UiKits': path.resolve(__dirname, './src/UiKits'),
            '@Assets': path.resolve(__dirname, './src/Assets'),
            '@Images': path.resolve(__dirname, './src/Assets/Images'),
            '@Icons': path.resolve(__dirname, './src/Assets/Icons'),
            '@Styles': path.resolve(__dirname, './src/Styles'),
            '@Layouts': path.resolve(__dirname, './src/Layouts'),
            '@Pages': path.resolve(__dirname, './src/Pages'),
            '@Routes': path.resolve(__dirname, './src/Routes'),
            '@Mock': path.resolve(__dirname, './src/Mock'),
            '@Utils': path.resolve(__dirname, './src/Utils'),
            '@Services': path.resolve(__dirname, './src/Services'),
            '@Hooks': path.resolve(__dirname, './src/Hooks'),
            '@Models': path.resolve(__dirname, './src/Models'),
            '@Store': path.resolve(__dirname, './src/Store'),
            '@Config': path.resolve(__dirname, './src/Config'),
            '@Api': path.resolve(__dirname, './src/Api'),
            '@Slices': path.resolve(__dirname, './src/Slices'),
            '@FormValidations': path.resolve(__dirname, './src/FormValidations'),
        },
    },
    eslint: {
        enable: true,
    },
};
