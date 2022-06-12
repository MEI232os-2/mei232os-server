 if(version == '1.3.3'){
  
}else{
  swal('Updated', 'Updated to 1.3.3', "success")
  var x = document.createElement('script');
x.src = 'server.js';
document.body.appendChild(x);
  version = '1.3.3'
}
//alert('Hello')
console.log('Pinged Server')
addResult('Pinged MEI232os server', '')
