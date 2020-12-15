
function changeImg(id) {
    var img = document.getElementById("img");
    var btnContainer = document.getElementById("btnContainer");
    var btns = btnContainer.getElementsByClassName("button");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");

            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }

            this.className += " active";
      });
    }

    switch (id) {
        case 1:
            img.src = "https://nstatic.nova.bg/public/pics/nova/article/980x551_1572500770.jpg";
            break;
        case 2:
            img.src = "https://clubz.bg/sites/default/files/field/image/%D0%92%D0%B8%D0%B5%D0%BD%D0%B0%20%D0%92%D0%B8%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%20%D0%BA%D0%BE%D0%BB%D0%B5%D0%BB%D0%BE.jpg";
            break;
        case 3:
            img.src = "https://thankyou.bg/wp-content/uploads/2019/06/viena.jpg";
            break ;
            case 4:
                img.src="https://rual-travel.com/uploads/gallery/big_2791_1474876404.jpg";
                break;
                case 5:
                    img.src="https://static.dir.bg/uploads/images/2019/06/28/1786413/768x432.jpg?_=1561721717";
                    break;
           
    }
}
function loadCredits() {
    
    var content = document.createElement("p");
    content.innerHTML = "Виена е олицетворение на културата,аристократизма и спокойствието.Никъде другаде класическата музика не звучи така мелодично,шоколадът не е толкова сладък и архитектурата не е толкова внушителна.Виена е културното сърце на Европа.Част от Световното културно наследство на ЮНЕСКО,наследник на бурно историческо минало и мярка за стандарта на живот.Виена не спира да бъде една от топ дестинациите на Европа.Обиколката на Виена със сигурност крие много повече удоволствия и места за посещения от изброените.Истинското очарование на града не може да се опише с думи.Трябва да се види,да се почувства и изживее!"
    document.getElementById("footer").appendChild(content);
    document.getElementById("foot").style.display = 'none';
}

var standardbody = (document.compatMode == "CSS1Compat") ? document.documentElement : document.body 

var nav = (!document.all || window.opera);
var tmr = null;
var spd = 50;
var x = 0;
var x_offset = 5;
var y = 0;
var y_offset = 15;

document.onmousemove = get_mouse;

function get_mouse(e) {
    x = (nav) ? e.pageX : event.clientX + standardbody.scrollLeft;
    y = (nav) ? e.pageY : event.clientY + standardbody.scrollTop;
    x += x_offset;
    y += y_offset;
    beam(1);
}

function beam(n) {
    if (n < 5) {
        document.getElementById('div' + n).style.top = y + 'px'
        document.getElementById('div' + n).style.left = x + 'px'
        document.getElementById('div' + n).style.visibility = 'visible'
        n++;
        tmr = setTimeout("beam(" + n + ")", spd);
    }
    else {
        clearTimeout(tmr);
        fade(4);
    }
}

function fade(n) {
    if (n > 0) {
        document.getElementById('div' + n).style.visibility = 'hidden'
        n--;
        tmr = setTimeout("fade(" + n + ")", spd);
    }
    else clearTimeout(tmr);
}


