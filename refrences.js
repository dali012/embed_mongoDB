const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo2");

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
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  }]
});
var User = mongoose.model("User", userSchema);

post.create({
  title:   "test title part 2",
  content: "blah blah blah"
}, function(err, post){
  if(err){
    console.log(err);
  }else{
    User.findOne({name:"dali012"}, function(err, foundUser){
      if(err){
        console.log(err);
      }else{
        foundUser.posts.push(post);
        foundUser.save(function(err, data){
          if(err){
            console.log(err);
          }else{
            console.log(data);
          }
        });
      }
    });
  }
});


