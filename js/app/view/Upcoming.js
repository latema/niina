define( ["marionette", "text!../../../tpl/UpcomingView.html", "i18n!./nls/Upcoming"] ,function(Marionette,UpcomingTpl,msg){
    console.log("up comming");
    console.log("upcomingTPL", UpcomingTpl);
    console.log("msg", msg);
    var upcomingView = Marionette.ItemView.extend({
        template: _.template(UpcomingTpl,msg)
    });
    console.log("will ret upcoming");
    return upcomingView;
});