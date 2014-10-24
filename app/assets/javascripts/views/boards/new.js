TrelloClone.Views.BoardsNew = Backbone.CompositeView.extend({
  template: JST["boards/new"],

  events: {
    "submit form": "submit"
  },
  // initialize: function(){
 //    this.listenTo(this.collection, "add remove sync change", this.render);
 //  },

  render: function() {
    renderedContent = this.template({boards: this.collection});
    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    formData = event.currentTarget;
     console.log($(formData).serializeJSON())
    boardAttr = $(formData).serializeJSON();

    newBoard = new TrelloClone.Models.Board();
    newBoard.save(boardAttr, {
      success: function(model) {
        TrelloClone.Collections.boards.add(model);
        Backbone.history.navigate("",{trigger: true})
      }
    });

  }
});