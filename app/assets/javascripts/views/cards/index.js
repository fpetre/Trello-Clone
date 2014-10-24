TrelloClone.Views.CardsIndex = Backbone.CompositeView.extend({

  template: JST["cards/index"],

  events: {
    "click .remove-card": "removeCard"
  },

  initialize: function(){
    this.list = this.model;
    this.cards = this.list.cards();
    this.listenTo(this.cards, "add remove sync change", this.render);
  },

  removeCard: function(event) {
    var cardId = $(event.currentTarget).data("card-id");
    var card = this.collection.fetchOrGet(cardId);
    card.destroy();
  },

  render: function() {
    var renderedContent = this.template({cards: this.cards});
    this.$el.html(renderedContent);
    return this;
  }


});