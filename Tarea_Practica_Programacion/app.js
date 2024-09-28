/* function dibujarV(num){
    let cadena="";
    for(let i = 0 ; i < num;i++){
        cadena = cadena + "X\n"; 
    }
    console.log(cadena);
}
function dibujarH(num){
    let cadena="";
    for(let i = 0 ; i < num;i++){
        cadena = cadena + "X "; 
    }
    console.log(cadena);
}

function cuadrado(num){
    let cadena="";
    for(let i = 0 ; i < num;i++){
        for(let j = 0; j < num; j++){
            if(j==num-1 || j==0 || i == 0 || i==num-1){
                cadena = cadena + "X ";
            }else{
                cadena = cadena + "  ";
            }
        }
        cadena = cadena + "\n";

    }
    console.log(cadena);
}

function tablas(){
    
    for(let i = 0 ; i < 10;i++){
        for(let j = 0; j < 10; j++){
            console.log(i +" x "+ j + " = " + i*j);
        }
       

    }
}
*/
let frutas=["Manzana", "Banana", "Naranja", "Pera", "Uva", "Mango", "Piña", "Melón", "Sandía", "Durazno"];
function listarArreglo(arreglo){
    i=0;
    frutas.forEach(f => {
        console.log(i++ + ", " + f);
    })
}

tamaño = prompt("Dame el tamaño de impresion: ");
dibujarH(tamaño);
dibujarV(tamaño);
cuadrado(tamaño);
tablas();
listarArreglo(frutas);