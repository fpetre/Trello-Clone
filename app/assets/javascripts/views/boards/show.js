TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  events: {
    "dblclick .board-title": "boardsEdit",
    "submit form": "submit"
  },

  initialize: function(){
    this.listenTo(this.model, "add remove sync change", this.render);
  },

  boardsEdit: function() {
    var renderedContent = JST["boards/edit"]({board: this.model});

    this.$el.append(renderedContent);

  },

  submit: function(event){
    event.preventDefault();
    var content = $(event.currentTarget).serializeJSON();
    this.model.save(content.board,{
      success: function(){
      }
    });
  },

  render: function() {
    var renderedContent = this.template({board: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});