function Conta(nome, cpf, email, saldo){
	this.nome = nome
	this.cpf = cpf
	this.email = email
	this.saldo = saldo

	this.depositar = function(valor){
		this.saldo += valor
		console.log(`O valor ${valor} foi depositado na sua conta com sucesso.`)
	}

	this.sacar = function(valor){
		if(this.saldo >= valor){
			this.saldo -= valor
			console.log(`O valor ${valor} foi sacado da sua conta com sucesso.`)
			console.log(`O saldo restante da sua conta é ${this.saldo}.`)
		}else{
			console.error(`O valor ${valor} requisitado está acima do valor do saldo: ${this.saldo}`)
		}
	}
}

function ContaPoupanca(nome, cpf, email, saldo, saldoPoupanca){
	Conta.call(this, nome, cpf, email, saldo)
	this.saldoPoupanca = saldoPoupanca
}

ContaPoupanca.prototype.depositarPoupanca = function(valor){
	this.saldoPoupanca += valor
	console.log(`O valor ${valor} foi depositado na sua conta poupança com sucesso.`)
}

ContaPoupanca.prototype.sacarPoupanca = function(valor){
	if(this.saldoPoupanca >= valor){
		this.saldoPoupanca -= valor
		console.log(`O valor ${valor} foi sacado da sua conta poupança com sucesso.`)
		console.log(`O saldo restante da sua conta poupança é ${this.saldoPoupanca}.`)
	}else{
		console.error(`O valor ${valor} requisitado está acima do valor do saldo da sua poupança: ${this.saldoPoupanca}`)
	}
}

const novaConta = new Conta("John Doe", "123.098.765-43", "john.doe@email.com", 64)
const novaContaPoupanca = new ContaPoupanca("Fulana", "098.876.435-98", "fulana@email.com", 200, 120)

novaConta.depositar(20)
novaConta.sacar(40)
novaConta.sacar(80)

novaContaPoupanca.sacarPoupanca(300)
novaContaPoupanca.sacarPoupanca(100)
novaContaPoupanca.depositarPoupanca(30)
novaContaPoupanca.sacar(20)