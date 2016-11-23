/**
 * Created by dayin on 2016/11/21.
 */

//引入fs文件处理模块
var fs=require("fs");

//处理文件夹名称，用变量保存，方便日后管理
var src="icons";


//遍历文件夹的API fs.readdir(path,callback);

fs.readdir(src,function(err,files){
    files.forEach(function(filename){
        var oldPath=src+'/'+filename,
            newPath=src+'/'+filename.replace(/_/g,'-');

        fs.rename(oldPath,newPath,function(err){
            if(!err){
                console.log(filename+'下划线替换成功！');
            }
        })
    })
});







