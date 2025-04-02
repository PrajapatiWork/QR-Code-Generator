let qrImgDiv = document.querySelector(".codeContainer");
let qrImg = document.getElementById("qrImg");
let getText = document.getElementById("userText");
let btnSubmit = document.querySelector(".btnSubmit");

//To generate QR code
function generateCode() {
  qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(getText.value);
  $(".msgText").hide();  
};

btnSubmit.addEventListener("click", () => {
  if (getText.value.trim() === "") {   
    $(".msgText").text("Please enter text or url").css("color","red");      
  } else {
    generateCode();
  }
});

// Clear input and QR code when click on inputbox
$("#userText").on("click", function () {
  this.value = "";
  qrImg.src = ""; 
});
