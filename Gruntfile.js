module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 9000,
                    open: 'http://localhost:<%= connect.server.options.port %>/view/'
                }
            }
        },
        less:{
            production: {
                options: {
                    paths: ['less'],
                    cleancss: true
                },
                files: {
                    '<%= projectName %>.min.css': '<%= projectName %>.less'        
                }
            },
            development: {
                options: {
                    paths: '<%= less.production.options.paths %>'
                },
                files: {
                    '<%= projectName %>.css': '<%= projectName %>.less'        
                } 
            }
        },
        esteWatch: {
            options: {
                dirs: ['./', 'less/']
            },
            'less': function(filepath) { return 'less:development' }
        },

        projectName: 'sankakuvalidator',
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-este-watch');

    grunt.registerTask('default', [
            'less:development', 
            'connect', 
            'esteWatch'
            ]);

};
