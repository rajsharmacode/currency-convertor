const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

//   for(code in countryList){
//     console.log(code,countryList[code])
//   }

let img1=document.querySelector("#img1");
let img2=document.querySelector("#img2");

let select = document.querySelectorAll(".selectbtn");
let optioncreate
for (bothselect of select) {

    for (code in countryList) {
        optioncreate = document.createElement("option");
        optioncreate.innerText = code
        optioncreate.value = code
        bothselect.append(optioncreate)
        
        if (bothselect.name === "from" && code === "INR") {
            optioncreate.selected = "selected";
            let cc=countryList[code];
            let newSrc = `https://flagsapi.com/${cc}/flat/64.png`;
            img1.src=newSrc;
        } else if (bothselect.name === "to" && code === "USD") {
            optioncreate.selected = "selected";
            let cc=countryList[code];
            let newSrc = `https://flagsapi.com/${cc}/flat/64.png`;
            img2.src=newSrc;
        }
    }
    bothselect.addEventListener("change",(en)=>{
        updateFlag(en.target)
    })
}
const updateFlag=(val)=>{
    let curcode=val.value
    let countryCode=countryList[curcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let imgg=val.parentElement.querySelector(".flagimg")
    imgg.src=newSrc
}

let amt=document.querySelector("#amountinput")
let btn=document.querySelector("#exbtn")

btn.addEventListener("click",(ee)=>{
    ee.preventDefault();
    if(amt.value=="" || amt.value<0){
        amt.value="1"
    }
    console.log(amt.value);

    fetchurldata()
  
})

fetchurldata=  ()=>{
    let fromcont=document.querySelector("#fromselect");
    let tocont=document.querySelector("#toselect");
    // console.log(fromcont.value.toLowerCase());
    // console.log(tocont.value);
    const URL=`${BASE_URL}/${fromcont.value.toLowerCase()}/${tocont.value.toLowerCase()}.json`;

    // let response=await fetch(URL);
    // let data=response[tocont.value.toLowerCase];
    // console.log(data)
}