define( ["marionette", "text!../../../tpl/2012View.html", "i18n!./nls/Paintings"]
  ,function(Marionette,Tpl2012,msg){
    var View2012 = Marionette.ItemView.extend({
      template: _.template(Tpl2012,msg),
      selectMenuItem: function (menuItem) {
        // console.log(menuItem);
      }
    });
    return View2012;
  });