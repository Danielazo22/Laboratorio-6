
document.addEventListener("submit",registrarpaciente)

function registrarpaciente(event){
    event.preventDefault()

    const NombrePaciente = document.getElementById("NombrePaciente").value
    const ApellidoPaciente = document.getElementById("ApellidoPaciente").value 
    const NumerocedulaPaciente = document.getElementById("NumerocedulaPaciente").value 
    const EdadPaciente = document.getElementById("EdadPaciente").value
    const CorreoPaciente = document.getElementById("CorreoPaciente").value
    const TelefonoPaciente = document.getElementById("TelefonoPaciente").value
   

    var expRegnombreP= /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    var nombrevalido = expRegnombreP.test(NombrePaciente);


    if (!nombrevalido){
        alert("El nombre no es valido  ")
    }else{

        alert("El nombre es valido  ")
    }

    console.log(NombrePaciente)


    var expRegApellidoP= /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    var Apellidovalido = expRegApellidoP.test(ApellidoPaciente);


    if (!Apellidovalido){
        alert("El Apellido no es valido  ")
    }else{

        alert("El Apellido es valido  ")
    }

    console.log(ApellidoPaciente)

    var expRegCedulaP= /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/;
    var Cedulavalida = expRegCedulaP.test(NumerocedulaPaciente);


    if (!Cedulavalida){
        alert("La cédula no es valida  ")
    }else{

        alert("La cédula es valida  ")
    }

    console.log(NumerocedulaPaciente)
    
    var expRegconsultorioP = /^\D*\d{2}$/;
    var edadvalida = expRegconsultorioP.test(EdadPaciente);

    if(!edadvalida){

        alert("Edad no es valida")
    }else{

        alert("Edad es válida")
    }

    console.log(EdadPaciente)
    

    var expRegcorreoP= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var Correovalido = expRegcorreoP.test(CorreoPaciente);

    if(!Correovalido){

        alert("Correo no es valido")
    }else{

        alert("Correo es válido")
    }

    console.log(CorreoPaciente)

    var expRegtelefonoP = /^\D*\d{10}$/;
    var telefonovalido = expRegtelefonoP.test(TelefonoPaciente);

    if(!telefonovalido){

        alert("Telefono no es valido")
    }else{

        alert("Telefono es válido")
    }

    console.log(TelefonoPaciente)
    return
}
