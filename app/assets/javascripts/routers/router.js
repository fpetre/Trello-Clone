TrelloClone.Routers.Router = Backbone.Router.extend {
  routes: {
    "boards": "boardsIndex",
    "boards/new": "boardsNew",
    "boards/:id": "boardShow",
    "boards/:id/delete": "boardsDestroy"
  },

  initialize: function(options) {
    this.boards = options.boards;
  },

  boardsIndex: function() {
    var indexView = new Backbone.Views.Boards({collection: this.boards});
    this.swapView(indexView);
    indexView.render();
  },

  boardShow: function(id) {
    var board = this.boards.fetchOrGet(id);
    var showView = new Backbone.Views.Board({model: board});
    this.swapView(showView);
    showView.render();
  },

  boardsNew: function() {
    var newView = new Backbone.Views.Boards({collection: this.boards});
    this.swapView(indexView);
    newView.render();
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

  fetchOrGet: function(id) {
    if(var board = this.boards.get(id)) {
      board.fetch();
    } else {
      var board = new TrelloClone.Models.Board(id: id);
      board.fetch();
      this.boards.add(board);
    }
    return board;
  }

}