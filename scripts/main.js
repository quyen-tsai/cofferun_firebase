(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var FIREBASE_URL = 'http://coffeerun-dbf85.firebaseapp.com'
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FireBaseDataStore = App.FireBaseDataStore;
    var RemoteDataStore = App.RemoteDataStore;


    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var Validation = App.Validation;
    var remoteDS = new FireBaseDataStore(FIREBASE_URL);
    var myTruck = new Truck('ncc-1701', remoteDS);
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {

        return myTruck.createOrder.call(myTruck, data)
            .then(function () {
                checkList.addRow.call(checkList, data);
            });

    });

    formHandler.addInputHandler(Validation.isCompanyEmail);
    myTruck.printOrders(checkList.addRow.bind(checkList));

})(window);