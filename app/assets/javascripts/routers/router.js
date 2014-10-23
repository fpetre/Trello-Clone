TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/new": "boardsNew",
    "boards/:id": "boardShow",
    "boards/:id/delete": "boardsDestroy"
  },

  initialize: function(options) {
    this.boards = TrelloClone.Collections.boards;
  },

  boardsIndex: function() {
    this.boards.fetch();
    var indexView = new TrelloClone.Views.BoardsIndex({collection: this.boards});
    this.swapView(indexView);
    $("div#main").html(indexView.render().$el);
  },

  boardShow: function(id) {
    var board = this.boards.fetchOrGet(id);
    console.log("show router", board);
    var showView = new TrelloClone.Views.BoardsShow({
      collection: this.boards,
      model: board
    });
    this.swapView(showView);
    $("div#main").html(showView.render().$el);
  },

  boardsNew: function() {
    var newView = new TrelloClone.Views.BoardsNew({collection: this.boards});
    this.swapView(indexView);
    $("div#main").html(newView.render().$el);
  },

  boardsDestroy: function(id) {
    var board = this.boards.get(id);
    board.destroy();
  },

  swapView: function(newView) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = newView;
    return this._currentView;
  },

});