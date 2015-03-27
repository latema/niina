define( ["marionette", "text!../../../tpl/AboutView.html", "i18n!./nls/About"], function( Marionette, AboutTemplate, msg ){
    var AboutView = Marionette.ItemView.extend({
        template: _.template(AboutTemplate, msg)
    });
    return AboutView;
});
