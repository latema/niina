module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './',
                    keepalive: true
                }
            }
        }   
        // jshint: {
        //   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        //   options: {
        //     globals: {
        //       jQuery: true
        //     }
        //   }
        // },
        // watch: {
        //   files: ['<%= jshint.files %>'],
        //   tasks: ['jshint']
        // }
    });

    

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // grunt.registerTask('default', ['jshint']);

};
