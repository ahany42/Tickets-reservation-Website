var join = document.getElementById("join");
var warningemail=document.getElementById("warningemail");
var warningphone=document.getElementById("warningphone");
var warningdate = document.getElementById("warningdate");
var warningFname=document.getElementById("warningFname");
var warningLname=document.getElementById("warningLname");
var warninggender=document.getElementById("warninggender");
var submitbutton = document.getElementById("submitform");
var body = document.body;
//const emailInput = document.getElementById("Email");
submitbutton.disabled = true;
function validation(){
    var success=true;
    var email=document.getElementById("Email").value;
    var isEmail=false;
     // Regular expression for email search pattern
     var re = /^[^\s@]+@[^\s@]+$/;
     // If email's pattern is found in variable re
     if (re.test(email)) {
         isEmail = true;
     }
    //if (email === '') {
     ///   warningemail2.style.display = "block";
        
   // }
   // else {
      //  warningemail2.style.display = "none";

    //}
      if(isEmail==false){
        warningemail.style.display = "block";
        success=false;
    }else{
        warningemail.style.display = "none";
    }
    var phone=document.getElementById("phone").value;
    var phonelength = phone.length;
    console.log(phone)
    console.log(phonelength)
    var isPhone = false;
    if(phone[0]=='0' && phone[1]=='1' && (phone[2]=='0' ||phone[2]=='1' || phone[2]=='2' || phone[2]=='3') && phonelength >0 && phonelength==11){
        isPhone = true;
    }
    if(isPhone){
        warningphone.style.display = "none";
    }else{
        warningphone.style.display = "block";
        success=false;
    }
    var date=document.getElementById("date").value;
    var dateparts= date.split("/");
    var year=parseInt(dateparts[0]);
    if(year<1930 || dateparts[0]==""){
        warningdate.style.display = "block";
        success = false;
    }else{
        warningdate.style.display = "none";
    }
    var Fname=document.getElementById("Fname");
    if(Fname.value==""){
        warningFname.style.display = "block";
        success=false;
    }else{
        warningFname.style.display = "none";
    }
    var Lname=document.getElementById("Lname");
    if(Lname.value==""){
        warningLname.style.display = "block";
        success=false;
    }else{
        warningLname.style.display = "none";
    }
    var gender=document.getElementsByName("gender");
    var isChecked = false;
    for(var arrayindex=0;gender.length>arrayindex;++arrayindex){
        if(gender[arrayindex].checked){
            isChecked = true;
        }
    }
    if(isChecked==false){
        warninggender.style.display = "block";
        success = false;
    }else{
        warninggender.style.display = "none";
    }
    if(success){
        //book.setAttribute("href","index.html");
            // Show completion message
            var completionMessage = document.getElementById("completionMessage");
            completionMessage.style.display = "flex";
            body.style.height = "100vh";
            body.style.marginTop = "0";
            // Hide the form
            var form = document.getElementById("FormId");
            form.style.display = "none";
        
        submitbutton.disabled = false;
    }else{
        submitbutton.disabled = true;
    }
   // completionMessage.classList.add('open');
}
join.addEventListener('click',validation);
console.log("hello");