export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: false,
    target : "static",
    head: {
        title: 'Assetto Corsa Mod Repository',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Here you can download a large selection of quality cars and tracks mods for the famous Assetto Corsa simulator developed by kunos simulations'
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            },
            {
                name : "google-site-verification",
                content : "f6gm0ypHvGLB3K5Zm-RSPBrJqQ89LAOQpDJsK9lWnjw"
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.png'
            }
        ],
        script: [{
            src: 'https://kit.fontawesome.com/2fa6fb0d69.js',
            crossOrigin: 'anonymous'
        }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/fontawesome.js',
        '~/plugins/vuelidate.js',
        '~/plugins/login-check.js',
        '~/plugins/bootstrap.js',
        '~/plugins/primevue.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        [
            'primevue/nuxt',
            {
                theme: 'saga-blue',
                ripple: true,
            }
        ]
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
