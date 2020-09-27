var Item = require('./cita');
module.exports = class _Cita {   //Sera //
   constructor( ) {

   }
Guardar(req,res) {  //Llama al modelo//
	Item.create(  //Creacion de un item que es objeto de todas las peliculas//
			{
        NOMBREUSUARIO: req.body.NOMBREUSUARIO,
        NOMBREMASCOTA: req.body.NOMBREMASCOTA,
        MOTIVO: req.body.MOTIVO,
        FECHA: req.body.FECHA,
        HORAINICIO: req.body.HORAINICIO,
        MINUTOINICIO: req.body.MINUTOINICIO,
        IMAGEN: req.body.IMAGEN,
        ESTADO: req.body.ESTADO
            },
			function(err, item) {
				if (err)  //se enviara un mensaje de error si este existe //
                    {
					res.send(err);}

          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});


          }

			});



}

 Modificar(req,res) {
      console.log(req.body);
        Item.update({_id : req.body._id},{$set:{
            //busca la id del item a modificar y cambia las caracteristicas
            NOMBREUSUARIO: req.body.NOMBREUSUARIO,
            NOMBREMASCOTA: req.body.NOMBREMASCOTA,
            MOTIVO: req.body.MOTIVO,
            HORAINICIO: req.body.HORAINICIO,
            MINUTOINICIO: req.body.MINUTOINICIO,
            IMAGEN: req.body.IMAGEN,
            ESTADO: req.body.ESTADO
        }},(err, item) => {
            //busca errores internos y externos
            if (err){res.send(err);}
            // Obtine y devuelve todas las personas tras crear una de ellas
              else{
                Item.find((err, item) => {
                    if(err)res.send(err);
                    res.json(item);
                });
              }
        });
    }

    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, //Pide el id para que no se borren los demas ids //
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});


          }

			});



}
Seleccionartodos(req,res) { //Selecciona el item y todo sus contenios con respuesta de error si existe o  si no devuelve todas las personas//
		Item.find(
		function(err, item) {
			if (err)

                {
				res.send(err)
                }else{


					res.json(item); // devuelve todas las Personas en JSON

                }
				}
			);



}

    Seleccionarporfecha(req,res) { //Selecciona una cita segun su fecha//
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);



}

    Seleccionarporid(req,res) { //Selecciona una cita segun si id//
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);


}

    Seleccionarpornombre(req,res) { //Selecciona una cita segun su nombre//
	Item.find({NOMBREUSUARIO:req.body.NOMBREUSUARIO}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);



}
}
