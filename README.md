# Mongo-Collection FAKE
    
a no-op test double for npm.im/mongo-collection

## API

    var mc = require('mc-fake'),
        col = mc(host, db, colName);

    col.find(..., cb);
    col.findOne(..., cb);
    col.save(..., cb);

    var readStream = mc.stream(...);
