const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB Server:',err);
  }
  console.log('Connected to MongoDB Server.');
  var db=client.db('ToDoApp');

//delete many
// db.collection('Todos').deleteMany({text:'Eat dinner'}).then((res)=>{
//   console.log(res);
// });
//delete one
// db.collection('Todos').deleteOne({text:'Eat dinner'}).then((res)=>{
//   console.log(res);
// });
//find one and delete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });
db.collection('Users').deleteMany({name:'Nishtha Goswami'});
db.collection('Users').findOneAndDelete({_id:new ObjectID('5aca1f7f2097320574c5de3e')}).then((res)=>{
  console.log(JSON.stringify(res,undefined,2));
});
});
