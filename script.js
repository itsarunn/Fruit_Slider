function showoption(e1){
    const value = e1.value;
    const imgsrc = document.getElementById("fruit-image")
    if(value==="apple"){
        imgsrc.src = "images/apple.jpg";
    }else if(value==="banana"){
        imgsrc.src = "images/banana.jpg";
    }else if(value=="grapes"){
        imgsrc.src = "images/grapes.jpg";
    }else{
        imgsrc.src ="";
    }
}