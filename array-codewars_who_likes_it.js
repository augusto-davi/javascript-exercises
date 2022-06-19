/* 
You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people 
that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function likes(names) {
  
  const quantityOfNames = {
    0: function(){
      return 'no one likes this'
    },
    1: function(name){
      return `${name} likes this`
    },
    2: function(name){
      return `${name[0]} and ${name[1]} like this`
    },
    3: function(name){
      return `${name[0]}, ${name[1]} and ${name[2]} like this`
    },
    4: function(name){
      return `${name[0]}, ${name[1]} and ${name.length - 2} others like this`
    },
  }
  
  if(names.length > 4)
    return quantityOfNames[4](names)
  
  return quantityOfNames[names.length](names)
  
}
