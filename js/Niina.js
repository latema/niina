define( ["marionette",
    "backbone",
//    "app/Niina.Site",
    "app/view/Menu",
    "app/view/Paintings",
    "app/view/2014",
    "app/view/2013",
    "app/view/2012",
    "app/view/About",
    "app/view/Contact",
    //"app/view/CV",
    "app/view/Upcoming"], function (Marionette, Backbone, MenuView, PaintingsView,
                                  View2014, View2013, View2012, AboutView, ContactView, UpcomingView) {

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
            "2013": "show2013",
            "2012": "show2012",
            "about": "showAbout",
            "contact": "showContact",
            //"cv": "showCV",
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
        show2013: function() {
            Niina.vent.trigger("show:2013");
        },
        show2012: function() {
            Niina.vent.trigger("show:2012");
        },
        showAbout: function() {
            Niina.vent.trigger("show:about");
        },
        showContact: function() {
            Niina.vent.trigger("show:contact");
        },
        //showCV: function() {
        //    Niina.vent.trigger("show:CV");
        //},
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
        console.log("HALO HALO trigger show 2014");
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

    Niina.vent.bind('show:2013', function(){
        var view2013 = new View2013();
        Niina.main.show( view2013 );
        // Scroll window to top position in DOMReady
        $(function(){
            window.scrollTo(0, 0);
        });
        $(".menuitem").removeClass("active");
        $("#mainpage").addClass("active");
        $(".2013").addClass("active");
    });

    Niina.vent.bind('show:2012', function(){
        var view2012 = new View2012();
        Niina.main.show( view2012 );
        $(function(){
            window.scrollTo(0, 0);
        });
        $(".menuitem").removeClass("active");
        $("#mainpage").addClass("active");
        $(".2012").addClass("active");
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

//    var controller = new Site.Controller();
//    controller.start();
    Niina.vent.trigger('show:frontpage');

    return Niina;
});