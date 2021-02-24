var drag = document.querySelectorAll(".drag");
var start = document.querySelector("body");

drag.forEach(function (item) { 

    

    // change dimension of items to make ready to drag
    item.addEventListener("mousedown", selectItem)
    function selectItem(e){
        
        console.log("mousedown success");  
        e.target.style.position = "absolute";
        e.target.style.zIndex = 1;
        
        mouseMove(e);
        // offMouse(e)
    }
    
    
    // assign the item to the mouse on click 
    function onMouse(pageX, pageY){
        // if()
        item.style.left = pageX - item.offsetWidth/2 + "px";
        
        item.style.top = pageY - item.offsetWidth/3 + "px";
        // console.log("axis success");
        
        
    }
    
    
    // make the item move with the mouse while mouse is still down
    item.addEventListener("mousemove", mouseMove);
    function mouseMove(e){

            onMouse(e.pageX, e.pageY);
    }
    

    // make the element drop once the mouse is up 
    item.addEventListener("mouseup", offMouse);

    function offMouse(e){
        onMouse(e.pageX, e.pageY);

        
        item.removeEventListener("mousemove", mouseMove);
        item.onmouseup = null; 
        // onMouse(e.pageX, e.pageY);
    
    }
});