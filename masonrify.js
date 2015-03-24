var d = debug('masonrify.js');
var Masonrify;

Masonrify = (function() {
  Masonrify.instances = {};

  function Masonrify(container, options) {
    options = _.extend({
      itemSelector: '.masonry-element',
      stamp: '.stamped',
      masonry: options
    }, options);
    this._ms = new Masonry(container, options);
    this._container = container;
  }

  Masonrify.prototype.addItems = function(items) {
    return this._ms.addItems(items);
  };

  Masonrify.prototype.appended = function(div) {
    return this._ms.appended(div);
  };

  Masonrify.prototype.refreshSize = function(item) {
    return this._ms.fit(item);
  };

  Masonrify.prototype.debouncedRelayout = _.debounce(function() {
    d('masonrify debounced');
    if (this._ms) {
      if (true) {
        d('masonry reloading and sorting original order');
      }
      return this._ms.layout();
    }
  }, 200);

  Masonrify.prototype.remove = function(item) {
    return this._ms.remove(item[0]);
  };

  Masonrify.prototype.unStamp = function(element, callback) {
    this._ms.unstamp(element);
    if (callback != null) {
      callback();
    }
    return this.debouncedRelayout(false);
  };

  Masonrify.prototype.reStamp = function(element, callback) {
    this._ms.stamp(element);
    if (callback != null) {
      callback();
    }
    return this.debouncedRelayout(false);
  };

  Masonrify.prototype.on = function(event, callback) {
    return this._ms.on(event, callback);
  };

  Masonrify.prototype.off = function(event, callback) {
    return this._ms.off(event, callback);
  };

  return Masonrify;

})();

Meteor.startup(function() {
  var getContainerId;
  getContainerId = function(data) {
    var ref;
    return (ref = data.container) != null ? ref : data;
  };
  Template.masonryContainer.rendered = function() {
    return Masonrify.instances[this.data.id] = new Masonrify(this.firstNode, this.data);
  };
  Template.masonryContainer.masonryContainerId = function() {
    return this.id;
  };
  Template.masonryElement.setContainerId = function(arg1, arg2) {
    return null;
  };
  Template.masonryElement.rendered = function(arg1, arg2) {
    var contId, element, ref;
    contId = getContainerId(this.data);
    element = this.firstNode;
    if ((ref = Masonrify.instances[contId]) != null) {
      ref.appended(element);
    }
    return imagesLoaded(this.firstNode, function() {
      var ref1;
      return (ref1 = Masonrify.instances[contId]) != null ? ref1.debouncedRelayout() : void 0;
    });
  };
  return Template.masonryElement.destroyed = function() {
    var ref;
    return (ref = Masonrify.instances[getContainerId(this.data)]) != null ? ref.debouncedRelayout(true) : void 0;
  };
});