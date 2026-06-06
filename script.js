window.onload = () => {
console.log("Stealme Designs Website Loaded Successfully");
};
const form = document.getElementById('contactForm');

form.addEventListener('submit', async function(e){

e.preventDefault();

const formData = new FormData(form);

await fetch(
'https://formsubmit.co/ajax/stealmedesigns15@gmail.com',
{
method:'POST',
body:formData
}
);

document.getElementById('successPopup').style.display='flex';

form.reset();

});

function closePopup(){
document.getElementById('successPopup').style.display='none';
}
