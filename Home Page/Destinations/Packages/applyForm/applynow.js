const form = document.querySelector("form");
const fname = document.getElementById("name")
const butt =  document.getElementsByClassName("btn1")

function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pasiya0615@gmail.com",
    Password : "7541293571EB1280767D8876562DDF3DF8A9",
    To : 'pasiya0615@gmail.com',
    From : "pasiya0615@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

function hideshow(val) {
    if(val==2){
        document.getElementById('fn').style.display='none';
    }

    if(val==2){
        document.getElementById('nt').style.display='none';
    }

    if(val==1){
        document.getElementById('fn').style.display='block';
    }

    if(val==1){
        document.getElementById('nt').style.display='block';
    }
}



function checkInput() {
    const items = document.querySelectorAll(".intt");

    items.forEach(intt => {

        // Add error if empty on load
        if (intt.value === "") {
            intt.classList.add("error");
            intt.parentElement.classList.add("error");
        }

        // SELECT dropdowns
        if (intt.tagName === "SELECT") {

            intt.addEventListener("change", () => {
                if (intt.value !== "") {
                    intt.classList.remove("error");
                    intt.parentElement.classList.remove("error");
                } else {
                    intt.classList.add("error");
                    intt.parentElement.classList.add("error");
                }
            });
        }

        // FILE input
        else if (intt.type === "file") {

            intt.addEventListener("change", () => {
                if (intt.files.length > 0) {
                    intt.classList.remove("error");
                    intt.parentElement.classList.remove("error");
                } else {
                    intt.classList.add("error");
                    intt.parentElement.classList.add("error");
                }
            });
        }

        // DATE input (important fix)
        else if (intt.type === "date") {

            intt.addEventListener("change", () => {
                if (intt.value !== "") {
                    intt.classList.remove("error");
                    intt.parentElement.classList.remove("error");
                } else {
                    intt.classList.add("error");
                    intt.parentElement.classList.add("error");
                }
            });
        }

        // TEXT input
        else {
            intt.addEventListener("keyup", () => {
                if (intt.value !== "") {
                    intt.classList.remove("error");
                    intt.parentElement.classList.remove("error");
                } else {
                    intt.classList.add("error");
                    intt.parentElement.classList.add("error");
                }
            });
        }
    });
}




function checkInputsq0() {
    let valid = true;

    
    const radios = document.getElementsByName("q0");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q0").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q0").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});

}

function checkInputsq1() {
    let valid = true;

    
    const radios = document.getElementsByName("q1");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q1").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q1").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});



}

function checkInputsq2() {
    let valid = true;

    
    const radios = document.getElementsByName("q2");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q2").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q2").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});



}

function checkInputsq3() {
    let valid = true;

    
    const radios = document.getElementsByName("q3");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q3").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q3").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});



}

function checkInputsq4() {
    let valid = true;

    
    const radios = document.getElementsByName("q4");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

   document.getElementsByName("q4").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q4").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});



}

function checkInputsq5() {
    let valid = true;

    
    const radios = document.getElementsByName("q5");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q5").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q5").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});



}

function checkInputsq6() {
    let valid = true;

    
    const radios = document.getElementsByName("q6");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q6").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q6").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});



}

function checkInputsq7() {
    let valid = true;

    
    const radios = document.getElementsByName("q7");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q7").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q7").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});



}

function checkInputsq8() {
    let valid = true;

    
    const radios = document.getElementsByName("q8");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q8").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q8").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});


}

function checkInputsq9() {
    let valid = true;

    
    const radios = document.getElementsByName("q9");
    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) isChecked = true;
        // Remove previous error
        radio.parentElement.querySelector('span').classList.remove('rb-error');
    });

    if (!isChecked) {
        radios.forEach(radio => {
            radio.parentElement.querySelector('span').classList.add('rb-error');
        });
        valid = false;
    }

    document.getElementsByName("q9").forEach(radio => {
    radio.addEventListener("change", function () {
        // Remove red border immediately after selecting
        document.getElementsByName("q9").forEach(r => {
            r.parentElement.querySelector("span").classList.remove("rb-error");
        });
    });
});

}

function submit(){
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Simple validation: check required fields
    let allFilled = true;
    const inputs = form.querySelectorAll('.intt');
    inputs.forEach(input => {
      if (input.value === '' && input.type !== 'file') {
        allFilled = false;
        input.nextElementSibling.style.display = 'block'; // show error
      } else if (input.nextElementSibling) {
        input.nextElementSibling.style.display = 'none'; // hide error
      }
    });

    if (allFilled) {
      // Show a success message
      const successMsg = document.createElement('div');
      successMsg.style.padding = '15px';
      successMsg.style.background = '#4BB543';
      successMsg.style.color = 'white';
      successMsg.style.borderRadius = '8px';
      successMsg.style.textAlign = 'center';
      successMsg.style.marginTop = '20px';
      successMsg.innerText = 'Application Successfully Submitted!';
      
      form.parentNode.insertBefore(successMsg, form.nextSibling);

      // Optional: Reset the form
      form.reset();
    } else {
      alert("Please fill all required fields!");
    }
  });
}























// form.addEventListener("Next", (e) =>{
//     e.preventDefault();
//     checkInput()
   
    
// });


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputsq0()
    checkInputsq1()
    checkInputsq2()
    checkInputsq3()
    checkInputsq4()
    checkInputsq5()
    checkInputsq6()
    checkInputsq7()
    checkInputsq8()
    checkInputsq9()
    submit()
    checkInput();
    
});