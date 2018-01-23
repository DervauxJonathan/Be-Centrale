let mix = require('laravel-mix');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix.sass('assets/scss/app.scss', 'public')
    .setPublicPath('public');

mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            files: [
                'dist/*/'
            ],
            server: {
                baseDir: 'public',
                index: "public/index.html"
            }
        })
    ]
});