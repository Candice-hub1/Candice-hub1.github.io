$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

var timeLeft = 10;

const downloadBtn = document.querySelector(".download-btn");
const countdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleaseWait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadLink = document.querySelector(".manualDownload-link");


downloadBtn.addEventListener("click", () =>{
    downloadBtn.style.display="none";
    countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";

    var downloadTimer = setInterval(function timeCount(){
        timeLeft -=1;
        countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft +"</span> seconds.";

        if(timeLeft <= 0){
            clearInterval(downloadTimer);
            pleaseWaitText.style.display = "block";
            let download_href = "Hlatshwayo_Nompumelelo_CV_Document.pdf";
            window.location.href = download_href;
            manualDownloadLink.href = download_href;

            setTimeout(() => {
                pleaseWaitText.style.display = "none";
                manualDownloadText.style.display = "block"
            }, 4000);

        }

    }, 1000); 
});

// var loader = document.getElementById("preLoader");
// window.addEventListener("load", function(){
//   loader.style.display="none";
// })

// const loader = document.querySelector('.loader');
// const main = document.querySelector('');

// function init() {
//   setTimeout(() => {
//     loader.style.opacity = 0;
//     loader.style.display = 'none';

//     main.style.display = 'block';
//     setTimeout(() => (main.style.opacity = 1), 50);
//   }, 4000);
// }

// init();

