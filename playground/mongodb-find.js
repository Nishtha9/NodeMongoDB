const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB Server',err);
  }
  console.log('Connected to MongoDB Server');
  var db=client.db('ToDoApp');

// db.collection('Todos').find({
//   _id:new ObjectID('5aca1a0aea16ea27482f474f')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err)=>{
//   console.log('Unable to fetch data', err);
// });
// db.collection('Todos').find().count().then((count)=>{
//   console.log('Todos');
//   console.log(`Todos count: ${count}`);
// }, (err)=>{
//   console.log('Unable to fetch data', err);
// });
db.collection('Users').find({name:'Nishtha Goswami'}).count().then((count)=>{
  console.log(`Users count: ${count}`);
}, (err)=>{
  console.log(err);
});
db.collection('Users').find({name:'Nishtha Goswami'}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
}, (err)=>{
console.log('Unable to fetch data',err);
});


 // client.close();
});
