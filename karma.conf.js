module.exports = (config) => {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        plugins: [
            'karma-jasmine',
            'karma-typescript',
            'karma-chrome-launcher',
            'karma-mocha-reporter'
        ],
        files: [
            {
                pattern: './src/**/!(index).ts'
            }
        ],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        reporters: ['mocha', 'karma-typescript'],
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.spec.json',
            report: {
                html: 'coverage',
                text: ''
            }
        }
    })
}
