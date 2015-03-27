define( ["marionette", "text!../../../tpl/ContactView.html", "i18n!./nls/Contact"] ,function(Marionette,contactTemplate,msg){
    var ContactView = Marionette.ItemView.extend({
        template: _.template(contactTemplate, msg)
    });
    return ContactView;
});

