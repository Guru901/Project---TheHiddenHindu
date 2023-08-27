const pg = document.querySelector('#page');
const subMenu = document.querySelector('.sub');
const cat = document.querySelector('#cat');
const catMenu = document.querySelector('.cats');
const listBtn = document.querySelector('#list');
const closeBtn = document.querySelector('#close');
const btn = document.querySelector('#btn-1');
const menu = document.querySelector('.menu');

// pg.addEventListener('click', function (event) {
//     // Do not prevent default behavior for submenu clicks
//     if (!event.target.classList.contains('sub-items')) {
//         // event.preventDefault();
//     }
//     subMenu.classList.toggle('show');
// });

cat.addEventListener('click', function (event) {
    // Do not prevent default behavior for submenu clicks
    if (!event.target.classList.contains('cat-items')) {
        event.preventDefault();
    }
    catMenu.classList.toggle('show');
});

listBtn.addEventListener('click', function(){
    menu.classList.add('menu-open')
    listBtn.style.display = 'none';
    closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('menu-open')
    listBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});




btn.addEventListener('click', function(){
    location.reload();
})




document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputField = document.querySelector('#user-email');
        if (inputField.value.trim() != '') {
            btn.click();
        }   
    }
});

