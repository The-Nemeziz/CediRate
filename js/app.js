
var introModal = new bootstrap.Modal(document.getElementById('intoModal'), {
    keyboard: false
  });

  var apodModal = new bootstrap.Modal(document.getElementById('apodDetailsModal'), {
    keyboard: false
  });

  let wallpaperDescription;
  let wallpaperTitle;
  let wallpaperImage;

  

var modalTitle = document.querySelector('#modalTitle');
var modalDescription = document.querySelector('#modalDescription');
var dollarText = document.querySelector('#dollarRate');
var euroText = document.querySelector('#euroRate');
var poundText = document.querySelector('#poundRate');
var nairaText = document.querySelector('#nairaRate');
var cfaText = document.querySelector('#cfaRate');
var canadaDollarText = document.querySelector('#canadianDollarRate');

var wallpaperUrl ="https://api.nasa.gov/planetary/apod?api_key=6Fu3WbYftQKCGAdeooNfwyFUVTOBV304UVdw4gus";

//apodModal.addEventListener('')

function ChangeBackground(){
    fetch(wallpaperUrl).then(response => response.json()).then(res => ChangeBackgroundImage(res)).catch(err =>{
        console.log({'Failed':err})
    });
    console.log("reloaded!!!");
}

function ChangeData(){
    ChangeBackground();
    GetDollarRate();
    GetEuroRate();
    GetPoundRate();
    GetNairaRate();
    GetCFARate();
    GetCanadianDollarRate();
    setTimeout(() => introModal.show(), 3000);
}

document.addEventListener("DOMContentLoaded", ChangeData());





function ChangeBackgroundImage(data){
   
    wallpaperImage = data.url;
    //wallpaperTitle = data.title;
    wallpaperDescription = data.explanation;
    document.body.style.backgroundImage = "url(" + wallpaperImage + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    modalTitle.innerHTML = data.title + " ( " + data.date + " )";
    //console.log(new Date(data.date));
    modalDescription.innerHTML = data.explanation;
}

//FOR DOLLAR
function GetDollarRate(){
    var url = "https://v6.exchangerate-api.com/v6/e7b9e2e5f6927f37a1526865/pair/USD/GHS";
    fetch(url).then(response => response.json()).then(res => DisplayDollarValue(res));
}

function DisplayDollarValue(data){
    var amount = data.conversion_rate;
    dollarText.innerHTML = amount + " CEDIS";
}

//FOR EURO

function GetEuroRate(){
    var url = "https://v6.exchangerate-api.com/v6/e7b9e2e5f6927f37a1526865/pair/EUR/GHS";
    fetch(url).then(response => response.json()).then(res => DisplayEuroValue(res));
}

function DisplayEuroValue(data){
    var amount = data.conversion_rate;
    euroText.innerHTML = amount + " CEDIS";
}


//FOR POUND

function GetPoundRate(){
    var url = "https://v6.exchangerate-api.com/v6/e7b9e2e5f6927f37a1526865/pair/GBP/GHS";
    fetch(url).then(response => response.json()).then(res => DisplayPoundValue(res));
}

function DisplayPoundValue(data){
    var amount = data.conversion_rate;
    poundText.innerHTML = amount + " CEDIS";
}

//FOR NAIRA
function GetNairaRate(){
    var url = "https://v6.exchangerate-api.com/v6/e7b9e2e5f6927f37a1526865/pair/NGN/GHS";
    fetch(url).then(response => response.json()).then(res => DisplayNairaValue(res));
}

function DisplayNairaValue(data){
    var amount = data.conversion_rate;
    nairaText.innerHTML = amount + " CEDIS";
}

//FOR CFA
function GetCFARate(){
    var url = "https://v6.exchangerate-api.com/v6/e7b9e2e5f6927f37a1526865/pair/XOF/GHS";
    fetch(url).then(response => response.json()).then(res => DisplayCFAValue(res));
}

function DisplayCFAValue(data){
    var amount = data.conversion_rate;
    cfaText.innerHTML = amount + " CEDIS";
}

//FOR CANADIAN DOLLAR
function GetCanadianDollarRate(){
    var url = "https://v6.exchangerate-api.com/v6/e7b9e2e5f6927f37a1526865/pair/CAD/GHS";
    fetch(url).then(response => response.json()).then(res => DisplayCanadianDollarValue(res));
}

function DisplayCanadianDollarValue(data){
    var amount = data.conversion_rate;
    canadaDollarText.innerHTML = amount + " CEDIS";
}

