
 function clearContact() {
    document.getElementById('firstname-contact').value=""
    document.getElementById('lastname-contact').value=""
    document.getElementById('email-contact').value=""
    document.getElementById('number').value=""
    document.getElementById('message').value=""
}

const ContactForm = document.getElementById('ContactForm')

 ContactForm.addEventListener('submit', (e)=> {
   try {
    Swal.fire({
        title: 'Thank you for your feedback!',
        text: 'We appreciate your message to us. God bless!',
        width: 600,
        imageUrl: 'https://i.imgflip.com/17lary.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
   } catch(err) {
     alert('Thank you for your message!\nWe appreciate it!')
   }
      clearContact()
      e.preventDefault();
      
 })
