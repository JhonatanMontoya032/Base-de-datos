const departamentos = {
colombia: ["Antioquia","Cundinamarca","ValledelCauca","Atlántico","Bolívar","Boyacá","Cauca","Huila","Nariño"],
chile: ["AricaParinacota","Tarapacá","Antofagasta","Atacama","Coquimbo","Valparaíso","OHiggins","Maule","Ñuble","Biobío"],
panama: ["BocasdelToro","Coclé","Colón","Chiriquí","Darién","Herrera","LosSantos","Panamá","Veraguas","PanamáOeste"],
bolivia: ["Pando","Beni","SantaCruz","Cochabamba","LaPaz","Oruro","Potosí","Chuquisaca","Tarija"],
peru: ["Amazonas","Áncash","Apurímac","Arequipa","Ayacucho","Cajamarca","Callao","Cusco","Huancavelica","Huánuco","Ica"],
usa: ["California","Texas","Florida","NewYork","Illinois","Pennsylvania","Ohio","Georgia","NorthCarolina","Michigan"],
}
   

function actualizardepts() {
    const paisSeleccionado = document.getElementById("pais").value;
    const regionSelect = document.getElementById("departamento");
    
    //Limpiar datos
    regionSelect.innerHTML = '<option value="">Seleccione una región</option>';
    //obtener departamentos del pais
    const departamento1 = departamentos[paisSeleccionado] || []
    //añadir nuevas opciones
    departamento1.forEach(departamento => {
        const option = document.createElement("option");
        option.value = departamento.toLowerCase().replace(/ /g,"_");
        option.textContent = departamento;
        regionSelect.appendChild(option)
    });
}

function guardar(){
    const pais = document.getElementById("pais").value;
    const region = document.getElementById("departamento").value;
    const clave = document.getElementById("clave").value;
    if(validarCorreo()){
        validacion=window.confirm("Exelente, su información ha sido guardada correctamente. ¿Desea ir al menú de inicio de sesión.?") 
        if(validacion){
           location.href = '/BASE DE DATOS/Index.html'
        }
    }else{
        alert("La información no se ha ingresado correctamente, por favor vuelvalo a intentar.")
    }
    
    validarCorreo()
} 

function validarCorreo(){
    const correo = document.getElementById("correo").value;
    var corregir = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(!corregir.test(correo)){
        return false;
    }

    return true;
    
}

/*
//Numero de documento
let documento = document.getElementById('documento').value
if(documento === 0){
    alert('por favor ingrese su tipo de documento')
}

console.log(documento)

*/