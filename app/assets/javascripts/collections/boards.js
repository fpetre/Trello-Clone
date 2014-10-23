TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",

  model: TrelloClone.Models.Board,

  fetchOrGet: function(id) {
    if(this.get(id)) {
      var board = this.get(id);
      board.fetch();

    } else {
      var collection = this;
      var board = new TrelloClone.Models.Board({id: id});
      board.fetch({success: function(){
        collection.add(board);
      }});

    }
    return board;
  }
});