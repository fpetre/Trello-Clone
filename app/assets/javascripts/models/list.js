TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function(){
    var url = "/api/boards/" + this.board_id + "lists";
    return url;
  },
  cards: function () {
    this._cards = this._cards || new TrelloClone.Collections.Cards();
    return this._cards;
  },

  parse: function (response) {
    cardsAttr = response.cards;
    cards = this.cards();
    cards.set(cardsAttr);
    delete response.cards
    return response;
  }

});