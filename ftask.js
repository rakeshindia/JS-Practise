var Register = Register || {};

(function (Register) {
	   
    var name = document.getElementById('txtUserName');
    var pass = document.getElementById('txtPassword');
	var result = document.getElementById('result');
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
			result.style.display="block";
            result.innerHTML = "user name :" + userName + "<br>" + "password" + password;
        }
	}
	function clearValues(){
		name.value = '';
        pass.value = '';
		result.style.display="none"
	}
    function validate() {
        var username = name.value;
        var password = pass.value;
        if (!username) {
            name.style.borderColor = 'red';
            return false;
        }
        else if (!password) {
            pass.style.borderColor = 'red';
            return false;
        }
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


