const assert = require("assert")
// const readline = require("linebyline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// bank account stuff
let balance

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
    function sumTotal(total, num) {
      return total + num
    }
    this.balance = this.transaction.reduce(sumTotal)
  }

  deposit(amt, payee) {
    if (amt > 0) {
      this.transaction.push(new Transaction(amt, payee))
      balance = amt
    } else {
      return "Input a positive integer, please. Do not make me ask again..."
    }
  }

  charge(payee, amt) {
    this.transaction = [payee, amt]
    this.transaction.push[(payee, amt)]
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
    })
    // Should deposit correctly
    // deposit(amt, payee) - Method takes in two inputs, amount and payee.
    // Create bank account and call deposit method (amt, payee)
    // invoke transaction(amt, payee) and push new transaction to transaction array []
    it("Should deposit correctly", function () {
      const kevinsBank = new BankAccount("900-300-200", "Kevin")
      kevinsBank.deposit(1, "Todd")
      assert.equal(kevinsBank.transaction[0].amount, 1)
      assert.equal(kevinsBank.transaction[0].payee, "Todd")
      kevinsBank.deposit(10, "Seabass")
      assert.equal(kevinsBank.transaction[1].amount, 10)
      assert.equal(kevinsBank.transaction[1].payee, "Seabass")
    })
    // 4. Should deduct correctly
    // deduct(amt, payee) - takes in amount deducted and payee
    it("Should deduct correctly", function () {
      const kevinsBank = new BankAccount("900-300-200", "Kevin")
      kevinsBank.deduct(10, "Kevin")
      assert.equal(kevinsBank.transaction[0].amount, 10)
      assert.equal(kevinsBank.transaction[0].payee, "Kevin")
    })

    // 5. Should return correct balance
    // get sum of transaction[]
    it("Should check balance", function () {
      const kevinsBank = new BankAccount("900-300-200", "Kevin")
      kevinsBank.balance(kevinsBank.transaction)
    })
    // 6. Should prevent overdraft
    // do not allow deduction to be greater than balance
    it("Should not allow an overdraft", function () {
      const kevinsBank = new BankAccount("900-300-200", "Kevin")
    })
    // 7. Should not allow negative deposit

    // 8. Should track multiple deposits and return accurate balance

    // 9. Also, 8. should track multiple charges and return accurate balance
  })
  // 2. Should create Transaction: is date defined, payee, amount
  describe("Transaction", function () {
    it("Should have date, payee, amount", function () {
      const transaction1 = new Transaction(50, "Mick Astley")
      assert.equal(transaction1.amount, 50)
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
