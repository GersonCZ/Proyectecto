var controllercita = require('./controllercita.js');
	var controllerAdministrador = require('./controlleradministrador.js');

//Libreria donde se encuentra las funciones disponible con los url A...//

module.exports= function(app){

//La funcion app es express en el servidor//
	var clasecita= new controllercita();
	var claseadm = new controllerAdministrador();
  app.post('/api/nuevoadm',  claseadm.Guardar);
  app.post('/api/loginadm',  claseadm.Login);
	app.post('/api/nuevacita', clasecita.Guardar);
	app.post('/api/modificacita', clasecita.Modificar);
	app.post('/api/eliminacita', clasecita.Eliminar);
	app.post('/api/seleccionacita', clasecita.Seleccionartodos);
	app.post('/api/seleccionarporfecha', clasecita.Seleccionarporfecha);
	app.post('/api/seleccionarporid', clasecita.Seleccionarporid);
	app.post('/api/seleccionarpornombre', clasecita.Seleccionarpornombre);


app.get('*', function(req,res){ //localhost:8080 el signo * toma todo lo que no existe en el localhost
res.sendfile('./index.html'); // Carga unica de la visita

});


};
