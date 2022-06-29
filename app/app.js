// Assignment #1:

// string - true
// number - true
// boolean - true/false as defined
// NaN - false
// null - false
// undefined - false
// blank string - false
   

for (var x = 1; x <= 100; x++) {
  if (x % 7 === 0 || x / 10 === 7 || x % 10 === 7) {
    console.log(x+ " Boom");
    y++;
    if(y===2){
      console.log(x + " Double boom");
    }
  }else if(i=x.toString().includes('7')){
    console.log(x + " Boom");
  i++;
   if(i===2){
    console.log(x + ' Double boom');
   }
}else {
    console.log(x);
   
   y = 0;
    }
}