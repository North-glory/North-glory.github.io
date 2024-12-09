//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '🍕 知识晶体 Q&A',
            collapsable: true,
            children: [
                'qaq/sum_fe_001', 'qaq/sum_fe_002',
                'qaq/sum_java_001', 'qaq/sum_java_002',
                'qaq/sum_db_001',
                'qaq/sum_spring_001', 'qaq/sum_spring_002', 'qaq/sum_spring_003',
                'qaq/sum_ms_001',
            ]
        },
        {
            title: '🍳 规范 Standard',
            collapsable: true,
            children: [
                'specification/ali', 'specification/git',
                'specification/linux01', 'specification/linux02',
                'specification/objectModel', 'specification/提交规范',
                'specification/javaNamingConvention', 'specification/k8s基本命令与pod管理',
            ]
        },
        {
            title: '🏹 前端 Front-end',
            collapsable: true,
            children: [
                'frontend/EChartsStudy', 'frontend/js-json', 'frontend/viaStart', 'frontend/vue-demo',
                'frontend/reco-info', 'frontend/vuepress-plugin-boxx', 'frontend/TCP&UDP',
            ]
        },
        {
            title: '🔨 后端 Back-end',
            collapsable: true,
            children: [
                'backend/spring-source-01', 'backend/spring-source-02', 'backend/spring-source-03',
                'backend/spring-source-04', 'backend/spring-source-05', 'backend/spring-source-06',
                'backend/spring-source-07', 'backend/spring-source-08', 'backend/spring-source-09',
                'backend/spring-source-10', 'backend/spring-source-11', 'backend/spring-source-12',
                'backend/spring-source-13', 'backend/spring-source-14', 'backend/spring-source-15',
                'backend/jdbc-pool-source-01',
                'backend/ArrayList', 'backend/HashMap', 'backend/docker', 'backend/itext', 'backend/poi',
                'backend/quartz', 'backend/dubbo', 'backend/单元测试1', 'backend/单元测试2', 'backend/单元测试3',
                'backend/rabbitmq001', 'backend/rabbitmq002', 'backend/redis01', 'backend/redis02',
                'backend/redis使用场景', 'backend/SSH', 'backend/jwt', 'backend/swagger2', 'backend/thread',
                'backend/ThreadLocal', 'backend/ThreadPool', 'backend/ThreadPool2', 'backend/annotationLog',
                'backend/jvm', 'backend/juc', 'backend/javaLock', 'backend/mysql_explain', 'backend/mybatis一二级缓存',
                'backend/ReentrantLock', 'backend/CountDownLatch', 'backend/zookeeper', 'backend/分布式系统概述',
                'backend/API网关概述', 'backend/spring-security-01', 'backend/spring-security-02',
                'backend/SchedulingConfigurer', 'backend/ThreadTopCPU', 'backend/OOM分类及排查',
                'backend/EasyExcel', 'backend/java_io模型', 'backend/SPI_JdkDubboSpring',
                'backend/spring_application_json', 'backend/springboot配置文件加载顺序',
                'backend/动态代理和静态代理区别', 'backend/zk选举和一致性', 'backend/超时取消分析',
                'backend/spring-mini-ioc', 'backend/Spring的IOC源码以及流程分析',
            ]
        },
        {
            title: '🌴 命理学 Numerology',
            collapsable: true,
            children: [
                "numerology/2024-12-04-CTFLearn.md", 'numerology/2024-12-05-CTFLearn.md', 'numerology/2024-12-06-CTFLearn.md', 'numerology/2024-12-07-CTFLearn.md',
            ]
        },
        {
            title: '🔗 随笔 Essay',
            collapsable: true,
            children: [
                'essay/2024-11-15-CTF-view_source-WriteUp',
                'essay/2024-11-16-1-CTF-get_post-WriteUp',
                'essay/2024-11-16-2-CTF-robots-WriteUp',
                'essay/2024-11-16-3-CTF-backup-WriteUp',
                'essay/2024-11-16-4-CTF-cookie-WriteUp',
                'essay/2024-11-17-1-CTF-disabled_button-WriteUp',
                'essay/2024-11-17-2-CTF-simple_js-WriteUp',
                'essay/2024-11-17-3-CTF-xff_referer-WriteUp',
                'essay/2024-11-17-4-CTF-weak_auth-WriteUp',
                'essay/2024-11-19-1-CTF-command_execution-WriteUp',
                'essay/2024-11-20-1-CTF-simple_php-WriteUp',
                'essay/2024-11-23-1-CTF-3861-WriteUp',
                'essay/2024-11-23-2-CTF-3862-WriteUp',
                'essay/2024-11-24-1-CTF-3863-WriteUp',
                'essay/2024-11-24-2-CTF-3871-WriteUp',
                'essay/2024-11-24-3-CTF-3865-WriteUp',
                'essay/2024-11-25-1-CTF-3867-WriteUp',
                'essay/2024-11-26-1-CTF-3866-WriteUp',

            ]
        }
    ]
}
