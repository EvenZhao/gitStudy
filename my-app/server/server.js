const express = require('express');
const app = express();
app.get('',function(req,res){
	res.send('<h1>Hello World</h1>')
})
app.get('/data',function(req,res){
	res.json({name:'yy',age:'26'})
})
app.listen(9093,function(){
	console.log('hello')
})