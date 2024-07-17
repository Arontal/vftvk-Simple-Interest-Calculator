Interest.addEventListener("click", compute);

function compute(){
    let p = parseInt(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let y = parseInt(document.getElementById("years").value);

    let result = p*r*y;

    document.getElementById("result").innerHTML = result;
}
        