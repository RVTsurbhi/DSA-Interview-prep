/******** PROBLEM STATEMENT **********/
/* problem -1 -> find max element in array and inc it by one

 Input: digits = [1,2,3]
 Output: [1,2,4]

 Input: digits = [9,3]
 Output: [1,0,4]

*/

function findMaxElement(arr) {
  let maxNum = arr[0],
    ans = [],
    idx = 0,
    n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      idx = i;
    }
    if (arr[i] == 9) {
      ans = [1, 0];
    } else {
      ans.push(arr[i]);
    }
  }
  if (maxNum != 9) {
    ans[idx] = maxNum + 1;
  }

  console.log("ans", ans);
  return ans;
}

let arr = [9, 3]; //[1,2,3]
findMaxElement(arr);

/* Inteview question 2 -> uniq char substr with max len, return the len
 Input: s = "abcabcbb"
 Output: 3 

*/

function solution1(s) {
  let i = 0,
    j = 0,
    n = s.length,
    maxLen = 0;
  let hash = new Map(),
    k = 0;

  while (j < n) {
    if (hash.has(s[j])) {
      hash.get(s[j]).val++;
    } else {
      hash.set(s[j], { val: 1 });
    }

    k = hash.size;

    if (k == j - i + 1) {
      //can ans
      maxLen = Math.max(maxLen, j - i + 1);
    } else if (k < j - i + 1) {
      while (k < j - i + 1) {
        hash.get(s[i]).val--;
        if (hash.get(s[i]).val == 0) {
          k--;
          hash.delete(s[i]);
        }
        i++;
      }
    }
    j++;
  }
  console.log("maxLen", maxLen);
  return maxLen;
}

let str = "abcabcebb";
solution1(str);

// function optimesedSolution(s) {
//   let i = 0,
//     j = 0,
//     n = s.length,
//     maxLen = 0;
//   let hash = new Map();

//   while (j < n) {
//     if (!hash.has(s[j])) {
//       hash.set(s[j], 1);
//     } else {
//       hash.delete(s[j]);
//       i++;
//     }

//     if (hash.size == j - i + 1) {
//       //can ans
//       maxLen = Math.max(maxLen, j - i + 1);
//     }
//     j++;
//   }

//   console.log("optimzed-maxLen", maxLen);
//   return maxLen;
// }

// optimesedSolution(str);
