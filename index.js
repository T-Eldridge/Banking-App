const assert = require("assert")
// const readline = require("linebyline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// bank account stuff

//* ** */ BankAccount class - This class represents a bank account.

class BankAccount {
  // The constructor should take in the following input:

  // accountNumber - The account Number

  // owner - The name of the person who owns this account
  constructor(accountNumber, owner) {
    // The class should have the following fields:
    // accountNumber - String representing the account number
    this.accountNumber = accountNumber
    // owner - String representing the owner of the account
    this.owner = owner
    // transactions - An array of transactions representing the history of all transactions associated with this account
    this.transaction = []

    // NOTE: When an account is created, you should initialize the transactions array to be an empty array
  }

  balance() {
    let sum = 0
    for (let i = 0; i < this.transaction.length; i++) {
      sum += this.transaction[i].amount
    }
    return sum
  }

  deposit(amt) {
    if (amt < 0) {
      return
    }
    let depositTrans = new Transaction(amt, this.owner)
    this.transaction.push(depositTrans)
  }

  charge(amt, payee) {
    let currentBalance = this.balance()
    if (amt <= currentBalance) {
      let chargeTrans = new Transaction(-1 * amt, payee)
      this.transaction.push(chargeTrans)
    }
  }
}

// The class should have the following 3 methods:

// balance() - This method does not take any input, and returns the current balance on the account. The balance is computed by summing up the amounts in the transactions array.

// deposit(amt) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.

// NOTE: You should not be able to deposit a negative amount

// charge(payee, amt) - This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.

// NOTE: You should not be able to charge an amount that would make your balance dip below 0

// ****Transaction class - This class represents a single transaction in a bank account.
class Transaction {
  // The class should have the following fields:
  // The constructor should take in the following input:
  constructor(amount, payee) {
    // amount - The amount on the transaction

    // payee - The payee or description on the transaction

    // date - The date of the transaction
    this.date = new Date()
    // amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
    this.amount = amount
    // payee - The description or payee on the transaction
    this.payee = payee
  }

  // NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date automatically.
}

// //Tests for your Bank Account App:

if (typeof describe === "function") {
  // 1. Should create Bank account: account number, name, transactions
  describe("BankAccount", function () {
    it("Should create Bank account: account number, name, transactions", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Rick Astley")
      assert.equal(bankAccount1.accountNumber, "900-300-200")
      assert.equal(bankAccount1.owner, "Rick Astley")
      assert.equal(bankAccount1.transaction.length, 0)
      assert.equal(bankAccount1.balance(), 0)
    })
    // Should deposit correctly
    // deposit(amt, payee) - Method takes in two inputs, amount and payee.
    // Create bank account and call deposit method (amt, payee)
    // invoke transaction(amt, payee) and push new transaction to transaction array []

    // 4. Should deduct correctly
    // deduct(amt, payee) - takes in amount deducted and payee

    // 5. Should return correct balance
    // get sum of transaction[]

    // 6. Should prevent overdraft
    // do not allow deduction to be greater than balance

    // 7. Should not allow negative deposit

    // 8. Should track multiple deposits and return accurate balance

    // 9. Also, 8. should track multiple charges and return accurate balance
  })

  describe("#testing account balance", function () {
    it("Should create a balance", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Rick Astley")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.deposit(100)
      assert.equal(bankAccount1.balance(), 100)
      bankAccount1.charge(10, "Target")
      assert.equal(bankAccount1.balance(), 90)
    })
    it("Should not allow negative balance", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Rick Astley")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.deposit(100)
      assert.equal(bankAccount1.balance(), 100)
      bankAccount1.deposit(-30)
      assert.equal(bankAccount1.balance(), 100)
    })
    it("Should not allow overdraft", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Rick Astley")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge(30, "Target")
      assert.equal(bankAccount1.balance(), 0)
    })
  })

  // 2. Should create Transaction: is date defined, payee, amount
  describe("Transaction", function () {
    it("Should create dated transaction for deposit", function () {
      const transaction1 = new Transaction(50, "Mick Astley")
      assert.equal(transaction1.amount, 50)
      assert.equal(transaction1.payee, "Mick Astley")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
    it("Should create dated transaction for charge", function () {
      const transaction1 = new Transaction(-30, "Mick Astley")
      assert.equal(transaction1.amount, -30)
      assert.equal(transaction1.payee, "Mick Astley")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
  })
}

const getPrompt = () => {
  printStacks()
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack)
      getPrompt()
    })
  })
}
