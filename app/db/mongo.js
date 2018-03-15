const { MongoClient } = require('mongodb').MongoClient;
const assert = require('assert');

// Database Name
const dbName = 'mydb';

// Connection URL
const url = `mongodb://admin:admin@ds111319.mlab.com:11319/ + $(dbName)`;

const insertDocuments = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
};

const findDocuments = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};

const updateDocument = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a: 2 }, { $set: { b: 1, t: 'text' } }, (err, result) => {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('Updated the document with the field an equal to 2');
    callback(result);
  });
};

const removeDocument = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a: 3 }, (err, result) => {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('Removed the document with the field an equal to 3');
    callback(result);
  });
};

const indexCollection = (db, callback) => {
  db.collection('documents').createIndex({ a: -1 }, null, (err, results) => {
    console.log(results);
    callback();
  });
};

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  // CallBacksHell is here \( ^ _^)/
  insertDocuments(db, () => {
    indexCollection(db, () => {
      findDocuments(db, () => {
        updateDocument(db, () => {
          removeDocument(db, () => {
            client.close();
          });
        });
      });
    });
  });
});
