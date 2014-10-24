TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
  template: JST["lists/show"],

  initialize: function(){
    this.list = this.model;
    this.listenTo(this.list, "add, remove, sync, change", this.render);
  },

  render: function(){
    var renderedView = this.template({list: this.list});
    this.$el.html(renderedView);
     var cardIndex = new TrelloClone.Views.CardsIndex({model: this.list})
     this.addSubview("ul.cards", cardIndex);
    return this;
  }
});