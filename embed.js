const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");

//POST title - content
var postSchema = new mongoose.Schema({
  title:   String,
  content: String
});
var post = new mongoose.model("post", postSchema);

//USER email - name
var userSchema = new mongoose.Schema({
  email: String,
  name:  String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// New User
// var newUser = new User({
//   email: "dali.jerbi97@gmail.com",
//   name:  "dali0122"
// });

// newUser.posts.push({
//   title:   "post belong to 2 user",
//   content: "content description for 2 user"
// });

// newUser.save(function(err, newUser){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(newUser);
//   }
// });

User.findOne({name: "dali0122"}, function(err, user){
  if(err){
    console.log(err);
  }else{
    user.posts.push({
      title:   "zebi mala base de donnee",
      content: "sql DB"
    });
    user.save(function(err, userUpdate){
      if(err){
        console.log(err);
      }else{
        console.log(userUpdate);
      }
    });
  }
});

