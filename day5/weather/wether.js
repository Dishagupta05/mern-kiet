function fetchAPI(){
    const api=fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?key=75WXVXBCR2Z28PQMY8A5YMJTD");
    api.then((value1)=>{
        console.log(value1.status)
        console.log(value1.ok)
        return value1.json()
    }).then((value2)=>{
        console.log(value2)
    })
}


fetchAPI();

const root = document.getElementById('root');

function FtoC(fahrenheit) {
  // Convert Fahrenheit to Celsius using the formula: (Fahrenheit - 32) * 5/9
  var celsius = (fahrenheit - 32) * 5 / 9;
  
  return Number(celsius.toFixed(0));
}

function randerUI(){
    let row = document.createElement("tr");
    let col1 = document.createElement("tr");
    col1.innerText = "tem";
    row.appendChild(col1);
}
