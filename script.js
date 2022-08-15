function generate()
{
    var a=(Math.floor(Math.random()*16777215)).toString(16);
   document.getElementById('output').innerText = a; 
   document.body.style.backgroundColor = "#" + a;
   color.innerHTML = "#" + a;
    console.log(a)
    
    
}
generate()


