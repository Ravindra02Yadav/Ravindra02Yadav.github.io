$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    // toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
    });
    GitHubCalendar(".calendar", "Ravindra02Yadav");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Ravindra02Yadav", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "Ravindra02Yadav", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())