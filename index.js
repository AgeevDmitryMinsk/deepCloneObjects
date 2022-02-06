//Ctrl + Shift + F10 - выводит результат в консоль Run

console.log(`JS`)

const user = {name: "Bob"}
const cloneUser = {...user} // поверхностое копирование (клонирование)
console.log(user)
console.log(cloneUser)

console.log(user === cloneUser) // false
console.log(user.name === cloneUser.name) // true


const alex = {...user, name: "Alex"}
console.log(14, alex)

const arr = [1, 2, 3, 4, 5, 6]
const copyArr = [...arr] //поверхностое копирование (клонирование)
console.log(arr)
console.log(copyArr)
console.log(arr === copyArr) // false


const complexUser = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Ann", "Donald"]
}

const copyComplexUser = {...complexUser} //поверхностое копирование (клонирование)
console.log(31, copyComplexUser === complexUser) //false
copyComplexUser.friends.push("John")
console.log(33, complexUser) //{ name: 'Bob', age: 23, friends: [ 'Alex', 'Ann', 'Donald', 'John' ] }
console.log(34 , `copyComplexUser`, copyComplexUser) // { name: 'Bob', age: 23, friends: [ 'Alex', 'Ann', 'Donald', 'John' ] }


//Глубокое копирование ( т.е. не затрагивается старый объект при внесении изменений в старый) c помощью оператора спред - нужно ! применить ко всем частям {} и []
const deepCopycomplexUser = {...complexUser, friends: [...complexUser.friends]}
deepCopycomplexUser.friends.push("Ilia")
console.log(40, complexUser) //  { name: 'Bob', age: 23, friends: [ 'Alex', 'Ann', 'Donald', 'John' ] }
console.log(deepCopycomplexUser) // {name: 'Bob', age: 23, friends: [ 'Alex', 'Ann', 'Donald', 'John', 'Ilia' ]}

//Глубокое копирование ( т.е. не затрагивается старый объект при внесении изменений в старый) c помощью библиотеки Lodash
// для подключения библиотеки Lodash:
// 1) npm i lodash
// 2) в html файле подключаем
// 3) запускаем браузер через файл html и смотрим результат в консоли!
// 4) или подключаем в js файле строку: var _ = require('lodash');
var _ = require('lodash');
const deepCopyComplexUserLodash = _.cloneDeep(complexUser);
console.log(`51 deepCopyComplexUserLodash-Anna:` , deepCopyComplexUserLodash)
console.log(deepCopyComplexUserLodash === complexUser) // false
console.log(deepCopyComplexUserLodash.friends[0] === complexUser.friends[0]) // true
deepCopyComplexUserLodash.friends.push(`Anna`)
console.log(`55 deepCopyComplexUserLodash+Anna:` , deepCopyComplexUserLodash) // { name: 'Bob',  age: 23,  friends: [ 'Alex', 'Ann', 'Donald', 'John', 'Anna' ]}
console.log(`56 complexUser` , complexUser) //  { name: 'Bob', age: 23, friends: [ 'Alex', 'Ann', 'Donald', 'John' ] }


//Глубокое копирование c помощью JSON.parse(JSON.stringify())

const deepCloneJSONparseJSONstringify = JSON.parse(JSON.stringify(complexUser));
console.log(`62 deepCloneJSONparseJSONstringify`, deepCloneJSONparseJSONstringify)
deepCloneJSONparseJSONstringify.friends.push(`JSONpush`)
console.log(`64 deepCloneJSONparseJSONstringify`, deepCloneJSONparseJSONstringify)
console.log(`65 complexUser`, complexUser)

//есть еще одно, но Поверхностное  копирование c помощью Object.assign({}, A1);
const deepCloneObjectAssign = Object.assign({}, complexUser);
console.log(`69 deepCloneObjectAssign`, deepCloneObjectAssign)
deepCloneObjectAssign.friends.push(`ObjectAssignName`)
console.log(`710 deepCloneObjectAssign`, deepCloneObjectAssign)
console.log(`72 complexUser`, complexUser)
