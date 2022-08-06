/*
Prints the length of each path from the list of child nodes
Used for svg animations 
*/
export function getPathLength(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(`Letter ${i} is ${list[i].getTotalLength()}`);
  }
}
