let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  dob = id("dob"),
  mobile = id("mobile"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  function Validmail()
  {
     let mymail=email.value;
     let attherate=mymail.indexOf("@");
     let atthedot=mymail.lastIndexOf(".");

     if (attherate<1 || atthedot<attherate+3 || atthedot>=mymail.length)
            {
               alert( "enter the correct email");
               return false;
            }
   }  

   function Valimob()
              {
                 
                 let mobile1=mobile.value

                 if (mobile1.length==10)
                     {
                        return true
                     }
                  else      
                         {
                           alert( "enter the correct 10 digits number");
                           return false;
                        }
               }       

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 4, "Password cannot be blank");
  engine(dob, 3, "Date of Birth cannot be blank");
  engine(mobile, 2, "Mobile Number cannot be blank");
  Validmail(email);
  Valimob(mobile);

});



let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
