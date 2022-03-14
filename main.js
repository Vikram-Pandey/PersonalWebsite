

document.addEventListener("DOMContentLoaded", function(){

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            
          document.getElementById('navbar-top').classList.add('fixed-top');
          // add padding top to show content behind navbar
        //   navbar_height = document.querySelector('.navbar').offsetHeight;
        //   document.body.style.paddingTop = navbar_height + 'px';
        document.getElementById("navbar-top").style.padding="10px 5px";
        document.getElementById("nameheader").style.fontSize="20px";
        } else  {
        //   document.getElementById('navbar_top').classList.remove('fixed-top');
        //    // remove padding top from body
        //   document.body.style.paddingTop = '0';
        document.getElementById("navbar-top").style.padding="20px 10px;";
        document.getElementById("nameheader").style.fontSize="40px";
        } 
    });
  });


  document.getElementById('one').addEventListener('click', function(){
	if(document.getElementById("main").classList.contains("bg-dark")){
        document.getElementById('main').classList.remove("bg-dark");
        document.getElementById('main').classList.remove("text-white");
        document.getElementById('main').classList.add("bg-light");
        document.getElementById('main').classList.add("text-dark"); //social
        // document.getElementById('social').classList.remove("bg-light");
        // document.getElementById('social').classList.add("bg-dark");
        console.log("if");
    }
    else {
        document.getElementById('main').classList.remove("bg-light");
        document.getElementById('main').classList.remove("text-dark");
        document.getElementById('main').classList.add("bg-dark");
        document.getElementById('main').classList.add("text-white");
        // document.getElementById('social').classList.remove("bg-dark");
        // document.getElementById('social').classList.add("bg-light");
        
        console.log("else");
    }
   
});