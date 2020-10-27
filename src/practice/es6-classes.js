/**
 * The purpose of a class is to reuse code and it serves a blue print
 * Say, you want to create bank acounts for new hires
 *      - Each bank account has a set of properties i.e., acctNumber, routingNumber, bankName
 *      - Anything outside the constructor will be found under __proto__
 *      - Also you can extend class and override a method that's on super class -> polymorphism
 */

 class BankAccount {
    constructor(bankName, accountNumber, routingNumber, accountType = 'Savings') {
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
        this.accountType = accountType
    }

    accountInformation() {
        return `${this.accountNumber} is a ${this.accountType} account at the ${this.bankName}`;
    }
 }

 class AuditInformation extends BankAccount {
     constructor(clientName, clientOccupation, bankName, accountNumber, routingNumber, accountType = 'Savings') {
         super(bankName, accountNumber, routingNumber, accountType);
         this.clientName = clientName;
         this.clientOccupation = clientOccupation;
     }

     clientAuditInfo() {
         return `${this.clientName}'s occupation is ${this.clientOccupation} and has a bank account ${this.accountNumber} at the ${this.bankName}`;
     }
     accountInformation() {
         return {
             bankName: this.bankName,
             acountNumber: this.accountNumber
         }
     }
 }
 const savingsAccount = new BankAccount('ESL Credit Union', 12345678, 109887657);
 console.log(savingsAccount);

 const michaelSzpak = new AuditInformation('Michael Szpak', 'Business Consultant', 'Bank of America', 887677876, 281638173);

 console.log(michaelSzpak);