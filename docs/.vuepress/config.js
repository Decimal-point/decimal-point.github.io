module.exports = { // 站点配置
    base: './',   
    lang: 'zh-CN',
    title: '全栈开发',
    head: [
        ['link', { rel: 'icon', href: '/logo/logo.jpeg' }]
    ],
    description: '全栈知识点', // 主题和它的配置   
    themeConfig: {
        navbar: [{
                text: '前端',
                children: [{
                        text: '前端基础',
                        children: [{
                                text: '前端知识体系',
                                link: '/md/web/'
                            },
                            {
                                text: 'CSS',
                                link: '/md/web/css/'
                            },
                            {
                                text: 'JavaScript(ES5)',
                                link: '/md/web/es5/'
                            },
                            {
                                text: 'ES6',
                                link: '/md/web/es6/'
                            }
                        ]
                    },
                    {
                        text: '前端进阶-VUE',
                        children: [{
                                text: 'Vue2.x',
                                link: '/md/web/vue2/'
                            },
                            {
                                text: 'Vue3.x',
                                link: '/md/web/vue3/'
                            }

                        ]
                    }
                ]
            },
            {
                text: '语言',
                children: [{
                        text: 'Java',
                        children: [{
                            text: 'Java 知识体系',
                            link: '/md/lang/java/'
                        }, ]
                    },
                    {
                        text: 'Scale',
                        children: [{
                            text: 'Scale 知识体系',
                            link: '/md/lang/scale/'
                        }]
                    },
                    {
                        text: 'Python',
                        children: [{
                            text: 'Python 知识体系',
                            link: '/md/lang/python/'
                        }]
                    },
                    {
                        text: 'GO',
                        children: [{
                            text: 'Go 知识体系',
                            link: '/md/lang/go/'
                        }]
                    }
                ]
            },
            {
                text: '编程思想',
                children: [{
                        text: '依赖注入',
                        link: '/md/mind/'
                    },
                    {
                        text: '开发原则',
                        link: '/md/mind/'
                    }
                ]
            },
            {
                text: '框架',
                children: [{
                        text: 'JAVA-Spring框架',
                        children: [{
                                text: 'Spring 框架知识体系',
                                link: '/md/spring/spring-framework-ioc.html'
                            },
                            {
                                text: 'Spring 核心(IOC)',
                                link: '/md/spring/spring-framework-ioc.html'
                            },
                            {
                                text: 'Spring 核心(AOP)',
                                link: '/md/spring/spring-framework-aop.html'
                            },
                            {
                                text: 'Spring MVC',
                                link: '/md/spring/spring-framework-webmvc.html'
                            }
                        ]
                    },
                    {
                        text: 'JAVA-MyBatis框架',
                        children: [{
                                text: 'SpringBoot 基础',
                                link: '/md/springboot/springboot.html'
                            },
                            {
                                text: 'SpringBoot 原理',
                                link: '/md/springboot/'
                            }
                        ]
                    },
                    {
                        text: 'JAVA-Jersey框架',
                        children: [{
                                text: 'SpringCloud 基础',
                                link: '/md/springcloud/'
                            },
                            {
                                text: 'SpringCloud-Alibaba',
                                link: '/md/springcloud/'
                            }
                        ]
                    }
                ]
            },
            {
                text: '架构',
                children: [{
                    text: 'Restful',
                    children: [{
                            text: 'restful 风格',
                            link: '/md/framework/'
                        },
                        {
                            text: 'Jersey',
                            link: '/md/framework/'
                        }
                    ]
                }]
            },
            {
                text: '工具',
                children: [{
                        text: '开发工具',
                        link: '/md/tool/'
                    },
                    {
                        text: '调试工具',
                        link: '/md/tool/'
                    }
                ]
            },
            {
                text: '部署',
                children: [{
                        text: 'Linux',
                        link: '/md/deploy/linux/'
                    },
                    {
                        text: 'Windows',
                        link: '/md/deploy/windows/'
                    },
                    {
                        text: 'Docker',
                        link: '/md/deploy/docker/'
                    }
                ]
            },
            {
                text: '运维',
                children: [{
                    text: '运维知识体系',
                    link: '/md/devops/'
                }]
            },
            {
                text: '测试',
                children: [{
                    text: '测试知识体系',
                    link: '/md/test/'
                }]
            },
            {
                text: '产品|团队',
                children: [{
                    text: '产品知识体系',
                    link: '/md/product/'
                }]
            },
            {
                text: '算法',
                children: [{
                    text: '算法知识体系',
                    link: '/md/algorithm/'
                }]
            },
            {
                text: '大数据',
                children: [{
                    text: '大数据知识体系',
                    link: '/md/data/'
                }]
            },
            {
                text: '嵌入式',
                children: [{
                    text: '嵌入式开发',
                    link: '/md/embedded/'
                }]
            },
            {
                text: '硬件',
                children: [{
                    text: '硬件知识体系',
                    link: '/md/hardware/'
                }]
            },
            {
                text: '关于',
                link: '/md/about/'
            }
        ]
    }
}