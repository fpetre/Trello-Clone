TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST["boards/index"],

  events: {
    "click .remove-board": "removeBoard"
  },

  initialize: function(){
    this.listenTo(this.collection, "add remove sync change", this.render);
  },

  removeBoard: function(event) {
    var boardId = $(event.currentTarget).data("board-id");
    var board = this.collection.fetchOrGet(boardId);
    board.destroy();
  },

  render: function() {
    var renderedContent = this.template({boards: this.collection});
    this.$el.html(renderedContent);
    return this;
  }
});