var es = require('event-stream');

function getCb(passedArgs){
  var args = Array.prototype.slice.call(passedArgs);
  return args[args.length-1];
}

module.exports = function(host, dbname, collection) {
  return {
    find: function(){
      var cb = getCb(arguments);
      cb(null, []);
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



