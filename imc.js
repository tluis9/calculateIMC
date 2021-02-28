var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var female = document.getElementById("f");
var male = document.getElementById("m");

document.getElementById("submit").addEventListener("click", validadeForm);

function validadeForm(){
    if(age.value == '' || height.value == '' || weight.value == '' || (male.checked==false && female.checked==false)){
        alert("Todos os campos são requeridos!");
        document.getElementById("submit").removeEventListener("click", calculateIMC);
    } else{
        calculateIMC();
    }
}

function calculateIMC(){
    var arrayPerson = [age.value, height.value, weight.value];
    if(male.checked){
        arrayPerson.push("male");
    } else if(female.checked){
        arrayPerson.push("female");
    }

    var imc = Number( arrayPerson[2] ) / ( Number( arrayPerson[1] )/100 * Number( arrayPerson[1] )/100 );
    
    var result = '';
    if(imc<18.5){
        result = 'Magreza';
    } else if(18.5<=imc && imc<=24.9){
        result = 'Normal';
    } else if(24.9<=imc && imc<=30) {
        result = 'Obeso';
    } else if(imc>30) {
        result = 'Obesidade extrema';
    }

    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');

    var t = document.createTextNode(result);
    var b = document.createTextNode('IMC: ');
    var r = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m²');

    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);

    document.body.appendChild(h1);
    document.body.appendChild(h2);

    document.getElementById("submit").removeEventListener("click", calculateIMC);
    document.getElementById("submit").removeEventListener("click", validadeForm);
}

document.getElementById("submit").addEventListener("click", calculateIMC);
