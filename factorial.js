function factorial(number) {
  let ansewer = 1;
  for (let n = number; n > 0; n -= 1) {
    ansewer *= n;
   }
   console.log(ansewer)
   return ansewer;
   
}
factorial(4)