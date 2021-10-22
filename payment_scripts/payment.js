(function (window) {
    'use strict';
    var App = window.App || {};

    function Payment(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Payment.prototype.createPayment = function (payment) {
        console.log('Payment being processes for ' + payment.username);
        this.db.add(payment.username, payment);
    };

    Payment.prototype.processedPayment = function (customerId) {
        console.log('Finished processing the payment for:' + customerId);
        this.db.remove(customerId);
    };

    Payment.prototype.printPayment = function () {
        var customerIdArray = Object.keys(this.db.getAll());
        console.log('Truck #' + this.truckId + ' is processing the payment');
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));
    };

    Payment.prototype.openModal = function (MODAL_SELECTOR, data) {
        var title = data.title;
        var name = data.username;
        var str = "Thank you for your payment, " + title + " " + name + "!";

        $(MODAL_SELECTOR).html(str);
        $(MODAL_SELECTOR).modal('show');
    };

    App.Payment = Payment;
    window.App = App;
})(window);