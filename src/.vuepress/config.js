module.exports = {
  	title: 'Hello VuePress',
  	description: 'Just playing around',
    base: '/blog/',
    dest: 'docs',  
  	themeConfig : {
        nav : [
            { text: '接口定义', link: '/apiword' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
        ]
    }
}