const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    config.plugins.push(new CopyWebpackPlugin([{ from: './node_modules/pdfjs-dist/build/pdf.worker.js', to: '.' }]));

    return config;
};
