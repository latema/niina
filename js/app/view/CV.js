define( ["marionette", "text!../../../tpl/CVView.html", "i18n!./nls/CV"] ,function(Marionette, CVTemplate, msg){
    var CVView = Marionette.ItemView.extend({
        template: _.template(CVTemplate, msg)
    });
    return CVView;
});