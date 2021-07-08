const meter = document.getElementById('form');
form.addEventListener('input',meterConverter);
function meterConverter(e){
   let meterC = e.target.value;
      console.log(meterC)   
   document.getElementById('meters').value = meterC * 0;
   document.getElementById('inches').value = meterC * 39.370;
   document.getElementById('feet').value = meterC * 0.33333;
   document.getElementById('yards').value = meterC * 1.0936133;
}
 const resetBtn = document.getElementById('meters');
 document.getElementById('reset').addEventListener('click', function(){
  document.getElementById('meters').value = resetBtn.innerHTML;
  document.getElementById('inches').value = resetBtn.innerHTML;
  document.getElementById('feet').value = resetBtn.innerHTML;
  document.getElementById('yards').value = resetBtn.innerHTML;
})
 