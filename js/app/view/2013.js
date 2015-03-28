define( ["marionette", "text!../../../tpl/2013View.html", "i18n!./nls/Paintings"]
  ,function(Marionette,Tpl2013,msg){
    var View2013 = Marionette.ItemView.extend({
      template: _.template(Tpl2013,msg),
      selectMenuItem: function (menuItem) {
        // console.log(menuItem);
      }
    });
    return View2013;
  });