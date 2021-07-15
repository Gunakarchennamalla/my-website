
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themedots = document.getElementsByClassName('theme-dot')

for(var i=0; themedots.length > i; i++){
    themedots[i].addEventListener('click',function(){
        var mode = this.dataset.mode
        //console.log('clicked item:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
       document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}







            window.onload = function(){

	const trigger = document.querySelector("menu > .trigger");
	trigger.addEventListener('click', (e) => {
 		 e.currentTarget.parentElement.classList.toggle("open");
	});

          /*Scroll to top when arrow up clicked BEGIN*/

        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('#back2Top').fadeIn();
            } else {
                $('#back2Top').fadeOut();
            }
        });
        $(document).ready(function() {
            $("#back2Top").click(function(event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });

        });

        }; 
         /*Scroll to top when arrow up clicked END*/
