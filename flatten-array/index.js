//Array.flat([1, [2, 3]]) => [1, 2, 3]

function flatOneLevel(array) {
  const result = [];

  array.forEach(item => {
    if (Array.isArray(item)) {
      // Concatenate one level deep
      result.push(...item);
    } else {
      // Push single item
      result.push(item);
    }
  });

  return result;
}

const arr = [1, [2, [3, 4]]];
console.log(flatOneLevel(arr)); // Output: [1, 2, [3, 4]]

  
