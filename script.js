let baseColor = document.getElementById('base-color')
let colorForm = document.getElementById('color-form')
let schemeStyle = document.getElementById('style')
let disOne = document.getElementById('display-1')
let disTwo = document.getElementById('display-2')
let disThree = document.getElementById('display-3')
let disFour = document.getElementById('display-4')
let disFive = document.getElementById('display-5')
let displayArray = [disOne,disTwo,disThree,disFour,disFive]
let colText1 = document.getElementById('text-display-1')
let colText2 = document.getElementById('text-display-2')
let colText3 = document.getElementById('text-display-3')
let colText4 = document.getElementById('text-display-4')
let colText5 = document.getElementById('text-display-5')
let btn = document.getElementById("getBtn")



colorForm.addEventListener("submit",(e) => {
    e.preventDefault()
    console.log(baseColor.value)
    console.log(schemeStyle.value)
    let colorCode = baseColor.value.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${schemeStyle.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.colors[0].hex.value)
        // Create Loop for simplification of data, creating two arrays for color displays
        // for (let color of data.colors){
        //     let colorCode = color.hex.value
        // }
        setTimeout(()=>{
            disOne.style.backgroundColor = data.colors[0].hex.value
            colText1.innerText = data.colors[0].hex.value
        },100)
        setTimeout(()=>{
            disTwo.style.backgroundColor = data.colors[1].hex.value
            colText2.innerText = data.colors[1].hex.value
        },200)
        setTimeout(()=>{
            disThree.style.backgroundColor = data.colors[2].hex.value
            colText3.innerText = data.colors[2].hex.value
        },300)
        setTimeout(()=>{
            disFour.style.backgroundColor = data.colors[3].hex.value
            colText4.innerText = data.colors[3].hex.value
        },400)
        setTimeout(()=>{
            disFive.style.backgroundColor = data.colors[4].hex.value
            colText5.innerText = data.colors[4].hex.value
            btn.style.boxShadow = "-1px 10px 28px 0px rgba(0,0,0,0.75)"
            btn.style.color = "white"
            btn.style.background = "red"
        },500)    
    })
})

for(let display of displayArray){
    display.addEventListener("click",()=>{
        copyToClipboard(display)
    })
}

function copyToClipboard(color) {
    var copyText = color.style.backgroundColor
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        console.log(copyText)
        alert("Copied to clipboard");
    });
  }

function btnAction(){
    btn.style.boxShadow = "-1px 10px 28px 0px white"
    btn.style.color = "red"
    btn.style.background = "white"
}


// fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome')
//     .then(res => res.json())
//     .then(data => console.log(data))

