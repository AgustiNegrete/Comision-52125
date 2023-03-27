const nombreUsuario = "Agustin";
const passUsuario = "Pass1234";
let ingresosErroneos = 0;

const ingreso = (cantidadIntentos) => {
    const ingresoUsuario = prompt("Ingrese su nombre de usuario:");
    const ingresoPass = prompt("Ingrese su contraseña");

        if(ingresoUsuario == nombreUsuario && ingresoPass == passUsuario){
            ingresosErroneos = 0;
            alert("Bienvenido Agustin");
            return true;
        }
        else{
            alert("Usuario o contraseña incorrecta");
            ingresosErroneos++;
            if(ingresosErroneos < cantidadIntentos ){
                ingreso(cantidadIntentos); 
            }else{
                alert("Intentelo de nuevo mas tarde");
            }
        }
}
const compra = (ocultarMensaje = false) => {
   if(!ocultarMensaje){ alert("Que deseas comprar");}
    const opcion = prompt("\n1 - Remera \n2 - Pantalon\n3 - Buzo \n4 - Salir");

    switch (opcion){
        case "1":
            alert("Compraste remera");
            mensajeGracias();
            break;
        case "2":
            alert("Compraste pantalon");
            mensajeGracias();
            break;
        case "3":
            alert("Compraste buzo");
            mensajeGracias();
            break;
        case "4":
            alert("Gracias por visitarnos");
            break;
        
        default:
            alert("Opcion no valida");
            compra(true);
            break;
        
            
    }
}

const mensajeGracias=()=>{
    alert("Gracias por tu compra");
}

if (ingreso(2)){
    compra();
    }


