TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists",
  cards: function () {
    this._cards = this._cards || new TrelloClone.Collections.Cards();
    return this._cards;
  },

  parse: function (response) {
    if(!response.cards){return response;}
    var cardsAttr = response.cards;
    var cards = this.cards();
    console.log("cards attr", cardsAttr);
    cards.set(cardsAttr, {parse: true});
    delete response.cards
    return response;
  }

});