var lib = require('./index'),
    test = require('tape'),
    es = require('event-stream');

test('#find()', function(t){
  var mcf = lib('host', 'db', 'col');
  t.plan(5);

  mcf.find({}, function(err, res){
    t.notOk(err, 'falsy find err');

    res.toArray(function(err, arr){
      t.notOk(err, 'falsy toArray err');
      t.deepEqual(arr, [], 'toArray returns empty array');
    });
    
    res.nextObject(function(err, obj){
      t.notOk(err, 'falsy nextObject err');
      t.deepEqual(obj, null, 'nextObject returns null');
    });

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