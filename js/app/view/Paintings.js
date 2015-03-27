define( ["marionette", "text!../../../tpl/PaintingsView.html", "i18n!./nls/Paintings"]
    ,function(Marionette,PaintingsTpl,msg){
    var PaintingsView = Marionette.ItemView.extend({
        template: _.template(PaintingsTpl,msg),
        selectMenuItem: function (menuItem) {
            console.log(menuItem);
        }
    });
    return PaintingsView;
});


