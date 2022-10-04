function signupClick() {
    document.getElementById('Signin').style.display = "none"
    document.getElementById('Signup').style.display = "block"
}

function signinClick() {
    document.getElementById('Signin').style.display = "block"
    document.getElementById('Signup').style.display = "none"
}
    

    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    
    form.addEventListener('submit', (e)=> {
            
        if (username.value == 'Admin1' && password.value == 'Admin1') {
            const formControl = username.parentElement;
            const formControl2 = password.parentElement;
            formControl.className = 'form-group success'
            formControl2.className = 'form-group success'
            try {
            Swal.fire({
                title: 'Welcome back!',
                text: 'Good to see you again!',
                icon: 'success',
                width: 500,
              })
              e.preventDefault();
            } catch (err) {
              alert('Welcome back!\nGood to see you again.')
            }
              clearLogin();
            e.preventDefault();
        } else if (username.value == 'Admin1' && password.value != 'Admin1') {
            const formControl = username.parentElement;
            const formControl2 = password.parentElement;
            const small = formControl2.querySelector('small');
            formControl.className = 'form-group success'
            formControl2.className = 'form-group error'
            small.innerText = "Incorrect password";
            e.preventDefault();
        } else if (username.value == 'Rick' && password.value == 'Roll'){
          try {  
          Swal.fire({
                title: 'Sweet!',
                text: 'Peace out brother!',
                imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/022/506/7c6.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
              clearLogin()
            } catch (err) {
              if(confirm('I see you are a man of culture as well.\nShall we proceed?')) {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                clearLogin()
              } else {
                clearLogin()
              }

            }
            
            e.preventDefault();
        } else {
            const formControl = username.parentElement;
            const formControl2 = password.parentElement;
            const small = formControl2.querySelector('small');
            formControl.className = 'form-group error'
            formControl2.className = 'form-group error'
            small.innerText = "Incorrect username and password";
            e.preventDefault();
        }

})

function clearLogin() {
    document.getElementById('username').value=""
    document.getElementById('password').value=""
    const formControl = username.parentElement;
    const formControl2 = password.parentElement;
    const small = formControl2.querySelector('small');
    formControl.className = 'form-group'
    formControl2.className = 'form-group'
    small.innerText = "";
}



const Regform = document.getElementById('RegForm')
const firstname = document.getElementById('f-name')
const lastname = document.getElementById('l-name')
const usernameReg = document.getElementById('username-Reg')
const email = document.getElementById('email-Reg')
const passwordReg = document.getElementById('password-Reg')

Regform.addEventListener ('submit', (e)=> {
    if (email.value != "") {
        const RegFormControl = email.parentElement
        RegFormControl.className = 'form-group success'
        e.preventDefault();
    }

    if (usernameReg.value != "") {
        const RegFormControl = usernameReg.parentElement
        RegFormControl.className = 'form-group success'
        e.preventDefault();
    }

    if (passwordReg.value != "") {
        const RegFormControl = passwordReg.parentElement
        RegFormControl.className = 'form-group success'
        e.preventDefault();
    }

    try {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure you want to continue?',
        text: "You can still edit your details after signing in.",
        width: 500,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Congratulations!',
            'You are now registered.',
            'success'
          )
          clearReg();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Check your details first.',
            'error'
          )
        }
      })
    } catch (err) {
      if (confirm('Are you sure you want to continue?\nYou can still edit your info afterwards.')) {
        alert('Congratulations! You are now registered!')
        clearReg()
      }
    }
})

function clearReg() {
    document.getElementById('f-name').value=""
    document.getElementById('l-name').value=""
    document.getElementById('username-Reg').value=""
    document.getElementById('email-Reg').value=""
    document.getElementById('password-Reg').value=""

    const RegFormControl1 = email.parentElement
    const RegFormControl2 = usernameReg.parentElement
    const RegFormControl3 = passwordReg.parentElement

    RegFormControl1.className = 'form-group'
    RegFormControl2.className = 'form-group'
    RegFormControl3.className = 'form-group'
}