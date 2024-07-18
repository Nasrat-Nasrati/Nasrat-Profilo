
window.onscroll = function () {
    if (window.scrollY == 0) {
        document.querySelector('header').style.backgroundColor = null;
        document.querySelector('.top-btn').style.display = null;
    } else {
        document.querySelector('header').style.backgroundColor = '#ddd';
        document.querySelector('.top-btn').style.display = 'block';
    }
}

document.querySelector('.top-btn').onclick = function () {
    window.scrollTo(0, 0);
}


// change main color in website

var setting = document.getElementById('setting');
var Block = document.getElementById('mainColorBlock');

setting.onclick = function () {
    if (Block.style.right == '') {
        Block.style.right = 0;
    } else {
        Block.style.right = null;
    }
}

var colors = document.querySelectorAll('#mainColorBlock div');
colors.forEach(element => {
    var mainColor = document.querySelector(':root');
    var newMainColor = element.id;
    element.onclick = function () {
        mainColor.style.setProperty('--mainColor', newMainColor);

    }
});


