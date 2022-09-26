export default function BankStore() {
    constructor() {
        this.listeners = set();

        this.accountNUYmber='';
        this.name='';
        this.amount= '';
        this.transactions = [];
    }

    requestTransfer({to, amount, name}) {
        this.isTransferProcessing = true;

        this.isTransferSuccess = true;

        this.publish();

    }

}