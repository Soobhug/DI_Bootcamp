const sentence="The movie is not that bad, I like it."
console.log(sentence)

const wordNot=sentence.indexOf("not");
const wordBad=sentence.indexOf("bad");

 console.log(wordNot); 
console.log(wordBad);

 if (wordBad>wordNot){  
  const substr=sentence.substring(wordNot,(wordBad+wordNot))
  console.log()

 }









