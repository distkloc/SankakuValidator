module.exports = (grunt) ->

    grunt.initConfig
        connect: 
            server: 
                options: 
                    livereload: true
                    port: 9000
                    open: 'http://localhost:<%= connect.server.options.port %>/view/'

        less:
            production:
                options: 
                    paths: ['<%= baseLessDir %>less/']
                    cleancss: true
                files: 
                    '<%= projectName %>.min.css': '<%= baseLessPath %>'        
            development: 
                options:
                    paths: '<%= less.production.options.paths %>'
                files:
                    '<%= projectName %>.css': '<%= baseLessPath %>'       

        esteWatch:
            options: 
                dirs: ['./', '<%= baseLessDir %>', '<%= baseLessDir %>less/']
            'less': (filepath) -> 'less:development'

        projectName: 'sankakuvalidator'

        baseLessDir: 'theme/boilerplate/'

        baseLessPath: '<%= baseLessDir %>boilerplate.less'

    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-contrib-connect'
    grunt.loadNpmTasks 'grunt-este-watch'

    grunt.registerTask 'default', [
            'less:development', 
            'connect', 
            'esteWatch'
            ]

