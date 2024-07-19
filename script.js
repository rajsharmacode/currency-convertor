
let resultamt = document.querySelector("#resultamt");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let fromcont = document.querySelector("#fromselect");
let tocont = document.querySelector("#toselect");
let select = document.querySelectorAll(".selectbtn");
let optioncreate
let amt = document.querySelector("#amountinput")
let btn = document.querySelector("#exbtn")


for (bothselect of select) {

    for (code in countryList) {

        optioncreate = document.createElement("option");
        optioncreate.innerText = code
        optioncreate.value = code
        bothselect.append(optioncreate)

        if (bothselect.name === "from" && code === "INR") {
            optioncreate.selected = "selected";
            let cc = countryList[code];
            let newSrc = `https://flagsapi.com/${cc}/flat/64.png`;
            img1.src = newSrc;

        } else if (bothselect.name === "to" && code === "USD") {
            optioncreate.selected = "selected";
            let cc = countryList[code];
            let newSrc = `https://flagsapi.com/${cc}/flat/64.png`;
            img2.src = newSrc;
        }
    }
    bothselect.addEventListener("change", (en) => {
        updateFlag(en.target);
    })
}
const updateFlag = (val) => {
    let curcode = val.value;
    let countryCode = countryList[curcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let imgg = val.parentElement.querySelector(".flagimg");
    imgg.src = newSrc;
}
fetchurldata = async () => {
//  const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"; NOT WORKING API
    const api = 'https://api.exchangerate-api.com/v4/latest/INR';
    fetch(`${api}`)
        .then((currency) => {
            return currency.json();
        })
        .then(displayResults);

    // let res= await fetch(urll)
    // let data=await fetch(res.url)
    // let response=await fetch(URL);
    // let data=response[tocont.value.toLowerCase];
    // console.log(data)
}
function displayResults(currency) {
    let fromRate = currency.rates[fromcont.value];
    let toRate = currency.rates[tocont.value];
    let finalres = ((toRate / fromRate) * amt.value).toFixed(2);
    let restext = ` ${amt.value} ${fromcont.value} = ${finalres} ${tocont.value}`;
    resultamt.innerText = restext;
}
window.addEventListener("load", () => {
    if (amt.value == "" || amt.value < 0) {
        amt.value = "1";
    }
    fetchurldata();
});
btn.addEventListener("click", (ee) => {
    ee.preventDefault(); // for not reloading page
    if (amt.value == "" || amt.value < 0) {
        amt.value = "1";
    }
    console.log(amt.value);
    fetchurldata();
});

