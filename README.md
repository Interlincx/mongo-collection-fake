# Mongo-Collection FAKE
    
a no-op test double for npm.im/mongo-collection, a helper for accessing kissjs/node-mongoskin models

[![Build Status](https://travis-ci.org/Interlincx/mongo-collection-fake.png)](https://travis-ci.org/Interlincx/mongo-collection-fake)  
[![NPM](https://nodei.co/npm/mongo-collection-fake.png?downloads=true)](https://nodei.co/npm/mongo-collection-fake/)

## API

    var mc = require('mc-fake'),
        col = mc(host, db, colName);

    col.find(..., cb);
    col.findOne(..., cb);
    col.save(..., cb);

    var readStream = mc.stream(...);
