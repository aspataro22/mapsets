new Set([1,1,2,2,3,4]); // prints {1,2,3,4} does not duplicate numbers

[...new Set("referee")].join(""); // prints "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//0: {Array(3) => true}
 // 1: {Array(3) => false}


 hasDuplicate([1,3,2,1]) // true
 hasDuplicate([1,5,-1,4]) // false
 const hasDuplicate = nums => new Set(nums).size !== nums.length





 vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    const vowels = "aeiouAEIOU";
    let vowelMap = new Map();
    let vowelPositions = 1;

    for (let char of str) {
        if (vowels.includes(char)) {
            if (vowelMap.has(vowelPositions)) {
                vowelMap.set(vowelPositions, vowelMap.get(vowelPositions) + 1);
            } else {
                vowelMap.set(vowelPositions, 1);
            }
        }
        vowelPositions++;
    }

    return vowelMap;
}

