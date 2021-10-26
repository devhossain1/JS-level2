
// const input = document.querySelector("input[name=name]");
// input.addEventListener('change', changeHandler);

// function changeHandler(e){
//     //console.log(e);
//     //console.log(e.type);
//     //console.log(e.target);
//     //console.log(e.target.className);
//     //console.log(e.target.id);
//     console.log(e.target.value);
// }

// const programs = document.querySelectorAll("input[name=program]");
// //console.log(programs);
// Array.from(programs).map((program)=>{
//     program.addEventListener('change', programHandler);
// });
// function programHandler(e){
   
//     if(e.target.checked){
//        console.log(e.target.value);
//     }
// }

// const department = document.querySelector("#department");
// //console.log(department);
// department.addEventListener('change',departmentHandler);

// function departmentHandler(e){
//     console.log(e.target.value);
// }
//finding the elements
// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #email");
// const password = form.querySelector("div #password");

// form.addEventListener('submit', formHandler);

// function formHandler(e){
//     e.preventDefault();
   
//     const userInfo = {
//         name:name.value,
//         email:email.value,
//         password:password.value
//     };

//     console.log(userInfo);

//     name.value="";
//     email.value= "";
//     password.value="";
  
// }

//video events
// const video = document.querySelector("video");

// video.addEventListener('canplay', function(){
//     console.log('canplay');
// //});

// video.addEventListener('play', function(){
//     console.log('play');
// });
// video.addEventListener('pause', function(){
//     console.log('pause');
// });
// video.addEventListener('ended', function(){
//     console.log('thanks for watching');
// });
// video.addEventListener('volumechange', function(){
//     console.log('volumechange');
// });

// window.addEventListener('load',function(){
//     console.log('load');
// });
// window.addEventListener("scroll",function(){
//     console.log('scroll');
// })
window.addEventListener("resize", function(){
    const height = window.outerHeight;
    const width = window.outerWidth;
    console.log(`height: ${height}, width: ${width}`);
});