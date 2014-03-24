var es = require('event-stream');

function getCb(passedArgs){
  var args = Array.prototype.slice.call(passedArgs);
  return args[args.length-1];
}

function getCursor(){
  return {
    toArray: function(cb){
      cb(null, []);
    },
    nextObject: function(cb){
      cb(null, null);
    }
  }
}

module.exports = function(host, dbname, collection) {
  return {
    find: function(){
      var cb = getCb(arguments);
      cb(null, getCursor());
    },
    findOne: function(){
      var cb = getCb(arguments);
      cb(null, null);
    },
    save: function(){
      var cb = getCb(arguments);
      cb(null);
    }
  }
};

module.exports.stream = function(collection, query, opts) {
  var stream = es.readable(function(count, callback) {
    this.emit('end');
    callback();
  });

  return stream;
};



