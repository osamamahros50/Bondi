let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let passwordInput=document.getElementById('passwordInput');
let btnSignUp=document.getElementById('btnSignUp');
let formInput=document.getElementById('formInput');
var list=[];
if (JSON.parse(localStorage.getItem('list'))) {
    
    list = JSON.parse(localStorage.getItem('list'))
}
formInput.addEventListener('submit' , register)
    

function register(event) {
    event.preventDefault()


   if (isEmpty() !=true ) {
    if (valdateInputs(nameInput)==true && valdateInputs(emailInput)==true && valdateInputs(passwordInput)==true) {
        if (isExsist() !=true) {
            

    var user={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }   
    list.push(user);
    localStorage.setItem("list",JSON.stringify(list));
    clear();
    Toastify({
        text: "account Created Succefully",
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();  
      setTimeout(function () {
          window.location.replace('./login.html')
          
        },1500)
}
}else{
    displayError('all Input Must be valid')
}
}
function isEmpty() {
    if (nameInput.value==""|| emailInput.value=="" || passwordInput.value=="") {
       displayError("all inputs is Required")
          
        return true;       

    }
}

function isExsist() {
    for (let i = 0; i < list.length; i++) {
    if (emailInput.value == list[i].email) {
        displayError("email already exist");
        return true;
    }        
    }
}
function displayError(message) {
    Swal.fire({
        confirmButton: false,
        showCloseButton: true,
      confirmButtonColor: "#ff5252",
        html:`

        <p class="text-danger fw-bold"><i class="fa-solid fa-exclamation "></i> ${message}</p>
        `
      });
}
}
function clear() {
    nameInput.value='';
    emailInput.value='';
    passwordInput.value='';
}
function valdateInputs(e) {
   var text =e.value;
   var regux={
    nameInput: /^[A-Za-z][a-z]{3,}$/,
    emailInput: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
    passwordInput: /^\d{3,11}[a-zA-Z]{1,5}$/,
   }
   if (regux[e.id]&& regux[e.id].test(text)) {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
    return true;
  } else {
    e.classList.add("is-invalid");
    e.classList.remove("is-valid");
    return false;
  }
}