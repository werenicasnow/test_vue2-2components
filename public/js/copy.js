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

/*const copy = (obj, paths) => {
  let obj_item = {}
  let obj_new = {}
  paths.forEach(path => {
    const props = path.split('.')
    let item = { ...obj }

    let obj_checking_prop_exist = obj
    let is_prop_exist = false
    props.forEach((prop, idx) => {
      if (obj_checking_prop_exist) {
        obj_checking_prop_exist = obj_checking_prop_exist[prop]
          is_prop_exist = !!obj_checking_prop_exist
      }
    })

    if (is_prop_exist) {
      let obj_new1 = obj_new
      props.forEach((prop, idx) => {
        item = item[prop]
        obj_new1[prop] = props.length === (idx + 1) ? item : {...{}, ...obj_new[prop]}
        obj_new1 = obj_new1[prop]
      })
    }
  })
  objectsToArray(obj_new)
  return obj_new
}*/

const copy = (obj, paths) => {
  let newObj = {}
  const isLastPath = (idx, arr) => (idx + 1) === arr.length

  paths.forEach((path) => {
    const props = path.split('.')
    let item = { ...obj }
    let aux = newObj
    let auxUpLevel = {}
    props.forEach((prop, idx) => {
      if (item && item[prop]) {
        item = item[prop]
        if (/\d/.test(prop)) {
          auxUpLevel.aux[auxUpLevel.prop] = [item]
        } else {
          aux[prop] = isLastPath(idx, props) ? item : {...{}, ...aux[prop]}
        }
        auxUpLevel = { aux, prop }
        aux = aux[prop]
      }
    })
  })

  return newObj
}

const a = { b: { c: 3, d: [3, 4], x: 5 }, a: 12 }
const b = copy(a, ['b.c', 'b.x', 'b.t.o', 'b.d.1'])
console.log('Ответ: ', b)