// const details = document.querySelector("details");
// details.addEventListener('toggle',function(e){
//     console.log(e.target.open);
// })

// const div = document.querySelector("div");
// div.addEventListener('click',function(event){
    //console.log('click is occured');
    //console.log(event.target);
    //console.log(event.target.className);
    //console.log(event.target.id);
    // console.log(event.target.innerHTML);
    // console.log(event.target.textContent);
    //console.log(event.target.innerText);

//});

// div.addEventListener('dblclick',function(){
//     console.log('duble click is occured');
// });
// div.addEventListener('mousedown',function(){
//     console.log('mousedown is occured');
// });
// div.addEventListener('mouseup',function(){
//     console.log('mouseup is occured');
// });
// div.addEventListener('mouseenter',function(){
//     console.log('mouseenter is occured');
// });
// div.addEventListener('mouseleave',function(){
//     console.log('mouseleave is occured');
// });
// div.addEventListener('mouseover',function(){
//     console.log('mouseover is occured');
// });
// div.addEventListener('mousemove',function(e){
//     //console.log('mousemove is occured');
//     //console.log(`clientX = ${e.clientX}, clientY = ${e.clientY}`);
//     console.log(`offsetX = ${e.offsetX}, offsetY = ${e.offsetY}`);
// });

// const buttons = document.querySelectorAll('.btn');
// Array.from(buttons).map((button)=>{
//     button.addEventListener('click', function(e){
//         console.log(e.target.innerText);
//     })
// });

const textArea = document.querySelector("textarea");

 textArea.addEventListener('keydown',function(){
   console.log('keydown');
 });
// textArea.addEventListener('keypress',function(){
//     console.log('keypress');
// });
// textArea.addEventListener('keyup',function(e){
//     // console.log(e.keyCode);
//     //console.log(e.key);
//     // console.log(e.code);
//     //console.log(e.shiftKey);
//     if(e.shiftKey){
//         console.log(`shift + ${e.key}`);
//     }
// });
