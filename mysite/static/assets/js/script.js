
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
        console.log('clicked item:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
       document.getElementById('theme-style').href = 'static/assets/css/default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'static/assets/css/blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'static/assets/css/green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'static/assets/css/purple.css'
    }

    localStorage.setItem('theme', mode)
}