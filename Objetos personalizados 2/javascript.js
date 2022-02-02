let person = {
    name: 'Frank',
    age: 20,
    cc: 123

}

let operation = {
    sacar: function(saldo, valor) {
        return saldo -= valor;
    },
    depositar: function(saldo, valor) {
        return saldo += valor;
    }
}

let bank = {
    person: person,
    operation: operation,
    saldo: 50
}

// let value = 20;
// console.log(bank.person.name + " portador da conta " + bank.person.cc + " realizou um saque no valor de " + value + " ficando com " + bank.operation.sacar(bank.saldo, value));

let value = 20;
console.log(bank.person.name + " portador da conta " + bank.person.cc + " realizou um deposito no valor de " + value + " ficando com " + bank.operation.depositar(bank.saldo, value));