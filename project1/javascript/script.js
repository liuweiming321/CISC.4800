//javascript for CISC.3650 project1

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var location = document.getElementById('pos');
  location.innerHTML = "Your position: "+
  "<br>Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function bg_color_change(){
    var c_red = Math.floor(Math.random() *255);
    var c_green = Math.floor(Math.random() *255);
    var c_blue = Math.floor(Math.random() *255);

    document.body.style.backgroundColor = 'rgb('+c_red+' , '+c_green+' , '+c_blue+')';
}

function txt_color_change(){
    var hrs = document.getElementsByTagName("hr");
    var link = document.getElementsByClassName("to_link");
    var c_red = Math.floor(Math.random() *255);
    var c_green = Math.floor(Math.random() *255);
    var c_blue = Math.floor(Math.random() *255);
    var gradient = 'linear-gradient(to right,' +
                   'rgba('+ c_red +','+ c_green +','+ c_blue +',0),' +
                   'rgba('+ c_red +','+ c_green +','+ c_blue +',1),'+
                   'rgba('+ c_red +','+ c_green +','+ c_blue +',0))';

    document.body.style.color = 'rgb('+c_red+' , '+c_green+' , '+c_blue+')';
    for(var i = 0; i < hrs.length; i++){
        hrs[i].style.backgroundImage = gradient;
    }
    for(var i = 0; i < link.length; i++){
        link[i].style.color = 'rgb('+c_red+' , '+c_green+' , '+c_blue+')';
        link[i].style.borderColor = 'rgb('+c_red+' , '+c_green+' , '+c_blue+')';
    }
}

function autoTab(from, size, to){
    var field = document.getElementById(from);
    if (field.value.length == size) {
		document.getElementById(to).focus();
	}
}

function checkForMatch (first, second, str) {
    //check if the password match
    var before = document.getElementById(first);
    var check =  document.getElementById(second);
    var string = document.getElementById(str);
    if(check.value == before.value){
       check.classList.remove('invalid');
       check.classList.add('valid');
       string.innerHTML = "Matched!";
    }else{
       check.classList.remove('valid');
       check.classList.add('invalid');
       string.innerHTML = "Doesn't match with previous email";
    }
}

function autoUpper(src){
    var source = document.getElementById(src);
    var start = source.selectionStart;
    var end = source.selectionEnd;
    source.value = source.value.toUpperCase();
    source.setSelectionRange(start, end);

}

function nameCheck (src, err){
    var unacceptInput = /[~!@#$%^&*()_+=\\|/.,<>;:\- 0-9]/g;
    var userInput = document.getElementById(src);
    var errMsg = document.getElementById(err);
    if(userInput.value.match(unacceptInput)){
        userInput.classList.remove('valid');
        userInput.classList.add('invalid');
        errMsg.innerHTML = "Letters Only";
    }else{
        userInput.classList.remove('invalid');
        userInput.classList.add('valid');
        errMsg.innerHTML = "";
    }
}

function checkForm(){
    var inputList = document.forms['register'].getElementsByTagName('input');
    var selectList = document.forms['register'].getElementsByTagName('select');

    //checking all the input tag under register form
    for(var i = 0; i < inputList.length; i++){
            if(inputList[i].value == "" && inputList[i].required){
                alert("check to make sure all '*' field are filled");
                inputList[i].focus();
                return false;
            }
    }

    //checking all the select tag under register form
    for(var i = 0; i < selectList.length; i++){
            if(selectList[i].value == "" && selectList[i].required){
                alert("check to make sure all '*' field are filled");
                selectList[i].focus();
                return false;
            }
    }
    //checked every section and store it to session storage
    storeForm(inputList, selectList);
    return true;
}

function storeForm(inputList, selectList){
    for(var i = 0; i < inputList.length; i++){
            if(inputList[i].value != "" && inputList[i].name != ""){
                storeValue(inputList[i].name, inputList[i].value);
            }
    }
    for(var i = 0; i < selectList.length; i++){
            if(selectList[i].value != "" && selectList[i].name != ""){
                storeValue(selectList[i].name, selectList[i].value);
            }
    }
    alert("Form submitted");
}

function printForm(){
    var keys = ['First Name', 'Last Name', 'Address', 'City', 'State', 'Zip Code', 'Phone Number', 'Email Address',
                'Job Title', 'Start Date'];
    var newLine = "\r\n"
    var string = '';

    for(var i = 0; i < keys.length; i++){
        string += keys[i] + ": " + retrieveValue(keys[i]) + newLine;
    }
    alert("Your information(only the required part are shown): " + newLine + string);
}

function hoverFile(e){
    e.preventDefault();
    e.stopPropagation();
}

function uploadFile(e){
    e.preventDefault();
    e.stopPropagation();
    var fileName = e.dataTransfer.files[0];
    fileUploaded(fileName);
}

function fileUploaded(fileName){
    var nameZone = document.getElementById('file_name');
    nameZone.innerHTML= fileName.name;
}

function storeValue(name, value){
    window.sessionStorage.setItem(name, value);
}

function retrieveValue(name){
    return window.sessionStorage.getItem(name);
}