let signUpBtn = document.getElementById('signUpBtn');
let signInBtn = document.getElementById('signInBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');
let login = document.getElementById('input-group1');
let register = document.getElementById('input-group2');
let pass2 = document.getElementById("pass2Reg");
let error = document.getElementById("error");
let isSignUpPage = true; // Initially, the page is on the sign-up page
let count =0;

signInBtn.onclick = function () {
    title.innerHTML = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    register.style.display = "none";
    login.style.display = "block";
    count++;
    // console.log(count);
    if (count == 2){
        validateLogin();
        // console.log("hi")
    }
    isSignUpPage = false; // Set the flag to false when navigating to the sign-in page
   

}

signUpBtn.onclick = function () {
    title.innerHTML = "Sign Up";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    login.style.display = "none";
    register.style.display = "block";
    count = 0;
    
    
    // Only display alert if the page is already on the sign-up page
    if (isSignUpPage) {
        validateForm(); // Call validateForm() here
    }
    isSignUpPage = true; // Set the flag to true when navigating to the sign-up page
}

pass2.oninput = function () {
    validatePass();
};

function validatePass() {
    let pass = document.getElementById("passReg").value;
    let pass2Value = pass2.value;

    if (pass === pass2Value) {
        signUpBtn.removeAttribute("disabled");
        error.innerHTML = "Password Matched";
        error.style.color = "green";
    } else {
        signUpBtn.setAttribute("disabled", true);
        error.innerHTML = "Password do not match";
        error.style.color = "red";
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("emailReg").value;
    let pass = document.getElementById("passReg").value;
    let pass2 = document.getElementById("pass2Reg").value;

    if (name === "" || email === "" || pass === "" || pass2 === "") {
        alert("Invalid data");
        return false;
    } else {
        alert("Successfully Created Account");
        count=1;
        // Store user data in localStorage
        let userData = {
            name: name,
            email: email,
            password: pass
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        // Switch to login page
        title.innerHTML = "Sign In";
        signUpBtn.classList.add("disable");
        signInBtn.classList.remove("disable");
        register.style.display = "none";
        login.style.display = "block";
        isSignUpPage = false; // Set the flag to false when navigating to the sign-in page



       
        
    }
}



let loginbutton = document.getElementById("signInBtn");
loginbutton.addEventListener("click",function(){
   
        
    
})
function validateLogin() {

    let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
        console.log(email, pass);
        // Retrieve user data from localStorage
        let userData = JSON.parse(localStorage.getItem("userData"));
        
        if (userData && userData.email === email && userData.password === pass)
        {
            alert("Login successful");
        window.location.href = '/Home/home.html';

        } 
        else 
        {
            alert("Invalid login");   
            count=1   
        }
}
