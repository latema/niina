define( ["marionette",
    "backbone",
//    "app/Niina.Site",
    "app/view/Menu",
    "app/view/Paintings",
    "app/view/About",
    "app/view/Contact",
    "app/view/CV",
    "app/view/Upcoming"], function (Marionette, Backbone, MenuView, PaintingsView,
                                  AboutView, ContactView, CVView, UpcomingView) {

    var Niina = new Backbone.Marionette.Application();

    console.log("ihanaa");

    // creates Region objects
    Niina.addRegions({
        menu : '#sidemenu',
        main : '#content'
    });

    var OurRouter = Backbone.Router.extend({
        routes: {
            "paintings": "showPaintings",
            "about": "showAbout",
            "contact": "showContact",
            "cv": "showCV",
            "coming": "showUpcoming"
        },
        showPaintings: function() {
            console.log("triggered paintings")
            Niina.vent.trigger("show:paintings");
        },
        showAbout: function() {
            Niina.vent.trigger("show:about");
        },
        showContact: function() {
            Niina.vent.trigger("show:contact");
        },
        showCV: function() {
            Niina.vent.trigger("show:CV");
        },
        showUpcoming: function() {
            Niina.vent.trigger("show:upcoming");
        }
    });

    Niina.vent.bind('show:frontpage', function(){
        var menuView = new MenuView();
        Niina.menu.show( menuView );

        var paintingsView = new PaintingsView();
        Niina.main.show( paintingsView );
    });

    Niina.vent.bind('show:about', function(){
        var aboutView = new AboutView();
        Niina.main.show( aboutView );
    });

    Niina.vent.bind('show:contact', function(){
        var contactView = new ContactView();
        Niina.main.show( contactView );
    });

    Niina.vent.bind('show:CV', function(){

        // Scroll window to top position in DOMReady
        $(function(){
            window.scrollTo(0, 0);
        });
        var cvView = new CVView();
        Niina.main.show( cvView );
    });

    Niina.vent.bind('show:upcoming', function(){
        var upcomingView = new UpcomingView();
        Niina.main.show( upcomingView );
    });

    Niina.vent.bind('show:paintings', function(){
        var paintingsView = new PaintingsView();
        Niina.main.show( paintingsView );
    });

    Niina.vent.bind('set:fin', function(){
        console.log("set fin");
        localStorage.setItem('locale', "fi");
        location.reload();
    });

    Niina.vent.bind('set:eng', function(){
        console.log("set eng");
        localStorage.setItem('locale', "en-US");
        location.reload();
    });

    Niina.NiinaRouter = new OurRouter();
    Backbone.history.start();

//    var controller = new Site.Controller();
//    controller.start();
    Niina.vent.trigger('show:frontpage');
    console.log(" TEST NIINA ");
    return Niina;
});