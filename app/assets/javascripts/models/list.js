TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists",
  cards: function () {
    this._cards = this._cards || new TrelloClone.Collections.Cards();
    return this._cards;
  },

  parse: function (response) {
    if(!response.cards){return response;}
    cardsAttr = response.cards;
    cards = this.cards();
    cards.set(cardsAttr);
    delete response.cards
    return response;
  }

});