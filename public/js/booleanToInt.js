/**
 Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
 В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
 Т.е. пример


booleanToInt('qwerty') // 'qwerty'
booleanToInt(1) // 1
booleanToInt(false) // 0
booleanToInt(true) // 1
booleanToInt([1, 'qwerty', false]) // [1, 'qwerty', 0]
booleanToInt([1, 'qwerty', { a: true }]) // [1, 'qwerty', { a: 1 }]
booleanToInt({ a: { b: true }, c: false, d: 'qwerty' }) // { a: { b: 1 }, c: 0, d: 'qwerty' }
booleanToInt({
  date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: false,
        date2_2: 'str1',
      },
      {
        date2_3: true,
        date2_4: 'str2',
      },
      {
        date2_5: false,
        date2_6: 'str1',
      },
    ],
    date1_3: false,
    date1_4: {
      date3_1: true,
      date3_2: false,
      date3_3: 'str1',
      date3_4: 123,
    },
    date1_5: 'true',
  }
})

 date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: 0,
        date2_2: 'str1',
      },
      {
        date2_3: 1,
        date2_4: 'str2',
      },
      {
        date2_5: 0,
        date2_6: 'str1',
      },
    ],
    date1_3: 0,
    date1_4: {
      date3_1: 1,
      date3_2: 0,
      date3_3: 'str1',
      date3_4: 123,
    },
    date1_5: 'true',
  }
*/

const type = (data) => {
  if (Array.isArray(data)) {
    return 'array'
  } else if (typeof data === 'object' && data !== null) {
    return 'object'
  } else {
    return typeof data
  }
}

const booleanToInt = (data) => {
  let new_data
  switch (type(data)) {
    case 'boolean':
      new_data = +data
      break
    case 'array':
      new_data = data.map(d => booleanToInt(d))
      break
    case 'object':
      for (const prop in data) {
        data[prop] = booleanToInt(data[prop])
        new_data = data
      }
      break
    default:
      return data
  }
  return new_data
}

const a1 = booleanToInt('qwerty') // 'qwerty'
const a2 = booleanToInt(1) // 1
const a3 = booleanToInt(false) // 0
const a4 = booleanToInt(true) // 1
const a5 = booleanToInt([1, 'qwerty', false]) // [1, 'qwerty', 0]
const a6 = booleanToInt([1, 'qwerty', { a: true }]) // [1, 'qwerty', { a: 1 }]
const a7 = booleanToInt({
  date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: false,
        date2_2: 'str1',
      },
      {
        date2_3: true,
        date2_4: 'str2',
      },
      {
        date2_5: false,
        date2_6: 'str1',
      },
    ],
    date1_3: false,
    date1_4: {
      date3_1: true,
      date3_2: false,
      date3_3: 'str1',
      date3_4: 123,
    },
    date1_5: 'true',
  }
})

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)
console.log(a7.date1)
