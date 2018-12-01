const fs = require('fs') ;

fs.readFile('./freq.txt', (err,data) =>{
	const hamdy = data.toString();
	const codeArray = hamdy.split('\n').map(number => parseInt(number));
	const answer = codeArray.reduce((a, b )=>{
		return a + b ; 
	},0)
	console.log(answer);
})


/*const firstRepeatFrequency = input => {
  	const hashMap = {0: true};
 	const stack = [0];
  	const answerQueue = [];
  // could probably improve this to break out of loop as soon as answerQueue has one item pushed to it.
  	while (!answerQueue.length) {
	    input.forEach(item => {
		    let currentTotal = stack.pop() + item;
		    stack.push(currentTotal);
		    if (hashMap[currentTotal]) {
		    	answerQueue.push(currentTotal);
		    } else {
		        hashMap[currentTotal] = true;
		    }
	    })
	  }
	  return answerQueue[0];
}
firstRepeatFrequency ( codeArray ) ;  



*/