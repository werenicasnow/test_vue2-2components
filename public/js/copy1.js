/**
 Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях.
 Изменение этих ключей в новом объекте не должны менять значения в старом.
 Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
 Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может отсутствовать в объекте, например:

 a = {
b: null
}

 a.b.c

 Пример
 const a = { b: { c: 3, d: [3, 4] }, a: 12 }
 const b = copy(a, ['a.a', 'b.c', 'b.d.0', 'b.c.e'])
 b = { b: { c: 3, d: [3] } }
 */

const copy = (obj, paths) => {
  const copyProp = (obj, paths) => {
    const [prop, ...rest] = paths.split('.')

    return Object.assign({}, ...Object
      .entries(obj)
      .filter(([key]) => key.includes(prop))
      .map(([k, v]) => {
        if (!rest.length) {
          return {[k]: v}
        }
        let props = copyProp(v, rest.join('.'))
        if (props && Object.keys(props).length) {
          return {[k]: Array.isArray(v) ? Object.values(props ?? {}) : props}
        }
      })
    )
  }

  let newObj = {}
  paths.forEach(path => {
    Object.assign(newObj, copyProp(obj, path))
  })
  return newObj
}

const a = { b: { c: 3, d: [3,4], x: 5 }, a: 12, i: { h: 1, k: 2 } }

const b = copy(a, ['a.a', 'b.c', 'i.k'])
console.log('Ответ: ', b)
