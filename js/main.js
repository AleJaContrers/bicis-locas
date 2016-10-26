function validateForm(){

	var nombre= document.getElementById("name").value;
	var apellido= document.getElementById("lastname").value;
	var mail=document.getElementById("input-email").value;
	var password=document.getElementById("input-password").value;

	// validar si campos no estan vacios
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
  		alert("El nombre debe ser ingresado");
  		return false;
	} else if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
  		alert("El apellido debe ser ingresado");
  			return false;
	}else if (mail == null || mail.length == 0 || /^\s+$/.test(mail) ) {
		alert("El mail debe ser ingresado");
		return false;
	}else if (password == null || password.length == 0 || /^\s+$/.test(password) ) {
		alert("La contraseña debe ser ingresada");
		return false;
	}

	// Validar que nombre y apellido sean texto

		//Nombre
		if (/^[a-zA-Z]*$/.test(nombre)===false){
			alert("Nombre mal ingresado, pruebe nuevamente");
			return true;
		}

		//Apellido
		if (/^[a-zA-Z]*$/.test(apellido)===false){
			alert("Apellido mal ingresado, pruebe nuevamente");
			return true;
		}


	// Validar primera letra mayuscula 
		//Nombre
		if (nombre.charAt(0).toUpperCase()!==nombre.charAt(0)){
			alert("La primera letra del nombre debe ser mayuscula");
			return false;
		}
		//Apellido
		if (apellido.charAt(0).toUpperCase()!==apellido.charAt(0)){
			alert("La primera letra del apellido debe ser mayuscula");
			return false;
		}

	// Validar clave largo no menor a 6 ni igualdad con ciertos caracteres

	if (password.length<=5 ) {
		alert("La clave debe ser de al menos 6 caracteres");
	}else if(password==="123456" || password==="098754" || password==="password") {
		alert("Debe ingresar clave diferente");
	}

	

  	// Validar lista de bicicletas
  	  var seleccionBici=document.querySelector("select").selectedIndex;
    	
    	if( seleccionBici == null || seleccionBici == 0 ) {
  			alert("Debe elegir un tipo de bicicleta de la lista");
  			return false;
		}


	// validar email

	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
  		alert("Correo ingresado correctamente");
  		return false;
  	}else{
  		alert("ingresa correo correctamente");
  	}

 }