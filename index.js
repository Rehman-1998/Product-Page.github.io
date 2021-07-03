$(document).ready(function() {
 
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(".owl-prev").html('<i class="arrow left"></i>');
$(".owl-next").html('<i class="arrow right">');
 
});

// ********* Script for Increment and Decrement ************
let addbtn= document.querySelector('#add');
let subbtn= document.querySelector('#sub');
let qty= document.querySelector('#root');

addbtn.addEventListener('click',()=>{
    qty.value= parseInt(qty.value)+1;
});

subbtn.addEventListener('click',()=>{
    if(qty.value <=1){
        qty.value=1;
    }
    else{
    qty.value= parseInt(qty.value)-1;
    }
});



// ***********************


// $(document).ready(function() {
//     $("#search-bar").click( function(){
    
//         $("#cart-icon").css("display","none");
//         $("#form").css("display","block");
//     });
// });

