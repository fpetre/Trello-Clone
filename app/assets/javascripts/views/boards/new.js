TrelloClone.Views.BoardsNew = Backbone.CompositeView.extend({
  template: JST["boards/new"],

  // initialize: function(){
//     this.listenTo(this.collection, "add remove sync change", this.render);
//   },
//
//   render: function() {
//     renderedContent = this.template({boards: this.collection});
//     this.$el.html(renderedContent);
//     return this;
//   }
});