define( ["jquery", "underscore", "marionette", "text!../../../tpl/MenuView.html", "i18n!./nls/Menu"] ,function($, _, Marionette,MenuTpl,msg){
    var MenuView = Marionette.ItemView.extend({
        template: _.template(MenuTpl, msg),
        events: {
            "click #about": "showAbout",
            "click #contact": "showContact",
            "click #cv": "showCV",
            "click #coming": "showComing",
            "click #mainpage": "showPaintings",
            "click #finnish": "setFinnish",
            "click #english": "setEnglish",
            "click #frontpage": "showPaintings"
        },
        setFinnish: function(){
            var Niina = require('Niina');
            Niina.vent.trigger("set:fin");
        },
        setEnglish: function(){
            console.log("setEnglish");
            var Niina = require('Niina');
            Niina.vent.trigger("set:eng");
        },
        removeClass: function(){
            this.$('a').removeClass('active');
        },
        showAbout: function(){
            var Niina = require('Niina');
            this.removeClass();
            this.$('#about').addClass('active');
            Niina.vent.trigger("show:about");
        },
        showContact: function(){
            var Niina = require('Niina');
            this.removeClass();
            this.$('#contact').addClass('active');
            Niina.vent.trigger("show:contact");
        },
        showCV: function(){
            var Niina = require('Niina');
            this.removeClass();
            this.$('#cv').addClass('active');
            Niina.vent.trigger("show:CV");
        },
        showComing: function(){
            var Niina = require('Niina');
            this.removeClass();
            this.$('#coming').addClass('active');
            Niina.vent.trigger("show:upcoming");
        },
        showPaintings: function(){
            console.log("PAINTINGS");
            var Niina = require('Niina');
            this.removeClass();
            this.$('#mainpage').addClass('active');
            Niina.vent.trigger("show:paintings");
        }

    });
    return MenuView;
});