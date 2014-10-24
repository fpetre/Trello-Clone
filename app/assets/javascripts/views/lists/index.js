TrelloClone.Views.ListsIndex = Backbone.CompositeView.extend({
  template: JST["lists/index"],
  className: "listsIndex",

  initialize: function(){
    this.board = this.model;
    this.listenTo(this.board, "add, remove, sync, change", this.render);
  },

  render: function(){
    var renderedView = this.template({board: this.board});
    this.$el.html(renderedView);
    return this;
  }
});