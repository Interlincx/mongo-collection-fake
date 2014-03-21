var lib = require('./index'),
    test = require('tape'),
    es = require('event-stream');

test('#find()', function(t){
  var mcf = lib('host', 'db', 'col');
  mcf.find({}, function(err, res){
    t.notOk(err, 'falsy err');
    t.deepEqual(res, [], 'returns empty array');
    t.end();
  });
});

test('#findOne()', function(t){
  var mcf = lib('host', 'db', 'col');
  mcf.findOne({}, function(err, res){
    t.notOk(err, 'falsy err');
    t.equal(res, null, 'returns empty array');
    t.end();
  });
});

test('#save()', function(t){
  var mcf = lib('host', 'db', 'col');
  mcf.save({}, {}, function(err){
    t.notOk(err, 'falsy err');
    t.end();
  });
});

test('lib.stream()', function(t){
  var mcf = lib('host', 'db', 'col');

  var rs = lib.stream(mcf, {}, {});
  
  rs.pipe(es.writeArray(function(err, res){
    t.notOk(err, 'falsy err');
    t.deepEqual(res, [], 'collects empty array from readable stream');
    t.end();
  }));
});