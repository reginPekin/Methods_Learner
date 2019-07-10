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
        answer: "[1,4,9]",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);`,
        answer: `["foo","bar","baz"]`,
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
        answer: "[13,5]",
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
        answer: `["a","b","c","d","e","f"]`,
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
        answer: "[1,2,3,4,5,6,7,8,9]",
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); `,
        answer: "['a','b','c',1,2,3]",
        mark: null
      },
      {
        taskName: "Task №4",
        id: 3,
        codeExample: `const num1 = [[1]];
const num2 = [2, [3]];
const numbers = num1.concat(num2);
console.log(numbers); `,
        answer: "[[1],2,[3]]",
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
        codeExample: `let array1 = ['a', 'b', 'c']; \nlet iterator1 = array1.entries();\nconsole.log(iterator1.next().value);`,

        answer: `[0,"a"]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `let array1 = ['a', 'b', 'c'];
let iterator1 = array1.entries();
iterator1.next().done;
console.log(iterator1.next().value);`,
        answer: `[1,"b"]`,
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
        answer: `[1,5,5,5]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        codeExample: `var array1 = [2, 9, 0, 4, 6];
console.log(array1.fill(6));`,
        answer: `[6,6,6,6,6]`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        codeExample: `var array1 = [0, 8, -2, 1.1, 7];
console.log(array1.fill(0, 6, 9));`,
        answer: `[0,8,-2,1.1,7]`,
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
        answer: `["exuberant","destruction","present"]`,
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
        answer: `["apple","grapes"]`,
        mark: null
      }
    ]
  }
];
