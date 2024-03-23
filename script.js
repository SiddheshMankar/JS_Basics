var num=Math.floor(Math.random()*10);
console.log(num);
var guess=prompt('guess the nu,ber btw 1 to 10');
if(guess==num)
{
  console.log("match")
}
else{
  console.log("not matched");
}