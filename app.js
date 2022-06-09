//Variables

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let dolar = {
    cambio: 42,
};

// Boton recargar aplicativo
const reload = document.getElementById('reload');
reload.addEventListener('click', _ => { 
    location.reload();
});

// Fetch y JSON

let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch (error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        for (let i=0;i<3;i++){
            body +=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr> ` 
        }

        document.getElementById('data').innerHTML = body
    } 

//Funciones

function pesos() {
    let p = document.getElementById("sueldo").value;
    let x = document.getElementById("ahorro").value;


    if (x == false) {
      swal({
        title: "Error!",
        text: "Debe ingresar la cantidad que quiere ahorrar!",
        icon: "warning",
        button: "OK",
      });
      return;
    }    

    else if (x < 1000) {
      swal({
        title: "Error!",
        text: "El monto que desea ahorrar debe ser mayor a $1000!",
        icon: "warning",
        button: "OK",
      });
        return;
      }
      else if (p == false) {
        swal({
          title: "Error!",
          text: "Debe ingresar su sueldo",
          icon: "warning",
          button: "OK",
        });
        return;
      }

    let resultado = x / meses.length;

      if (resultado > p){
         swal("El monto de ahorro mensual es mayor a sus ingresos, debera ser mas realista con la suma que decida ahorrar.")
         
         }
      
         else {
          for (let i = 0; i < meses.length; i++)
          document.getElementById('input').innerHTML = "Usted debe ahorrar la suma de $ " +parseInt(resultado) +" durante 12 meses, para alcanzar el monto de $" + x  + "." + "<br><br>";
         }

         // Muestra grafico

         //Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Sueldo', 'Ahorro'],
          datasets: [{
              label: 'Porcentaje de ahorro con respecto a tu sueldo',
              data: [p,resultado],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)'
  
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function dolares() {

    let p = document.getElementById("sueldo").value;
    let x = document.getElementById("ahorro").value;
    let resultado = (x/meses.length)/(dolar.cambio);
    

    if (resultado > p){
      swal("El monto de ahorro mensual es mayor a sus ingresos, debera ser mas realista con la suma que decida ahorrar.")
      return;
      }

    else if (x == false) {
      swal({
        title: "Error!",
        text: "Debe ingresar la cantidad que quiere ahorrar!",
        icon: "warning",
        button: "OK",
      });
      return;
    }    

    else if (x < 1000) {
      swal({
        title: "Error!",
        text: "El monto que desea ahorrar debe ser mayor a $1000!",
        icon: "warning",
        button: "OK",
      });
        return;
      }
      else if (p == false) {
        swal({
          title: "Error!",
          text: "Debe ingresar su sueldo",
          icon: "warning",
          button: "OK",
        });
        return;
      }

      else {
        for (let i = 0; i < meses.length; i++)
        document.getElementById('input').innerHTML = "Usted debe ahorrar la suma de U$S " +parseInt(resultado) +" durante 12 meses " + "para alcanzar la suma de $" + x  + "." + "<br><br>"; 
      }
    
    //Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Sueldo', 'Ahorro'],
          datasets: [{
              label: 'Porcentaje de ahorro con respecto a tu sueldo',
              data: [p,resultado],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)'
  
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function mostrarGrafico() {

  let p = document.getElementById("sueldo").value;
  let x = document.getElementById("ahorro").value;
  let resultado = x / meses.length;

    sessionStorage.setItem("sueldo", JSON.stringify(p));
    sessionStorage.setItem("ahorro", JSON.stringify(x));

      p =  JSON.parse(sessionStorage.getItem("sueldo"));
      x =  JSON.parse(sessionStorage.getItem("ahorro"));

      if (x == false) {
        swal({
          title: "Error!",
          text: "Debe ingresar su ahorro",
          icon: "warning",
          button: "OK",
        });
        return;
         }
      else if (x < 1000 ) {
        swal({
          title: "Error!",
          text: "El monto del ahorro debe ser mayor a $1000!",
          icon: "warning",
          button: "OK",
        });
        return;
      }
      else if (p == false) {
        swal({
          title: "Error!",
          text: "Debe ingresar su sueldo",
          icon: "warning",
          button: "OK",
        });
        return;
      }
      

//Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Sueldo', 'Ahorro'],
          datasets: [{
              label: 'Porcentaje de ahorro con respecto a tu sueldo',
              data: [p,resultado],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)'
  
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

}








