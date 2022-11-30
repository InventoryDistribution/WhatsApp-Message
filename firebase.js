const firebaseConfig = {
    apiKey: "AIzaSyDBQM5Y540pT4KASoenhKGaBhcYLsNZvyY",
    authDomain: "whatsapp-message-64701.firebaseapp.com",
    databaseURL: "https://whatsapp-message-64701-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whatsapp-message-64701",
    storageBucket: "whatsapp-message-64701.appspot.com",
    messagingSenderId: "674355083869",
    appId: "1:674355083869:web:514717f8b897ce85a76bb4",
    measurementId: "G-ECY91JF6MH"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };