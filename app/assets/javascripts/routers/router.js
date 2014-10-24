TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards/new": "boardsNew",
    "boards/:id": "boardShow",
    "boards/:id/delete": "boardsDestroy",
    "boards/:id/lists/new": "listsNew"
  },

  initialize: function(options) {
    this.boards = TrelloClone.Collections.boards;
  },

  boardsIndex: function() {
    this.boards.fetch();
    var indexView = new TrelloClone.Views.BoardsIndex({collection: this.boards});
    this.swapView(indexView);
  },

  boardShow: function(id) {
    var board = this.boards.fetchOrGet(id);
    var showView = new TrelloClone.Views.BoardsShow({
      collection: this.boards,
      model: board
    });
    this.swapView(showView);
  },

  boardsNew: function() {
    var newView = new TrelloClone.Views.BoardsNew();
    this.swapView(newView);
  },

  boardsDestroy: function(id) {
    var board = this.boards.fetchOrGet(id);
    board.destroy();
  },

  listsNew: function(id) {
    var board = this.boards.fetchOrGet(id);
    var newView = new TrelloClone.Views.ListsNew({model: board});
    this.swapView(newView);
  },

  swapView: function(newView) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = newView;
    $("div#main").html(this._currentView.render().$el);
    return this._currentView;
  },

});