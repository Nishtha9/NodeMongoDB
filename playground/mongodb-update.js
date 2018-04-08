const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client)=>{
  if (err) {
  return  console.log('Unable to connect to MongoDB server: ',err);
  }
  console.log('Connected to MongoDB Server.');

  var db=client.db('ToDoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5aca2df1ea1d353638b4646b')
  // },{
  //   $set:{
  //     completed:false
  //   }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aca39bd752e1aa1b785b8e5')
  },{
    $set:{
      name:'Nishtha'
    },
    $inc : {age:1}
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });
});
