module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#90b',
                        'link-color': 'red',
                        'border-radius-base': '2px',
                        'font-size-base': '100px'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }
};