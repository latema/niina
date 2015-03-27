define( ["marionette", "text!../../../tpl/2014View.html", "i18n!./nls/Paintings"]
  ,function(Marionette,Tpl2014,msg){
    var View2014 = Marionette.ItemView.extend({
      template: _.template(Tpl2014,msg),
      selectMenuItem: function (menuItem) {
        // console.log(menuItem);
      }
    });
    return View2014;
  });