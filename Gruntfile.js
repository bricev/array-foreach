module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-remove-logging");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        removelogging: {
            dist: {
                src: ['src/polyfill.Array.forEach.js']
            }
        },
        uglify: {
            all: {
                src: ['src/polyfill.Array.forEach.js'],
                dest: 'build/polyfill.Array.forEach.min.js'
            }
        },
        clean: {
          build: ['build']
        }
    });

    grunt.registerTask('default', [
        'clean',
        'removelogging',
        'uglify'
    ]);
};
