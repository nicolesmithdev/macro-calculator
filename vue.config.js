const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'Macro Calculator';
            args[0].minify = false;
            return args;
        });
    },
    publicPath: '/macro-calculator/',
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    },
    pluginOptions: {
        browserSync: {
            files: ['src/*'],
        },
    },
});
