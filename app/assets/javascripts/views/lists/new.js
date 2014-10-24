TrelloClone.Views.ListsNew = Backbone.View.extend({
  template: JST["lists/new"],

  initialize: function(){
    this.ord = this.model.lists().length + 1;
  },
  events: {
    "submit form": "submit"
  },


  submit: function(event) {
    event.preventDefault();
    var listAttr = $(event.currentTarget).serializeJSON().list;
    listAttr["ord"] = this.ord;
    listAttr["board_id"] = parseInt(this.model.id);
    var newList = new TrelloClone.Models.List(listAttr);
    var board = this.model;
    newList.save(listAttr, {
      success: function(list){
        board.lists().add(list);
        Backbone.history.navigate("boards/" + board.id, {trigger: true});
      }
    });
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});