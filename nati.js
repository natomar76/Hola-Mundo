// ACA voy a crear las variables Strings que contendran
// texto para los alert dependiendo de la opciòn elegida por el user

let solucion500 = '21 ml/hs en 24hs';
let solucion1000 = "42 ml/hs en 24hs";
let solucion1500 = '63 ml/hs en 24hs';
let solucion2000 = '84 ml/hs en 24hs';
let solucion2500 = '105 ml/hs en 24hs';
let solucion3000 = '126 ml/hs en 24hs';
let solucion3500 = '147 ml/hs en 24hs';
let solucion4000 = '168 ml/hs en 24hs';
let texto= "La cantidad de soluciòn a pasar es de: "

// ACA CREO UNA VARIABLE QUE VA A CONTENER EL DATO INGRESADO POR EL USER
let cantidad = prompt("Ingrese cantidad de solucion en 24hs \n Las opciones son:\n 500\n1000\n1500\n2000\n2500\n3000\n3500\n4000")


// AQUI CREO UN CONTROL DE FLUJOS A TRAVES DE UN IF Y ELSE IF QUE VA A COMPARAR
// EL DATO INGRESADO POR EL USUARIO CON MIS DATOS

if (cantidad === "500") {
    alert(solucion500)
}
else if (cantidad === "1000") {
    alert(texto+solucion1000)
}
  else if (cantidad === "1500") {
    alert(texto+solucion1500)
}
    else if (cantidad === "2000") {
        alert(texto+solucion2000)
    }
        else if (cantidad === "2500") {
            alert(texto+solucion2500)
        }
            else if (cantidad === "3000") {
                alert(texto+solucion3000)
            }
                else if (cantidad === "3500") {
                    alert(texto+solucion3500)
                }
                    else if (cantidad === "4000") {
                        alert(texto+solucion4000)
                    }
                        else {
                            alert (" el volumen ingresado no se encuentra disponible")
                        }
