import ClassJob from './ClassJob.js';

export default class ClassPerson extends ClassJob{

    constructor(){
        super(); 
    }

    setPerson(name, age) {
        this.name = name;
        this.age = age;
    }

    getData() {
        return 'O ' +this.name+ ' possui ' +this.age+ ' e trabalha na empresa ' +super.getEmp() +' como ' + super.getFunc();
    }

}