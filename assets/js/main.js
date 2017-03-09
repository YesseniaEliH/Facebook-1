var mail = document.getElementById('email');
var pas = document.getElementById('pass');
var bot = document.getElementById('boton');
var validarE = document.getElementById('validar_email');
var validarP = document.getElementById('validar_pass');

bot .addEventListener("click", function(){

  if (mail.value == "" ){
    validarE.innerText = "El campo del usuario no puede estar vacio";
  } else{
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

          if (!emailRegex.test(mail.value)) {
            validarE.innerText = "Ingrese un email valido";
          } else {

            validarE.innerText = "";
          }
  }

  if (pas.value == "" ){
    validarP.innerText = "El campo del password no puede estar vacio";
  }else{
    validarUsuario();
  }


});

//validar usuarios
var usuarios = [{nombre: "Arabela",email:"arabela@laboratoria.la",password:"1234"},
              {nombre: "Meche",email:"meche@laboratoria.la",password:"1234"},
            {nombre: "Michelle",email:"michelle@laboratoria.la",password:"1234"}];

function validarUsuario(){
  usuarios.forEach(function(elemento){
      if(elemento.email == mail.value && elemento.password == pas.value){
          alert(elemento.nombre);
      }else {

      }

  });
}
