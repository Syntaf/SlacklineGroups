const { environment } = require('@rails/webpacker')

environment.config.merge({
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
});

// Preventing Babel from transpiling NodeModules packages
environment.loaders.delete('nodeModules');

module.exports = environment