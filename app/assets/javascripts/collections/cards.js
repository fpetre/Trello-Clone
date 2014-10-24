TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: function(){
    var url = "/api/lists/" + this.get("list_id") + "cards";
    return url;
  },

  model: TrelloClone.Models.Card,

  fetchOrGet: function(id) {
    if(this.get(id)) {
      var card = this.get(id);
      card.fetch();

    } else {
      var collection = this;
      var card = new TrelloClone.Models.Card({id: id});
      card.fetch({success: function(){
        collection.add(card);
      }});

    }
    return card;
  }
});