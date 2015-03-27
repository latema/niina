define( ["marionette", "text!../../../tpl/UpcomingView.html", "i18n!./nls/Upcoming"] ,function(Marionette,UpcomingTpl,msg){
    var upcomingView = Marionette.ItemView.extend({
        template: _.template(UpcomingTpl,msg)
    });
    return upcomingView;
});