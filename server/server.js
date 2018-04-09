// var mongoose=require('mongoose');
//
// mongoose.Promise= global.Promise;
// mongoose.connect('mongodb://localhost:27017/ToDoApp');
//
// var Todo=mongoose.model('Todo', {
//   text :{
//     type: String,
//     required: true,
//     minlength: 1,
//     trim : true
//   },
//   completed:{
//     type: Boolean,
//     default: false,
//
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
//
//
// // var newTodo= new Todo({
// //   text: "Edit this doc",
// // });
// //
// // newTodo.save().then((docs)=>{
// //   console.log('Saved todo:',docs);
// // },(err)=>{
// //   console.log('Unable to save todo',err);
// // });


const mongoose= require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');

var User=mongoose.model('User',{
  email: {
    type: String,
    trim: true,
    minlength:1,
    required: true
  }
});

var NewUser=new User({
  email:"nish0349@gmail.com"
});

NewUser.save().then((doc)=>{
  console.log('User saved.', doc);
},(err)=>{
  console.log('Unable to save user: ',err);
});
