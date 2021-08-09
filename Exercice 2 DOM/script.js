

let spacing =document.getElementById("spacing") ;
console.log(spacing.value) ;
let blur=document.getElementById("blur") ;
console.log(blur.value) ;
let color=document.getElementById("color") ;
console.log(color.value) ;
let image =document.getElementById("image") ;
console.log(image) ;
spacing.addEventListener("change",function Myfunction(event){

    event.preventDefault() ;
    console.log(spacing.value) ;
    console.log(blur.value) ;

    image.style.padding=spacing.value + "px" ;
    image.style.backgroundColor=color.value ;
    
}) ;
color.addEventListener("change",function Myfunction(event){
    event.preventDefault() ;
    image.style.backgroundColor=color.value ;
})

 blur.addEventListener("change" ,function Myfunction(event){
    event.preventDefault() ;
    //  image.style.filter="blur("+blur.value+"px)" ;
    image.style.filter=`blur(${blur.value}px)` ;
 }) ;