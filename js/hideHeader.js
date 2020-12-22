let headerContent = document.getElementById("headerContent");

// only show when work is clicked or first loaded 

// window.onload=function(){
//     headerContent.style.display="visible";

// }
if(window.location.pathname=="/"){
    //work selected 
    // if (headerContent.style.display=="none"){
    headerContent.style.display="inline-block";

// }else{
    // headerContent.style.display="none";
// }

    console.log("work selected?")
}else{
    headerContent.style.display="none";

}

