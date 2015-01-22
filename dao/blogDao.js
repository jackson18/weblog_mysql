/**
 * Created by Administrator on 2015/1/18.
 */
var pool = require('../util/pool');
var conf = require('../util/conf');

function getUserBlogByPageNum(option,callBack){
    pool.query('select * from blog where uid=? order by createTime desc limit ?,?',[option.uid,(option.pageNum-1)*conf.pageSize,conf.pageSize],function(err,rows){
        if(err){
            console.log(err);
        }else{
            callBack(null,rows);
        }
    });
}
function getBlogByPageNum(pageNum,callBack){
    pool.query('select * from blog order by createTime desc limit ?,?',[(pageNum-1)*conf.pageSize,conf.pageSize],function(err,rows){
        if(err){
            console.log(err);
        }else{
            callBack(null,rows);
        }
    });
}
function addBlog(option,callBack){
    pool.query('insert into blog(title,content,uid,uname,createTime) values(?,?,?,?,?)',[option.title,option.content,option.uid,option.uname,option.createTime],function(err,rows){
        if(err){
            console.log(err);
        }else{
            callBack(null,rows);
        }
    });
}

exports.getUserBlogByPageNum = getUserBlogByPageNum;
exports.addBlog = addBlog;
exports.getBlogByPageNum = getBlogByPageNum;