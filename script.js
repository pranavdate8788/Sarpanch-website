const sidemenu = document.getElementsByClassName("sidemenu");
const menubars = document.getElementById("menubars");
const menuclose = document.getElementById("menuclose");

menubars.addEventListener("click", () => {
  sidemenu[0].classList.remove("hideSidemenu");
});

menuclose.addEventListener("click", () => {
  sidemenu[0].classList.add("hideSidemenu");
});
 
var counter = 1;
setInterval(function()  {
  document.getElementById('radio'+ counter).checked = true;
  counter++; 

  if(counter>4){
    counter=1
  }

}, 4500);



function SendMail() {
  event.preventDefault();
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  console.log(params);
  emailjs.sendForm("service_0lbvton", "template_2po4v2q", params).then(
    function () {
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
  alert("Thank you..! See you Soon....");
  document.getElementById("contact-form").reset();
}

