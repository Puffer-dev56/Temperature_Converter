const convertForm = document.querySelector("#inputForm");
const output = document.querySelector("#output");
const inpDegree = convertForm.inpDegree;
const inpFrom = convertForm.ConvertFrom;
const inpTo = convertForm.ConvertTo;
function toCelsius() {
    let inp = Number(inpDegree.value);
    switch (inpFrom.value) {
        case "C": return inp;
        case "F": return (inp - 32) * (5 / 9);
        case "K": return (inp - 273.15);
        case "R": return (inp- 491.67) * (5 / 9);
    }
}
function fromCelsius() {
    switch (inpTo.value) {
        case "C": return toCelsius();
        case "F": return (toCelsius() * (9 / 5)) + 32;
        case "K": return toCelsius() + 273.15;
        case "R": return (toCelsius() * (9 / 5)) + 491.67;
    }
}
function btnSubmit(event){
    event.preventDefault();
    output.textContent = fromCelsius().toFixed(2);
    convertForm.inpDegree.value = ""
}
function main(){
    convertForm.addEventListener("submit",btnSubmit)
}
main();