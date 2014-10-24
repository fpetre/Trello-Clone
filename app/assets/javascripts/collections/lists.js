TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: function(){
    var url = "/api/boards/" + this.board_id + "lists";
    return url;
  },

  model: TrelloClone.Models.List,

  fetchOrGet: function(id) {
    if(this.get(id)) {
      var list = this.get(id);
      list.fetch();

    } else {
      var collection = this;
      var list = new TrelloClone.Models.List({id: id});
      list.fetch({success: function(){
        collection.add(list);
      }});

    }
    return list;
  }
});