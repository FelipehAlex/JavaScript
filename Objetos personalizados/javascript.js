let person = new Object();
person.name = 'Felipe';
// console.log(person);

let person1 = {
    name: 'Thiago'
}

let person2 = {
    name: 'Dev',
    age: 10,
    status: false,
    array: ['proficional', 'desenvolvedor', 'programador'],
    work: function () {
        alert("Work");
    },
    support: person1,
    useThis: function() {
        return this.age;
    }
}

