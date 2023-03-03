let age=prompt('how old are you');
age=parseInt(age);
console.log(typeof(age))
if(age>18){alert('go on')

}
else if(age<18){
    alert('no no no')
}
else if (age===18)
{
    alert('congratulated')

}
else if (!age)
{
    alert('see you')

}
else
{ alert('please enter a number')

}

let person={
    firstname:'x',
    lastname:'y',
    age:'50',
    eyecolor:'blue',

};

personage=undefined
delete person.age

// console.log(person) {firstname:'x, lastname:'y', eyecolor:'blue',age:'50}
console.log(person.firstname)
console.log