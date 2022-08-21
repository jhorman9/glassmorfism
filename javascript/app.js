let sizeRange = document.querySelector("#size");
let sepiaRange = document.querySelector("#sepia");
let displays = document.querySelector(".display");
let colorPallet = document.querySelector("#colores");
let borderRange = document.querySelector("#border");
let blurRange = document.querySelector("#blur");
let boxRange = document.querySelector("#box");
let printResultW = document.querySelector(".sizePrintW");
let printResultH = document.querySelector(".sizePrintH");
let borderPrint = document.querySelector(".borderPrint");
let blurPrint = document.querySelector(".blurPrint");
let saturatePrint = document.querySelector(".saturatePrint");
let saturateRange = document.querySelector("#saturate");
let boxShadow = document.querySelector(".boxShadow");
let borderLineaRange = document.querySelector("#linearBorder");
let borderLineaPrint = document.querySelector(".linearborder")
let redPoint = document.querySelector(".redPoint");
let colorBorder = document.querySelector("#colorBorder");
let opacityRange = document.querySelector("#opacityRange");
let opacityPrint = document.querySelector("#opacityPrint");

colorPallet.addEventListener("input", (e) =>{
    let cuadro = `${e.target.value}`;
    displays.style.background = cuadro;
});

sizeRange.addEventListener("input", (e) =>{
    let cuadro = `${e.target.value}`;
    displays.style.width = `${cuadro}px`;
    displays.style.height = `${cuadro}px`;
    printResultW.textContent = `width: ${cuadro};`;
    printResultH.textContent = `height: ${cuadro};`;
   if(cuadro > 150) {
   redPoint.style.display = "block";
   }else {
    redPoint.style.display = "none";
    }
});

sepiaRange.addEventListener("input", (e) =>{
    let cuadro = `sepia(${e.target.value}%)`;
    displays.style.backdropFilter = cuadro;
    blurPrint.textContent = `backdrop-filter: ${cuadro};`;
})


saturateRange.addEventListener("input", (e) => {
    let saturate = `saturate(${e.target.value}%)`;
    let blur = `blur(${e.target.value}px)`
    displays.style.backdropFilter = `${saturate} ${blur}`;
    saturatePrint.textContent = `backdrop-filter: ${saturate};`;
    blurPrint.textContent = `backdrop-filter: ${blur};`;

})

borderRange.addEventListener("input", (e) =>{
    let cuadro = `${e.target.value}px`;
    displays.style.borderRadius = cuadro;
    borderPrint.textContent = `border-radius: ${cuadro} ${cuadro} ${cuadro}`
});

boxRange.addEventListener("input", (e) =>{
    let cuadro = `${e.target.value}px`;
    displays.style.boxShadow = `${cuadro} ${cuadro} ${cuadro} ${colorPallet.value}`;
    boxShadow.textContent = `box-shadow: ${cuadro} ${cuadro} ${cuadro} ${colorPallet.value};`;
})

borderLineaRange.addEventListener("input", (e) =>{
    let cuadro = `${e.target.value}px solid ${colorBorder.value}`;
    displays.style.border = cuadro;
    borderLineaPrint.textContent = `border: ${cuadro};`;
})

opacityRange.addEventListener("input", (e) =>{
    let cuadro = `opacity(${e.target.value}%)`;
    console.log(cuadro)
    displays.style.backdropFilter = `backdrop-filter: ${cuadro}`;
})




// invertRange.addEventListener("input", (e) =>{
//     let cuadro = `${e.target.value}px`;
    
// });













// let imagenes = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//                 "https://www.nationalgeographic.com.es/medio/2022/01/05/waterfall-and-baobab-tree_3887ddc0_2000x1333.jpg",
//                 "https://static4.depositphotos.com/1006446/371/i/600/depositphotos_3710302-stock-photo-autumn-scenery.jpg"
// ];

