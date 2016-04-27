define( ["marionette",
    "backbone",
//    "app/Niina.Site",
    "app/view/Menu",
    "app/view/Paintings",
    "app/view/2014",
    "app/view/About",
    "app/view/Contact",
    //"app/view/CV",
    "app/view/Upcoming"], function (Marionette, Backbone, MenuView, PaintingsView,
                                  View2014, AboutView, ContactView, UpcomingView) {

    var Niina = new Backbone.Marionette.Application();

    // creates Region objects
    Niina.addRegions({
        menu : '#sidemenu',
        main : '#content'
    });

    var OurRouter = Backbone.Router.extend({
        routes: {
            "frontpage": "showFrontpage",
            "paintings": "showPaintings",
            "2014": "show2014",
            "about": "showAbout",
            "contact": "showContact",
            "coming": "showUpcoming"
        },
        showFrontpage: function() {
            Niina.vent.trigger("show:frontpage");
        },
        showPaintings: function() {
            Niina.vent.trigger("show:paintings");
        },
        show2014: function() {
            Niina.vent.trigger("show:2014");
        },
        showAbout: function() {
            Niina.vent.trigger("show:about");
        },
        showContact: function() {
            Niina.vent.trigger("show:contact");
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
        $(function(){
            window.scrollTo(0, 0);
        });
        $("#mainpage").removeClass("active");
    });

    Niina.vent.bind('show:about', function(){
        var aboutView = new AboutView();
        Niina.main.show( aboutView );
    });

    Niina.vent.bind('show:contact', function(){
        var contactView = new ContactView();
        Niina.main.show( contactView );
    });

    Niina.vent.bind('show:upcoming', function(){
        var upcomingView = new UpcomingView();
        Niina.main.show( upcomingView );
    });

    Niina.vent.bind('show:paintings', function(){
        Niina.vent.trigger('show:2014');
    });

    Niina.vent.bind('show:2014', function(){
        var view2014 = new View2014();
        Niina.main.show( view2014 );
        // Scroll window to top position in DOMReady
        $(function(){
            window.scrollTo(0, 0);
        });
        $(".menuitem").removeClass("active");
        $("#mainpage").addClass("active");
        $(".2014").addClass("active");
    });

    Niina.vent.bind('set:fin', function(){
        localStorage.setItem('locale', "fi");
        location.reload();
        Niina.vent.trigger('show:frontpage');
    });

    Niina.vent.bind('set:eng', function(){
        localStorage.setItem('locale', "en-US");
        location.reload();
        Niina.vent.trigger('show:frontpage');
    });

    Niina.NiinaRouter = new OurRouter();
    Backbone.history.start();

    Niina.vent.trigger('show:frontpage');

    return Niina;
});