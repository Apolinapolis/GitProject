for (let i = []; i.length < 3; i.push(1)) {
  setTimeout( 
    (function(copy) {
      return function() {
        console.log(copy);
      }
    })([...i]),i.length * 1000
  )
}