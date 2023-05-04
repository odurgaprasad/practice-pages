

window.addEventListener("load", () => {
  const form = document.getElementById("multi-page-form")
  const first_form = document.getElementById("form-page1")
  const second_form = document.getElementById("form-page2")
  const third_form = document.getElementById("form-page3")
  const first_next_button = document.getElementById("Next-Button-1")
  const second_next_button = document.getElementById("Next-Button-2")
  const third_next_button = document.getElementById("Next-Button-3")
  const prev_button1 = document.getElementById("Prev-Button-1")
  const prev_button2 = document.getElementById("Prev-Button-2")
  const formContainerBox = document.getElementById("form-container-box")
  const successBox = document.getElementById("success-Box")
  const ResetBtn = document.getElementById("reset-btn")
  const PreviewBtn = document.getElementById("preview-btn")


  // Handle form submission
  // form.addEventListener("submit",(e)=>{
  third_next_button.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const dob = document.getElementById("date").value.trim();
    const email = document.getElementById("email").value.trim();
    const fatherFirstName = document.getElementById("father_first_name").value.trim();
    const fatherLastName = document.getElementById("father_last_name").value.trim();
    const motherFirstName = document.getElementById("mother_first_name").value.trim();
    const motherLastName = document.getElementById("mother_last_name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const nationality = document.getElementById("Nationality").value.trim();
    const homeAddress = document.getElementById("Home").value.trim();
    const city = document.getElementById("City").value.trim();
    const country = document.getElementById("country").value.trim();
    const telephoneHome = document.getElementById("Telephone-Home").value.trim();
    const mobile = document.getElementById("Mobile").value.trim();
    const hscInstitution = document.getElementById('hscInstitution').value.trim();
    const hscBoard = document.getElementById('hscBoard').value.trim();
    const hscScore = parseInt(document.getElementById('hscScore').value.trim());
    const sscInstitution = document.getElementById('sscInstitution').value.trim();
    const sscBoard = document.getElementById('sscBoard').value.trim();
    const sscScore = parseInt(document.getElementById('sscScore').value.trim());
    const currentlyPursuing = document.getElementById('currently-pursuing').value.trim();
    const currentInstitution = document.getElementById('currentInstitution').value.trim();
    const overallScore = parseInt(document.getElementById('overallScore').value.trim());
    const currentBacklogs = parseInt(document.getElementById('currentBacklogs').value.trim());
    const photo = document.getElementById("photo");
    const hscMarksheet = document.getElementById("hscMarksheet");
    const sscMarksheet = document.getElementById("sscMarksheet");
    const semesterMarksheet = document.getElementById("semesterMarksheet");

    
     
     if (photo === "" || hscMarksheet === "" || sscMarksheet === "" || semesterMarksheet === ""){
      alert("Please fill the form completely before proceeding !!");
      return false;
     }

    // Hiding the form & displaying Preview Container
    formContainerBox.style.display = "none";
    successBox.style.display = "flex";

    // list of data
    const formdata = {
      firstName,
      lastName,
      dob,
      email,
      fatherFirstName,
      fatherLastName,
      motherFirstName,
      motherLastName,
      gender,
      nationality,
      homeAddress,
      city,
      country,
      telephoneHome,
      mobile,
      hscInstitution,
      hscBoard,
      hscScore,
      sscInstitution,
      sscBoard,
      sscScore,
      currentlyPursuing,
      currentInstitution,
      overallScore,
      currentBacklogs,
      photo: photo.files[0],
      hscMarksheet: hscMarksheet.files[0],
      sscMarksheet: sscMarksheet.files[0],
      semesterMarksheet: semesterMarksheet.files[0]
    };
    // store the data to localStorage
    console.log("formData", formdata);
    localStorage.setItem("formData", JSON.stringify(formdata));
    formContainerBox.style.display = "none";
  });

  

// click on first_button hiding first_form &displaing second_form
  first_next_button.addEventListener("click", () => {
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const dob = document.getElementById("date").value.trim();
    const email = document.getElementById("email").value.trim();
    const fatherFirstName = document.getElementById("father_first_name").value.trim();
    const fatherLastName = document.getElementById("father_last_name").value.trim();
    const motherFirstName = document.getElementById("mother_first_name").value.trim();
    const motherLastName = document.getElementById("mother_last_name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const nationality = document.getElementById("Nationality").value.trim();
    const homeAddress = document.getElementById("Home").value.trim();
    const city = document.getElementById("City").value.trim();
    const country = document.getElementById("country").value.trim();
    const telephoneHome = document.getElementById("Telephone-Home").value.trim();
    const mobileNumber = document.getElementById("Mobile").value.trim();

    
    if (firstName === "" || lastName === "" || dob === ""||email==="" || validateEmail(email) || validateMobileNumber(mobileNumber) || validateMobileNumber(telephoneHome) || fatherFirstName === "" || fatherLastName === "" || motherFirstName === "" || motherLastName === "" || gender === ""
    || nationality === "" || homeAddress === "" || city === "" || country === "" || telephoneHome === "" || mobile === "" ) {
      alert("Please Fill The Form")
      return false;
    }
    

    first_form.style.display = "none";
    second_form.style.display = "block";
    
  })
  // click on first_button hiding second_form &displaing third_form
  second_next_button.addEventListener("click", () => {
    const hscInstitution = document.getElementById('hscInstitution').value.trim();
    const hscBoard = document.getElementById('hscBoard').value.trim();
    const hscScore = parseInt(document.getElementById('hscScore').value.trim());
    const sscInstitution = document.getElementById('sscInstitution').value.trim();
    const sscBoard = document.getElementById('sscBoard').value.trim();
    const sscScore = parseInt(document.getElementById('sscScore').value.trim());
    const currentlyPursuing = document.getElementById('currently-pursuing').value.trim();
    const currentInstitution = document.getElementById('currentInstitution').value.trim();
    const overallScore = parseInt(document.getElementById('overallScore').value.trim());
    const currentBacklogs = parseInt(document.getElementById('currentBacklogs').value.trim());

    if ( hscInstitution === "" || hscBoard === "" || hscScore === "" || sscInstitution === "" || sscBoard === "" || sscScore === "" || currentlyPursuing === "" || currentInstitution === ""
     || overallScore === "" || currentBacklogs === ""){
      alert("Please fill the form completely before proceeding !!");
      return false;
     }
    second_form.style.display = "none";
    third_form.style.display = "block";
    

  });
  // click on prev_button hiding second_form &displaing first_form
  prev_button1.addEventListener("click", () => {
    first_form.style.display = "block";
    second_form.style.display = "none"
  })
  // click on prev_button hiding third_form &displaing second_form
  prev_button2.addEventListener("click", () => {
    third_form.style.display = "none";
    second_form.style.display = "block"
  })

// Reload the page
  ResetBtn.addEventListener("click", () => {
    successBox.style.display = "none"
    formContainerBox.style.display = "none"
    window.location.reload()
  });
// preview the data
  PreviewBtn.addEventListener("click", () => {
    successBox.style.display = "none";

    const data = JSON.parse(localStorage.getItem("formData"));

    const previewBox = document.createElement("div");
    previewBox.classList.add("success-box1");
    previewBox.innerHTML = `
      <p>Displaying data fetched from Local Storage</p>
      <p><strong>Student Details</strong></p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Date of birth: </strong>${data.dob}</p>
      <p><strong>Email: </strong>${data.email}</p>
      <p><strong>Father's name: </strong>${data.fatherFirstName} ${data.fatherLastName}</p>
      <p><strong>Mother's name:</strong> ${data.motherFirstName} ${data.motherLastName}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Nationality:</strong> ${data.nationality}</p>
      <p><strong>Home address:</strong> ${data.homeAddress}</p>
      <p><strong>City: </strong>${data.city}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Telephone (home): </strong>${data.telephoneHome}</p>
      <p><strong>Mobile:</strong> ${data.mobile}</p>
      <p><strong>HSC Institution: </strong>${data.hscInstitution}</p>
      <p><strong>HSC Board:</strong> ${data.hscBoard}</p>
      <p><strong>HSC Score: </strong>${data.hscScore}</p>
      <p><strong>SSC Institution:</strong> ${data.sscInstitution}</p>
      <p><strong>SSC Board:</strong> ${data.sscBoard}</p>
      <p><strong>SSC Score:</strong> ${data.sscScore}</p>
      <p><strong>Currently Pursuing:</strong> ${data.currentlyPursuing}</p>
      <p><strong>Current Institution:</strong> ${data.currentInstitution}</p>
      <p><strong>Overall Score:</strong> ${data.overallScore}</p>
      <p><strong>Current Backlogs:</strong> ${data.currentBacklogs}</p>
      <p><strong>Photo:</strong> <img src=${data.photo} alt="photo"/></p>
    `;
    // append the successBox to the body of the HTML document
    document.body.appendChild(previewBox);
  });

})

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !pattern.test(email);
}



function validateMobileNumber(mobileNumber) {
  const pattern = /^[0-9]{10}$/; 
  return !pattern.test(mobileNumber);
}




