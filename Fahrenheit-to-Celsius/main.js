
document.getElementById("convertBtn").addEventListener('click', converter);


function converter(){
    let input = Number(document.getElementById('Fahrenheit').value);
    let total = (input - 32) *5 /9;    //18.5555555
    // multiply total by 100
    total = total * 100;    // 1855.555555...

    // round total using Math.round()
    total = Math.round(total);  // 1855

    // Divide total by 100
    total = total/100;   // 18.55


    document.getElementById("Celsius").innerHTML = total + " °C";
}