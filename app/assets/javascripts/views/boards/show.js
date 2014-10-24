TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  events: {
    "dblclick .board-title": "boardEdit",
    "submit form": "submit",
    "click .board-remove": "boardRemove"
  },

  initialize: function(){
    this.listenTo(this.model, "add remove sync change", this.render);
  },

  boardEdit: function() {
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

  boardRemove: function(event) {
    this.model.destroy({ success: function(){
      Backbone.history.navigate("", {trigger: true});
    }
  });
  },

  render: function() {
    var renderedContent = this.template({board: this.model});
    this.$el.html(renderedContent);
    boardView = this;
    this.model.lists().each(function(list){
      var listsShow = new TrelloClone.Views.ListsShow({model: list});
      boardView.addSubview("ul.lists", listsShow);
    });
    return this;
  }
});