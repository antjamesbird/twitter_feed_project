module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        colors: true,
        client: {
            clearContext: false
        },
        failOnEmptyTestSuite: false,
        coverageReporter: {
            reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'html' }
            ],
        },
        frameworks: [
            'jasmine',
        ],
        files: [
            'tests/tests.index.js',
        ],
        preprocessors: {
            'tests/tests.index.js': ['webpack', 'sourcemap'],
        },
        reporters: ['spec', 'coverage'],
        // reporters: config.coverage ? ['progress', 'coverage'] : ['progress', 'kjhtml'],
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        enforce: 'pre',
                        test: /.spec\.js$/,
                        include: /tests/,
                        exclude: /node_modules/,
                        use: [{ loader: 'babel-loader' }]
                    },
                    {
                        enforce: 'pre',
                        test: /\.js$/,
                        include: /src/,
                        exclude: /node_modules/,
                        use: [{ loader: 'istanbul-instrumenter-loader', query: { esModules: true } }]
                    },

                    {
                        test: /\.js$/,
                        include: /src/,
                        exclude: /node_modules|tests/,
                        use: [{ loader: 'babel-loader' }]
                    },
                ],
            },
        },

    });
};
