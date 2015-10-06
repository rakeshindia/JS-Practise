var M = (function(){ 
var x = 10;

return{
getx:function(){
return x;
},
x1:x,
add:function(x){
x+=1;
return x;
}
}


})();
var ex=(function(M){
var x=12;
return{
z:M.add(x)

}


})(M);