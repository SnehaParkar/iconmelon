// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('models/ProtoModel', ['backbone'], function(B) {
    var ProtoModel, _ref;

    ProtoModel = (function(_super) {
      __extends(ProtoModel, _super);

      function ProtoModel() {
        _ref = ProtoModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ProtoModel.prototype.toggleAttr = function(name) {
        return this.set(name, !this.get(name));
      };

      return ProtoModel;

    })(B.Model);
    return ProtoModel;
  });

}).call(this);
