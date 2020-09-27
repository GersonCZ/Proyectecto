//Taquilla//
var mongoose= require('mongoose'); //Llama al modelo//
var Schema= mongoose.Schema; //Funcion que se utiliza con el uso de mongoose//
var cita= new Schema({
	//Con el string se utiliza los textos//
	//Con el number se utiliza los numeros//
	//Con el date se utiliza las fechas//
	NOMBREUSUARIO: String, //Este es la parte en la que va ser tomada el usuario que pide la cita
	NOMBREMASCOTA: String, //Esta parte se toma el nombre que puede tener la macosta
	MOTIVO: String,
	FECHA: Date,
	HORAINICIO: Number,
	MINUTOINICIO: Number,
	IMAGEN: String,
	ESTADO: Number
});
module.exports=mongoose.model('Cita', cita); //Esta parte es tomada como modulo para ser exprotado en diversas funciones js
