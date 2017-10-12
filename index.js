var express = require('express');
var bodyParser = require('body-parser');
var session = require('cookie-session');

var app = express();

app.use(session({secret:'nodejs'}));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');

var tareas = [];

app.get('/', function(req,res){
	res.render('formulario.ejs',{tareas : tareas});
})

app.post('/adicionar', function(req,res){
	var tarea = req.body.nuevaTarea;
	tareas.push(tarea);
	res.redirect('/');
})

app.get('/borrar/:id', function(req,res){
	tareas.splice(req.params.id, 1);
	res.redirect('/');
})

app.listen(3000, function(){
	console.log("Corriendo servidor en el puerto 3000");
})
