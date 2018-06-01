module.exports = {
    title: 'My VuePoint',
    description: 'Playing with concepts around using VuePress and custom Vue components',
    dest: 'docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/Notes/' },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: {
            '/Notes/': [
                '',
                'Astyages',
                'Vidit',
                'Vino'
            ],
            // fallback
            '/': [
                '',
                'about'
            ]
        }
    },
    markdown: {
        lineNumbers: true
    }
  }