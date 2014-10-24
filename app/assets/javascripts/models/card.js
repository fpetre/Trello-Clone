TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: function(){
    var url = "/api/lists/" + this.list_id + "cards";
    return url;
  },

});