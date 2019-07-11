export const methodsObject = [
  {
    name: "from()",
    id: 0,
    arrayMethodType: "Array.",
    hint:
      "The method creates a new, shallow-copied **Array** instance from an array-like or iterable object",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: "console.log(Array.from([1, 2, 3], x => x * x));",
        answer: "[1, 4, 9]",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);`,
        answer: `["foo", "bar", "baz"]`,
        mark: null
      }
    ]
  },
  {
    name: "isArray()",
    id: 1,
    arrayMethodType: "Array.",
    hint: "The method determines whether the passed value is an **Array**",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: "Array.isArray([10, 'duck', 3, 9]);",
        answer: "true",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: "Array.isArray(new Array());",
        answer: "true",
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: "Array.isArray(null);",
        answer: "false",
        mark: null
      },
      {
        taskName: "Task №4",
        id: 3,
        codeExample: "Array.isArray('Array');",
        answer: "false",
        mark: null
      }
    ]
  },
  {
    id: 2,
    name: "of()",
    arrayMethodType: "Array.",
    hint:
      "The method creates a new **Array** instance from a variable number of arguments, regardless of number or type of the arguments. The difference between **Array.of()** and the **Array** constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: "Array.of(13);",
        answer: "[13]",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: "Array.of(1, 3, 5, 'milk');",
        answer: "[13, 5]",
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: "Array.of(undefined);",
        answer: "[undefined]",
        mark: null
      }
    ]
  },
  {
    name: "concat()",
    id: 3,
    arrayMethodType: "Array.prototype.",
    hint: `The method is used to merge two or more arrays. 
  This method does not change the existing arrays, 
  but instead returns a new array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
console.log(array1.concat(array2));`,
        answer: `["a", "b", "c", "d", "e", "f"]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);`,
        answer: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); `,
        answer: "['a', 'b', 'c', 1, 2, 3]",
        mark: null
      },
      {
        taskName: "Task №4",
        id: 3,
        codeExample: `const num1 = [[1]];
const num2 = [2, [3]];
const numbers = num1.concat(num2);
console.log(numbers); `,
        answer: "[[1], 2, [3]]",
        mark: null
      }
    ]
  },
  {
    name: "copyWithin()",
    id: 4,
    arrayMethodType: "Array.prototype.",
    hint: `The method shallow copies part of an array to another location in the same array and returns it without modifying its length.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `[1, 2, 3, 4, 5].copyWithin(0, 3);`,
        answer: "[4, 5, 3, 4, 5]",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: "[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);",
        answer: "[1, 2, 3, 3, 4]",
        mark: null
      }
    ]
  },
  {
    name: "entries()",
    id: 5,
    arrayMethodType: "Array.prototype.",
    hint: `The method returns a new **Array Iterator** object that contains the key/value pairs for 
  he array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `let array1 = ['a', 'b', 'c']; 
let iterator1 = array1.entries();

console.log(iterator1.next().value);`,

        answer: `[0, "a"]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `let array1 = ['a', 'b', 'c'];
let iterator1 = array1.entries();
iterator1.next().done;
console.log(iterator1.next().value);`,
        answer: `[1, "b"]`,
        mark: null
      }
    ]
  },
  {
    name: "every()",
    id: 6,
    arrayMethodType: "Array.prototype.",
    hint: `The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `[12, 5, 8, 130, 44].every(x => x >= 12);`,
        answer: `false`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `[144, 36, 1, 0, 100].every(x => Number.isInteger(Math.sqrt(x)));`,
        answer: `true`,
        mark: null
      }
    ]
  },
  {
    name: "fill()",
    id: 7,
    arrayMethodType: "Array.prototype.",
    hint: `The fill() method fills (modifies) all the elements of an array from a s
  ault zero) to an
  ault array length) with a static value. It returns the modified array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `var array1 = [1, 2, 3, 4];
console.log(array1.fill(5, 1));`,
        answer: `[1, 5, 5, 5]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `var array1 = [2, 9, 0, 4, 6];
console.log(array1.fill(6));`,
        answer: `[6, 6, 6, 6, 6]`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `var array1 = [0, 8, -2, 1.1, 7];
console.log(array1.fill(0, 6, 9));`,
        answer: `[0, 8, -2, 1.1, 7]`,
        mark: null
      }
    ]
  },
  {
    name: "filter()",
    id: 8,
    arrayMethodType: "Array.prototype.",
    hint: `The method creates a new array with all elements that pass the test implemented by the provided function.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 5);
console.log(result);`,
        answer: `["exuberant", "destruction", "present"]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const filterItems = (arr, query) => {
    return arr.filter(el => el.indexOf(query) !== -1);
};
console.log(filterItems(fruits, 'ap'));`,
        answer: `["apple", "grapes"]`,
        mark: null
      }
    ]
  },
  {
    name: "find()",
    id: 9,
    arrayMethodType: "Array.prototype.",
    hint: `The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise **undefined** is returned.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const array1 = [3, 45, -8, 30, 24];
let found = array1.find(element => element > 10);
console.log(found);`,
        answer: `45`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const isPrime = (element, index, array) => {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}
console.log([35, 10, 8, 12, 5, 17, 35].find(isPrime));`,
        answer: `5`,
        mark: null
      }
    ]
  },
  {
    name: "findIndex()",
    id: 10,
    arrayMethodType: "Array.prototype.",
    hint: `The findIndex() method returns the index of the first element 
    in the array that satisfies the provided testing function. 
    Otherwise, it returns -1, indicating that no element passed the test.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const array1 = [-2, 12, 8.5, 130/90, 46%32];
const isLargeNumber = element => element > 13;

console.log(array1.findIndex(isLargeNumber));`,
        answer: `4`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
        
console.log(index);`,
        answer: `3`,
        mark: null
      }
    ]
  },
  {
    name: "flat()",
    id: 11,
    arrayMethodType: "Array.prototype.",
    hint: `The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const arr1 = [1, 2, [3, 4]];

console.log(arr1.flat());`,
        answer: `[1, 2, 3, 4]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
        
console.log(index);`,
        answer: `3`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `const arr4 = [1, 2, , 4, 5];

console.log(arr4.flat());`,
        answer: `[1, 2, 4, 5]`,
        mark: null
      }
    ]
  },
  {
    name: "flatMap()",
    id: 12,
    arrayMethodType: "Array.prototype.",
    hint: `The flatMap() method first maps each element using a mapping function, 
    then flattens the result into a new array. 
    It is identical to a **map()** followed by a **flat()** of depth 1, 
    but flatMap() is often quite useful, as merging both into one method is slightly more efficient.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `let arr1 = [1, 2, 3, 4];

console.log(arr1.flatMap(x => [x * 2]));`,
        answer: `[2, 4, 6, 8]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `let arr1 = [1, 2, 3, 4];

console.log(arr1.flatMap(x => [[x * 2]]));`,
        answer: `[[2], [4], [6], [8]]`,
        mark: null
      }
    ]
  },
  {
    name: "forEach()",
    id: 13,
    arrayMethodType: "Array.prototype.",
    hint: `The forEach() method executes a provided function once for each array element.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const array1 = ['a', 'b', 'c'];
const array2 = []
        
array1.forEach(element => {
    array2.push(element+1);
});

console.log(array2)`,
        answer: `["a1", "b1", "c1"]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const array1 = [2*2, 7, 32/2];
const array2 = []
        
array1.forEach(element => {
    if(Number.isInteger(Math.sqrt(element))) array2.push(element+2);
});

console.log(array2);`,
        answer: `[6,18]`,
        mark: null
      }
    ]
  },
  {
    name: "includes()",
    id: 14,
    arrayMethodType: "Array.prototype.",
    hint: `The includes() method determines whether an array includes a certain value among its entries, 
    returning true or false as appropriate.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const pets = ['sweet', 'hot', 'dog'];
        
console.log(pets.includes('hot'));`,
        answer: `true`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const pets = ['sweet', 'hot', 'dog'];
        
console.log(pets.includes('og'));`,
        answer: `false`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `const pets = ['sweet', 'hot', 'dog'];
        
console.log(pets.includes('sweet', 'dog'));`,
        answer: `true`,
        mark: null
      },
      {
        taskName: "Task №4",
        id: 3,
        codeExample: `const pets = ['sweet', 'hot', 'dog'];
        
console.log(pets.includes('dog', -1));`,
        answer: `true`,
        mark: null
      },
      {
        taskName: "Task №5",
        id: 4,
        codeExample: `const pets = ['sweet', 'hot', 'dog'];
        
console.log(pets.includes('dog', -3));`,
        answer: `false`,
        mark: null
      },
      {
        taskName: "Task №6",
        id: 5,
        codeExample: `const pets = ['sweet', 'hot', 'dog'];
        
console.log(pets.includes('dog', -4));`,
        answer: `true`,
        mark: null
      }
    ]
  },
  {
    name: "indexOf()",
    id: 15,
    arrayMethodType: "Array.prototype.",
    hint: `The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const plants = ['delphinium', 'bamboo', 'cherry blossom', 'bamboo', 'mushroom'];

console.log(plants.indexOf('bamboo'));`,
        answer: `1`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const plants = ['delphinium', 'bamboo', 'cherry blossom', 'bamboo', 'mushroom'];

console.log(plants.indexOf('bamboo',2));`,
        answer: `3`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `const plants = ['delphinium', 'bamboo', 'cherry blossom', 'bamboo', 'mushroom'];

console.log(plants.indexOf('moss'));`,
        answer: `-1`,
        mark: null
      }
    ]
  },
  {
    name: "join()",
    id: 16,
    arrayMethodType: "Array.prototype.",
    hint: `The join() method creates and returns a new string by concatenating all of the elements in an array, 
    separated by commas or a specified separator string. 
    If the array has only one item, then that item will be returned without using the separator.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const elements = ['Mother', 'Father', 'Sister', 'Brother'];

console.log(elements.join());`,
        answer: `"Mother,Father,Sister,Brother"`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const elements = ['Mother', 'Father', 'Sister', 'Brother'];

console.log(elements.join(''));`,
        answer: `"MotherFatherSisterBrother"`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `const elements = ['Mother', 'Father', 'Sister', 'Brother'];

console.log(elements.join('-'));`,
        answer: `"Mother-Father-Sister-Brother"`,
        mark: null
      }
    ]
  },
  {
    name: "keys()",
    id: 17,
    arrayMethodType: "Array.prototype.",
    hint: `The keys() method returns a new **Array Iterator** object that contains the keys for each index in the array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const array1 = ['a', 'b', 'c'];
let iterator = array1.keys(); 
          
for (let key of iterator) {
    console.log(key);
}`,
        answer: `0 1 2`,
        mark: null
      }
    ]
  },
  {
    name: "lastIndexOf()",
    id: 18,
    arrayMethodType: "Array.prototype.",
    hint: `The lastIndexOf() method returns the last index at which a given element can be found in the array, 
    or -1 if it is not present. 
    The array is searched backwards, starting at **fromIndex**.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));`,
        answer: `3`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo', -2));`,
        answer: `0`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo', -1));`,
        answer: `3`,
        mark: null
      }
    ]
  },
  {
    name: "map()",
    id: 19,
    arrayMethodType: "Array.prototype.",
    hint: `The map() method creates a new array with the results of calling 
  a provided function on every element in the calling array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const array = [1, 4, 9, 16];

console.log(array.map(x => x * 3));`,
        answer: `[3, 12, 27, 48]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const numbers = [1, 4, 9];
const roots = numbers.map(num => Math.sqrt(num));
        
console.log(roots)`,
        answer: `[1, 2, 3]`,
        mark: null
      }
    ]
  },
  {
    name: "pop()",
    id: 20,
    arrayMethodType: "Array.prototype.",
    hint: `The pop() method removes the last element from an array and returns that element. 
    This method changes the length of the array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        codeExample: `const names = ['Alice', 'Bob', 'Daphne', 'John', 'Lisa'];

console.log(names.pop());`,
        answer: `"Lisa"`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const names = ['Alice', 'Bob', 'Daphne', 'John', 'Lisa'];;

names.pop()
console.log(names);`,
        answer: `["Alice", "Bob", "Daphne", "John"]`,
        mark: null
      }
    ]
  }
];
