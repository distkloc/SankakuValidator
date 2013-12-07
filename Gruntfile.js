module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    livereload: true
                }
            }
        },
        less:{
            development: {
                options: {
                    paths: ['less']
                },
                files: {
                    'sankakuvalidator.css': 'sankakuvalidator.less'
                } 
            },
            production: {
                options: {
                    paths: ['less'],
                    cleancss: true
                },
                files: {
                    'sankakuvalidator.css': 'sankakuvalidator.less'
                } 
            }
        },
        esteWatch: {
            options: {
                dirs: ['./', 'less/'],
            },
            'less': function(filepath) { return 'less:development' }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-este-watch');

    grunt.registerTask('default', ['less:development', 'connect', 'esteWatch']);

};
