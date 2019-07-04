export const methodsObject = [
  {
    name: "from()",
    id: 0,
    hint:
      "The method creates a new, shallow-copied **Array** instance from an array-like or iterable object",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 0,
        codeExample: "nope",
        answer: "nope",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 1,
        codeExample: "nope2",
        answer: "nope2",
        mark: null
      }
    ]
  },
  {
    name: "isArray()",
    id: 1,
    hint: "The method determines whether the passed value is an **Array**",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 2,
        codeExample: "nope",
        answer: "nope",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 3,
        codeExample: "nope",
        answer: "nope",
        mark: null
      }
    ]
  },
  {
    id: 2,
    name: "of()",
    hint:
      "The method creates a new **Array** instance from a variable number of arguments, regardless of number or type of the arguments. The difference between **Array.of()** and the **Array** constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7",
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 4,
        codeExample: "Array.of(13);",
        answer: "[13]",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 5,
        codeExample: "Array.of(1, 3, 5, 'milk');",
        answer: "[13,5]",
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        index: 6,
        codeExample: "Array.of(undefined);",
        answer: "[undefined]",
        mark: null
      }
    ]
  },
  {
    name: "concat()",
    id: 3,
    hint: `The method is used to merge two or more arrays. 
  This method does not change the existing arrays, 
  but instead returns a new array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 7,
        codeExample: `dsfsdfsdfsddsfsdf`,
        answer: "nope",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 8,
        codeExample: "nope",
        answer: "nope",
        mark: null
      }
    ]
  },
  {
    name: "copyWithin()",
    id: 4,
    hint: `The method shallow copies part of an array to another location in the same array and returns it without modifying its length.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 9,
        codeExample: `[1, 2, 3, 4, 5].copyWithin(0, 3);`,
        answer: "[4, 5, 3, 4, 5]",
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 10,
        codeExample: "[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);",
        answer: "[1, 2, 3, 3, 4]",
        mark: null
      }
    ]
  },
  {
    name: "entries()",
    id: 5,
    hint: `The method returns a new **Array Iterator** object that contains the key/value pairs for each index in the array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 11,
        codeExample: `let array1 = ['a', 'b', 'c']; \r\n

        let iterator1 = array1.entries();
        
        console.log(iterator1.next().value);`,
        answer: `[0,"a"]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 12,
        codeExample: `var array1 = ['a', 'b', 'c'];

        var iterator1 = array1.entries();
        
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
    hint: `The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 13,
        codeExample: `[12, 5, 8, 130, 44].every(x => x >= 12);`,
        answer: `false`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 14,
        codeExample: `[144, 36, 1, 0, 100].every(x => Number.isInteger(Math.sqrt(x)));`,
        answer: `true`,
        mark: null
      }
    ]
  },
  {
    name: "fill()",
    id: 7,
    hint: `The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 15,
        codeExample: `var array1 = [1, 2, 3, 4];
        console.log(array1.fill(5, 1));`,
        answer: `[1,5,5,5]`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 16,
        codeExample: `var array1 = [2, 9, 0, 4, 6];
        console.log(array1.fill(6));`,
        answer: `[6,6,6,6,6]`,
        mark: null
      },
      {
        taskName: "Task №3",
        id: 2,
        index: 17,
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
    hint: `The method creates a new array with all elements that pass the test implemented by the provided function.`,
    tasks: [
      {
        taskName: "Task №1",
        id: 0,
        index: 18,
        codeExample: `[12, 5, 8, 130, 44].every(x => x >= 12);`,
        answer: `false`,
        mark: null
      },
      {
        taskName: "Task №2",
        id: 1,
        index: 19,
        codeExample: `[144, 36, 1, 0, 100].every(x => Number.isInteger(Math.sqrt(x)));`,
        answer: `true`,
        mark: null
      }
    ]
  }
];
