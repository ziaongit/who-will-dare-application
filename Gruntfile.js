module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: '\n \n ',
             },
            dist: {
                src: ['bower_components/jquery/dist/jquery.min.js','bower_components/bootstrap/dist/js/bootstrap.min.js','resources/js/main.js'],
                dest: 'resources/js/bin/main.js',
            },
            styles: {
            src: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'resources/css/main.css'],
            dest: 'resources/css/bin/main.min.css'
            }
        },
        uglify: {
            options: {
            mangle:false
            },
            my_target: {
            files: {
                'resources/js/bin/main.min.js': ['resources/js/bin/main.js']
            }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Tasks
    grunt.registerTask('CompileJavaScript', ['concat','uglify']);
    grunt.registerTask('default', ['concat','uglify']);

}