$(document).ready(function(){
    $(".hamburger").click(function(){
         $(".menus").slideToggle();
        $(this).toggleClass("cross");
    });

});

let modal_image = document.querySelectorAll('.modal-click'),
modal_body = document.querySelector('.modal-body'),
modal_box = document.querySelector('.modal-box'),
image_source = document.querySelector('.modal-image'),
buttons = document.querySelectorAll('.tab-button'),
tabs = document.querySelectorAll('.tab-icons'),
main_icons = document.querySelector('.portfolio-icons'),
main_button = document.querySelector('.main-button');
modal_image.forEach((i,index)=>{
    i.addEventListener('click',()=>{
        modal_body.style.display = "block";
        modal_box.style.display = "block";
         image_source.src = modal_image[index].src;
    // console.log(modal_image[index].src)
    });
})

modal_body.addEventListener('click',function(){
    modal_body.style.display = "none";
    modal_box.style.display = "none";
})

buttons.forEach((i,index)=>{
    i.addEventListener('click',function(){
      tabs.forEach(i=>{
          i.style.left = "-150%";
      })
         tabs[index].style.left="0";
    })
});

main_button.addEventListener('click',function(){
    tabs.forEach(i=>{
        i.style.left = "-150%";
    })
})














































