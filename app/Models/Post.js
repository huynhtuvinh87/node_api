var db = require('../../config/database');

var Post={
	getAll:function(callback){
		return db.query("select * from posts ",callback);
	},
	getById:function(id,callback){
		return db.query("select * from posts where id=?",[id],callback);
	},
	add:function(post,callback){
		return db.query("insert into posts(title,description,status) values(?,?,?)",[post.title,post.description,post.status],callback);
	},
	delete:function(id,callback){
		return db.query("delete from posts where id=?",[id],callback);
	},
	update:function(id,post,callback){
		return db.query("update posts set title=?,description=?,status=? where id=1",[post.title,post.description,post.status,id],callback);
	}
};
 module.exports=Post;