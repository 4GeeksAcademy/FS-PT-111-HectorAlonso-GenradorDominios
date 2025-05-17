/*import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/
window.onload = function() {
  //write your code here
    let articulos = ["el", "la", "los", "las", "un", "una", "unos", "unas"];
    let adjetivos = ["rápido", "lento", "alto", "bajo", "grande", "pequeño", "inteligente", "fuerte", "débil", "bonito", "feo", "simpático", "amable", "valiente", "orgulloso", "feliz", "triste"];
    let nombres = ["roble", "perro", "pino", "gato", "cedro", "elefante", "abeto", "tigre", "manzano", "león", "cerezo", "águila", "girasol", "tiburón", "rosal", "caballo", "tulipán", "delfín", "lavanda", "lobo", "helecho", "búho", "bambú", "serpiente", "sauce", "oso", "hiedra", "canguro", "orquídea", "jirafa"];
    let dominios = [".es", ".com", ".net", ".org", ".info"];
    
    let arrayResultado = []

    /*for of anidados, en este caso, en vez de mostrar todos, por consola, quitando el comentario en la 
    linea 24 salen todos, yo lo que he generado ha sido otro array y solo muestra un "dominio" cada vez que se actualiza la pagina*/ 
    for (let articulo of articulos){
      for(let adjetivo of adjetivos){
          for(let nombre of nombres){
              for(let dominio of dominios ){
                let resultado = (articulo+adjetivo+nombre+dominio);
                  //console.log(resultado);//ver que aparezca en consola todas las respuestas
                    arrayResultado.push(resultado);//almacenamos los resultados en un nuevo array
              }
          }
      }
    }
    //en estas lineas, calculo el totaldel arrayResultado, genero un numero aleatorio lo imprimo en consola
    //solo para comprobar que funcione como quiero
    //en la linea 38 se envia el resultado al html y que muestre el nº de array reultado que diga numeor dominio mostrado
    console.log(arrayResultado.length)//calculo el largo del array para ver hasta donde llega (20400 en total)
    let numeroDominioMostrado = Math.floor(Math.random()*20401);
    console.log(numeroDominioMostrado);


    document.getElementById("resultado").innerHTML = arrayResultado[numeroDominioMostrado];
};
