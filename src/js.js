var buttons = document.querySelectorAll('.btn');
var paragraphs = document.querySelectorAll('p');
var h2s = document.querySelectorAll('h2');

buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        if (window.getComputedStyle(paragraphs[index]).display === 'none') {
            showText(button, index);
            hideOtherTexts(index);
        } else {
            hideText(button, index);
        }
    });
});

function showText(button, index) {
    paragraphs[index].style.display = 'block';
    button.src = 'assets/images/icon-minus.svg';
    h2s[index].style.color = 'black';
}

function hideText(button, index) {
    paragraphs[index].style.display = 'none';
    button.src = 'assets/images/icon-plus.svg';
    h2s[index].style.color = '#341635';
}

function hideOtherTexts(currentIndex) {
    for (var i = 0; i < paragraphs.length; i++) {
        if (i !== currentIndex) {
            paragraphs[i].style.display = 'none';
            buttons[i].src = '/assets/images/icon-plus.svg';
            h2s[i].style.color = '#341635';
        }
    }
}
