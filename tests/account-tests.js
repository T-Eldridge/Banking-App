// //Tests for your Bank Account App:
// import modules
const assert = require("assert")

// import classes
const { Transaction, BankAccount } = require("../index.js")

// declare and define variables
const bankAccount1 = new BankAccount(888, "Roger Rabbit")
const transaction1 = new Transaction(45, "Betty Boo")
bankAccount1.transaction.push(transaction1)
console.log(bankAccount1)
console.log(transaction1)
console.log(bankAccount1.transaction)

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
    it("Should allow refund", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Rick Astley")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge(-30, "Target")
      assert.equal(bankAccount1.balance(), 30)
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

  describe("Bunch of transaction and charges", function () {
    let bigAccount = new BankAccount("11223344", "Ace Freely")
    it("test account created", function () {
      assert.equal("11223344", bigAccount.accountNumber)
      assert.equal("Ace Freely", bigAccount.owner)
      assert.equal(bigAccount.balance(), 0)
    })
    it("test deposits", function () {
      bigAccount.deposit(30) //30
      bigAccount.deposit(20) //50
      bigAccount.deposit(5) //55
      bigAccount.deposit(-20) //55
      bigAccount.deposit(65) //120
      bigAccount.deposit(15.5) //135.50
      assert.equal(135.5, bigAccount.balance())
    })

    it("test charges", function () {
      bigAccount.deposit(500)
      bigAccount.charge(30) //470
      bigAccount.charge(20) //450
      bigAccount.charge(5) //445
      bigAccount.charge(-20) //465
      bigAccount.charge(65) //400
      bigAccount.charge(15.5) //384.50 + total deposited 135.50 = 520
      assert.equal(520, bigAccount.balance())
      assert.equal(12, bigAccount.transaction.length)
    })

    it("test overdraft", function () {
      bigAccount.charge(5000)
      assert.equal(12, bigAccount.transaction.length)
      assert.equal(520, bigAccount.balance())
    })
  })
}
