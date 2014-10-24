TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  initialize: function(){
    this.listenTo(this.collection, "add remove sync change", this.render);
  },

  render: function() {
    renderedContent = this.template({board: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});