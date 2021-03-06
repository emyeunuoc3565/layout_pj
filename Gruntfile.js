module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['concat'],
            }
        },
        concat: {
            gopjs:{
                src:['app/**/*.js'],
                dest:'public/js/app.js'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).

    grunt.registerTask('default', ['watch']);

};