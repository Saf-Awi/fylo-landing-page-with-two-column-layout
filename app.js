const topEmail = document.getElementById('top-email');
const bottomEmail = document.getElementById('bottom-email');
const errorTop = document.getElementById('errorTop');
const errorBottom = document.getElementById('errorBottom');


topEmail.addEventListener('input', function () {
    if(!isValidEmail(topEmail.value)){
        errorTop.style.display = "block";
        topEmail.style.border = '1px solid red';
    
    } else {
        errorTop.style.display = 'none';
        topEmail.style.border = '1px solid black';
    };
});

bottomEmail.addEventListener('input', function () {
    if(!isValidEmail(bottomEmail.value)) {
        errorBottom.style.display = 'block';
        bottomEmail.style.border ='1px solid red'
    } else {
        errorBottom.style.display = 'none';
        bottomEmail.style.border ='1px solid black'
    }
})




function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}