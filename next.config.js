const nextTranslate = require('next-translate-plugin')

module.exports = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    swcMinify: true,
    ...nextTranslate()
}
