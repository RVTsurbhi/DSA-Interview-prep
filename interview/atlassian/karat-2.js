/*
You are running a classroom and suspect that some of your students are passing around the answer to a multiple-choice question disguised as a random note.

Your task is to write a function that, given a list of words and a note, finds and returns the word in the list that is scrambled inside the note, if any exists. If none exist, it returns the result "-" as a string. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:  
words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"]
note1 = "ctay"
find(words, note1) => "cat"   (the letters do not have to be in order)  
  
note2 = "bcanihjsrrrferet"
find(words, note2) => "cat"   (the letters do not have to be together)  
  
note3 = "tbaykkjlga"
find(words, note3) => "-"     (the letters cannot be reused)  
  
note4 = "bbbblkkjbaby"
find(words, note4) => "baby"    
  
note5 = "dad"
find(words, note5) => "-"    
  
note6 = "breadmaking"
find(words, note6) => "bird"    

note7 = "dadaa"
find(words, note7) => "dada"    

All Test Cases:
find(words, note1) -> "cat"
find(words, note2) -> "cat"
find(words, note3) -> "-"
find(words, note4) -> "baby"
find(words, note5) -> "-"
find(words, note6) -> "bird"
find(words, note7) -> "dada"
  
Complexity analysis variables:  
  
W = number of words in `words`  
S = maximal length of each word or of the note  
*/

"use strict";

const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"];
const note1 = "ctay"; //cat
const note2 = "bcanihjsrrrferet"; //cat
const note3 = "tbaykkjlga"; //"-"
const note4 = "bbbblkkjbaby"; //baby
const note5 = "dad"; //"-"
const note6 = "breadmaking"; //bird
const note7 = "dadaa"; //dada

function findWord(words, note1) {
  let hash = {};
  let found = false;
  for (let i = 0; i < note1.length; i++) {
    let letter = note1[i];
    if (hash[letter]) {
      hash[letter]++;
    } else {
      hash[letter] = 1;
    }
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let freq = Object.assign({}, hash);
    // let freq2 = new Map()

    //check freq of word
    for (let j = 0; j < word.length; j++) {
      let key = word[j];
      if (!freq[key]) {
        found = false;
        break;
      } else {
        freq[key]--;
        found = true;
      }
    }
    if (found) {

      return word;
    }
  }

  //  console.log("empty", word)
  return "-";
}
//["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"]

console.log(findWord(words, note1));
console.log(findWord(words, note2));
console.log(findWord(words, note3));
console.log(findWord(words, note4));
console.log(findWord(words, note5));
console.log(findWord(words, note6));
console.log(findWord(words, note7));
