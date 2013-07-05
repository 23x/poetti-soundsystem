window.onload=function(){
        var all = document.getElementsByClassName('one-third');
        for(var i = 1; i < all.length; i++) { 
            all[i].childNodes[1].setAttribute('onClick', 'playTheShit(' + i + ')'); 

            all[i].childNodes[1].className += " button";
            all[i].childNodes[3].style.display = 'none'; 
        }
        var hash=document.location.hash.substr(1);
        if(typeof hash !== 'undefined' && hash.length > 1) {
                var els=document.getElementsByTagName('h2');
                for(var i in els) {
                        var name = els[i].innerHTML +'';
                        if((name.replace(/ /g, '').toLowerCase()).indexOf(hash) !== -1){
                                playTheShit(parseInt(i)+1);
                                break;
                        }
                }

        } 
}

function playTheShit(id)
{
    document.getElementsByClassName("one-third")[id].childNodes[3].play();
}
