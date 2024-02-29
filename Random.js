function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.addEventListener('keydown',function(e){
  if(e.key == 'Enter'){
    console.log(Random(1,100))
  }
})
