// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client)=>{
  if (err){
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to MongoDB server.');

var db=client.db('ToDoApp');
  db.collection('Todos').insertOne({
    text:'something to do',
    completed: false
  },(err,res)=>{
    if (err){
      return console.log('Unable to insert Todo',err);
    }
    console.log(JSON.stringify(res.ops,undefined,2));
  });

var db=client.db('ToDoApp');
db.collection('Users').insertOne({
  name: 'Nishtha Goswami',
  Age: '19',
  location: 'Raipur, Chattissgarh'
},(err, res)=>{
  if (err) throw err;
  console.log(res.ops[0]._id.getTimestamp());
});

  client.close();
});
