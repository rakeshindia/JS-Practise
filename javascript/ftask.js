var Register = Register || {};

(function (Register) {
	   
    var name = document.getElementById('txtUserName');
    var pass = document.getElementById('txtPassword');
	var result = document.getElementById('result');
	var align=document.getElementsByClassName('alignLeft');
	//var elems = document.getElementsByClassName('myElement');
for(var i = 0; i < align.length; i++) {
    align[i].style.cssFloat = 'left';
}
	var clearEle=document.getElementsByClassName('clear');
	//var elems = document.getElementsByClassName('myElement');
for(var i = 0; i < clearEle.length; i++) {
    clearEle[i].style.clear = 'both';
}
	//align.style.cssFloat="left";
	//var emailVal=document.getElementById('txtemail');
	var rPanel=document.getElementById('registrationPanel');
	rPanel.style.border = "2px";
	rPanel.style.borderStyle = "solid"
    rPanel.style.borderColor = "#ccc";
    document.getElementById('btnSubmit').addEventListener('click',resultData)
	
    document.getElementById('btnReset').addEventListener('click', clearValues)
	
	function resultData(){
		if (validate()) {
            var userName = document.getElementById('txtUserName').value;
            var password = document.getElementById('txtPassword').value;
			//var emailVal = document.getElementById('txtemail').value;
			result.style.display="block";
            result.innerHTML = "user name is  :" + userName + "<br>" + "password is  :" + password;
        }
	}
	function clearValues(){
		name.value = '';
        pass.value = '';
		//emailVal.value='';
		result.style.display="none"
	}
    function validate() {
        var username = name.value;
        var password = pass.value;
		//var emailVal = emailVal;
        if (!username) {
            name.style.borderColor = 'red';
            return false;
        }
        else if (!password) {
            pass.style.borderColor = 'red';
            return false;
        }
//		 else if (!emailVal) {
//            emailVal.style.borderColor = 'red';
//            return false;
//        }
        else {
            name.style.borderColor = '';
            pass.style.borderColor = '';
            return true;
        }
    }
})();
function theme() {
    
	result.style.border = "2px";
	result.style.borderStyle = "solid"
    result.style.borderColor = "blue";
	result.style.display="none"
  
}


