({
    baseUrl: './',
    // dir: 'release',
    out: './dist/Niina.js',
    name: "Niina",
//    optimize: "none",
    paths: {
        backbone: './lib/backbone',
        marionette: './lib/backbone.marionette',
        jquery: './lib/jquery',
        underscore: './lib/underscore',
        text: './lib/text'
    },
    shim : {
        jquery : {
            exports : 'jQuery'
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        }
    },
    config : {
        //Set the config for the i18n
        //module ID
        i18n: {
            locale: 'fi'
        }
    }
})
