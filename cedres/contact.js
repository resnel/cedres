//let's get all required element

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form form submitting
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpsRequest(); //création du nouveau objet xml
    xhr.open("POST", "contact.php", true); //seding post request to message.php file
    xhr.onload = ()=>{ //once ajax loader
        if(xhr.readyState == 4 && xhr.status == 200){// if ajax response status 200 & ready status is 4 means therz is no any error
            let response = xhr.response; //   storing ajax response in a response variable
            if(response.indexOf("Email and Message required") != -1 || response.indexOf("Enter a valid email address") || response.indexOf("Sorry, failed to send your message!") || response.indexOf("Your message has been sent"))
            {
                statusTxt.style.color = "red";
            }
            else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);//creat new formdata obj
    xhr.send(formData);//setting form  data
}