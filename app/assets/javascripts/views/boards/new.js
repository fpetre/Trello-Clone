TrelloClone.Views.BoardsNew = Backbone.CompositeView.extend({
  template: JST["boards/new"],

  initialize: function (){
    this.board = this.model || new TrelloClone.Models.Board();
  },

  events: {
    "submit form": "submit"
  },

  render: function() {
    var renderedContent = this.template({board: this.board});
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var formData = event.currentTarget;
    var boardAttr = $(formData).serializeJSON();
    this.board.save(boardAttr, {
      success: function(model) {
        TrelloClone.Collections.boards.add(model);
        Backbone.history.navigate("boards/" + model.id,{trigger: true})
      }
    });

  }
});