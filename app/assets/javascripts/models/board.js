TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",
  lists: function () {
    this._lists = this._lists || new TrelloClone.Collections.Lists();

    return this._lists;
  },

  parse: function (response) {
    if (!response.lists) {return response;}
    listsAttr = response.lists;
    lists = this.lists();
    lists.set(listsAttr);
    delete response.lists
    return response;
  }

});