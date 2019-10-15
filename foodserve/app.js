const express=require("express");
const session=require("express-session");
const cors=require("cors");
const mysql=require("mysql");
const bodyParser=require('body-parser');
var multer  = require('multer')
var fs = require('fs');
var upload = multer({ dest: 'upload/' });
var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  connectionLimit:20,
  database:"foodmobile"
})
var server=express();
server.listen(8080);
server.use(bodyParser.urlencoded({
  extended:false
}));
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050"],
  credentials:true
}))
server.use(session({
  secret:"安全字符串",//安全字符串,由于将session编号发送给客户浏览器cookie中,将session对象编号加密后发送客户(将安全字符串的值放在加密算法中再加密)
  resave:true,//每次请求是否更新新原有数据
  saveUninitialized:true //保存初始化数据
}))
server.use(express.static("public"));
//多图上传
server.post('/upload', upload.single('logo'), function(req, res, next){
    res.send({ret_code: '0'});
});

server.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

server.get("/login",(req,res)=>{
  var $uname=req.query.uname;
  var $upwd=req.query.upwd;
 
  var sql="SELECT id FROM fm_login ";
  sql+="WHERE uname=? AND upwd = md5(?)";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名密码错误"})
    }else{
      var id=result[0].id;
      
      //当前登录用户的凭证
      req.session.uid=id;
      req.session.uname=$uname;
      res.send({code:1,msg:"登录成功"});
    }
  })
})

server.get("/hasuname",(req,res)=>{
  var uname=req.query.uname;
  var sql="SELECT id From fm_login WHERE uname=?";
  pool.query(sql,[uname],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:1,msg:"用户名可用"})
    }else{
      res.send({code:-1,msg:"用户名已经被占用"})
    }
  })
})

server.post("/reg",(req,res)=>{
  var obj=req.body;
  var uname=obj.uname;
  var upwd=obj.upwd;
  var sql="INSERT INTO fm_login SET ?";
  console.log(obj);
  console.log(obj.uname)
  pool.query(sql,[obj],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"});
      req.session.uname=uname;
    }else{
      res.send({code:-1,msg:"注册失败"})
    }
  })
})
//上传图片和内容
server.post("/sendmsg",(req,res)=>{
  var uname=req.session.uname;
  var content=req.body.content;
  var fileList=req.body.pic;
  
  if(uname==undefined){
    res.send({code:-1,msg:"未登录,先登录"});
  }else{
  var sql="INSERT INTO user_content SET ?";
  pool.query(sql,[{uname,content,fileList}],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"发表成功"})
    }
  })}
  
})
// 加载个人信息路由
server.get("/load",(req,res)=>{
  var uname=req.session.uname;
  if(uname==undefined){
    res.send({code:-1,msg:"请登录"})
  }else{
    var sql="SELECT id FROM user_content WHERE uname=?"
    pool.query(sql,[uname],(err,result)=>{
      if(err)throw err;
      res.send({code:1,uname:uname,number:result.length})
    })
    }
})
server.get("/product",(req,res)=>{
  var pno = req.query.pno;
  var ps= req.query.pageSize;
  if(!pno){
    pno=1;
  }
  if(!ps){
    ps=4;
  }
  var sql="SELECT lid,lname,price,img_url FROM xz_laptop LIMIT ?,?";
  var offset=(pno-1)*ps; //起始记录数
  ps=parseInt(ps);//行数
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})

server.get("/addCart",(req,res)=>{
  //判断当前用户是否登录成功
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请先登录"});
    return;
  }
//uid为undefined没登录
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/addcart?lid=1&lname=kk&price=9
//获取客户端数据lid  price lname
var lid= req.query.lid;
var price=req.query.price;
var lname=req.query.lname;
var sql="SELECT id FROM xz_cart WHERE uid=? AND lid=?";
pool.query(sql,[uid,lid],(err,result)=>{
  if(err) throw err;
  if(result.length==0){
    var sql=`INSERT INTO xz_cart VALUES(null,${lid},${price},1,'${lname}','${uid}')`
  }else{
    var sql =`UPDATE xz_cart SET count=count+1,lname='${lname}' WHERE uid=${uid} AND lid=${lid}`
  }
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    //如果sql UPDATE INSERT DELETE,判断执行成功的条件是result.affectedRows
    if(result.affectedRows>0){
      res.send({code:1,msg:"商品添加成功"})
    }else{
      res.send({code:-2,msg:"添加失败"})
    }
  })
})
// 创建一条查询sql:当前用户是否购买过此商品
// 执行sql语句
// 在回调函数中判断下一步的操作
// 没购买过此商品  添加
// 已购买过此商品  更新count+1
// 执行sql获取返回结果
})

server.get("/cart",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
  var sql="SELECT id,lname,price FROM xz_cart WHERE uid=?" ;
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})


server.get("/delItem",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请登录"});
    return;
  }
  var id= req.query.id;
  var sql="DELETE FROM xz_cart WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  })
})

server.get("/delAll",(req,res)=>{
  var id=req.query.id;
  var sql=`DELETE FROM xz_cart WHERE id IN (${id})`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})
