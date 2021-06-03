x=0;

function cautare()
{
    x++;
    var bar = document.getElementById('searchbar');
    var detail = document.getElementsByClassName("details")
    if(x%2==1)
    {
        bar.style.display = 'block';
        for (i = 0; i < detail.length; i++) {
            detail[i].style.top = '230px';
        }

        var input = document.getElementById('bar');
        input.addEventListener("keyup", function(event){
            if(event.keyCode === 13){
                var txt = document.getElementById("bar").value;
                if(txt === ""){
                    alert("Fill out the search bar!");
                }
                else{
                    txt = "https://www.youtube.com/results?search_query=" + txt;
                    location.replace(txt); 
                }
            }
        });
    }
    else
    {
        bar.style.display = 'none';
        for (i = 0; i < detail.length; i++) {
            detail[i].style.top = '150px';
          }
    }
}

var myPix = new Array("profilepics/pfp.jpg","profilepics/pfp2.jpg","profilepics/pfp3.jpg","profilepics/pfp4.jpg","profilepics/pfp5.jpg","profilepics/pfp6.jpg" );
function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("pfp").src = myPix[randomNum];
}

setInterval(function(){ alert("Are you still there?"); }, 300000);

if(localStorage.getItem("accepted") == 0 || localStorage.getItem("accepted") === null){
    setTimeout(function(){
        if(confirm("Press OK to accept cookies")){
            localStorage.setItem("accepted", 1);
            alert("Cookies accepted!");
        }
        else{
            alert("Cookies rejected!");
        }
    }, 3000);
}

function profil(){
    var s = document.getElementsByClassName('search');
    s[0].style.display = 'none';

    var page = document.getElementById('grid-container');
    page.remove();
    
    var para = document.createElement('p');
    var node = document.createTextNode('Enable cookies?');
    para.appendChild(node);

    para.style.fontSize = '20px';
    para.style.left = '20%';
    para.style.top = '100px';
    para.style.position = 'absolute';

    document.body.appendChild(para);

    var para = document.createElement('p');
    var node = document.createTextNode('Yes');
    para.appendChild(node);

    para.style.fontSize = '20px';
    para.style.left = '22%';
    para.style.top = '130px';
    para.style.position = 'absolute';

    document.body.appendChild(para);

    var para = document.createElement('p');
    var node = document.createTextNode('No');
    para.appendChild(node);

    para.style.fontSize = '20px';
    para.style.left = '22%';
    para.style.top = '160px';
    para.style.position = 'absolute';

    document.body.appendChild(para);

    var r = document.createElement('input');
    r.type = 'radio';
    r.value = 1;
    r.id = 'yes';
    r.name = 'cookies';
    r.style.left = '20%';
    r.style.top = '135px';
    r.style.position = 'absolute';

    document.body.appendChild(r);

    var r = document.createElement('input');
    r.type = 'radio';
    r.value = 0;
    r.id = 'no';
    r.name = 'cookies';
    r.style.left = '20%';
    r.style.top = '165px';
    r.style.position = 'absolute';

    document.body.appendChild(r);

    var r = document.createElement('button');
    r.innerHTML = 'Submit';
    r.onclick = function(){
        var radios = document.getElementsByName('cookies');
        for(i = 0; i < radios.length; i++){
            if(radios[i].checked){
                if(radios[i].value == 1){
                    localStorage.setItem("accepted", 1);
                    alert('Cookies enabled!');
                }
                if(radios[i].value == 0){
                    localStorage.setItem("accepted", 0);
                    alert('Cookies disabled!');
                }
                break;
            }
        }
    }
    r.style.left = '20%';
    r.style.top = '190px';
    r.style.position = 'absolute';

    document.body.appendChild(r);

    var para = document.createElement('p');
    var node = document.createTextNode('Show in library:');
    para.appendChild(node);

    para.style.fontSize = '20px';
    para.style.left = '20%';
    para.style.top = '220px';
    para.style.position = 'absolute';

    document.body.appendChild(para);

    var para = document.createElement('p');
    var node = document.createTextNode('Liked songs');
    para.appendChild(node);

    para.style.fontSize = '20px';
    para.style.left = '20%';
    para.style.top = '250px';
    para.style.position = 'absolute';

    document.body.appendChild(para);

    var para = document.createElement('p');
    var node = document.createTextNode('Local files');
    para.appendChild(node);

    para.style.fontSize = '20px';
    para.style.left = '20%';
    para.style.top = '280px';
    para.style.position = 'absolute';

    document.body.appendChild(para);

    var r = document.createElement('input');
    r.type = 'checkbox';
    r.value = 'liked songs';
    r.name = 'library';
    r.style.left = '28%';
    r.style.top = '255px';
    r.style.position = 'absolute';

    document.body.appendChild(r);

    var r = document.createElement('input');
    r.type = 'checkbox';
    r.value = 'local files';
    r.name = 'library';
    r.style.left = '28%';
    r.style.top = '285px';
    r.style.position = 'absolute';

    document.body.appendChild(r);

    var r = document.createElement('button');
    r.innerHTML = 'Submit';
    r.onclick = function(){
        var library = document.getElementsByName('library');
        ok = 0;
        msj = "Showing";
        for(i = 0; i < library.length; i++){
            if(library[i].checked){
                if(ok == 0){
                    msj = msj + " " + library[i].value;
                    ok = 1;
                }
                else{
                    msj = msj + ", " + library[i].value;
                }
            }
        }
        if(ok == 0){
            msj = msj + " nothing";
        }
        alert(msj);
    }
    r.style.left = '20%';
    r.style.top = '310px';
    r.style.position = 'absolute';

    document.body.appendChild(r);
}

function clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(clock, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

y=0;
function embolden(){
    y++;
    if(y%2 == 1){
        document.getElementById('clock').classList.add('bold');
    }
    else{
        document.getElementById('clock').classList.remove('bold');
    }
}

function getColor(){
    var elem = document.getElementsByClassName('sidebar');
    var theCSSprop = window.getComputedStyle(elem[0], null).getPropertyValue("background-color");
    alert(theCSSprop);
}

function changeColor(){
    
}