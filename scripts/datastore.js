(function (window) {
    'use strict';
    // Code will go here
    var App = window.App || {};
    var Promist = window.Promise;

    function DataStore() {
        this.data = {};
    }

    function promiseResolvedWith(value) {
        var promise = new Promise(function (resolve, reject) {
            resolve(value);
        });
        return promise;
    }


    DataStore.prototype.add = function (key, val) {
        return promiseResolvedWith(null);
    };

    DataStore.prototype.get = function (key) {
        return promiseResolvedWith(this.data[key]);
    };
    DataStore.prototype.getAll = function () {
        return promiseResolvedWith(this.data);
    };

    DataStore.prototype.remove = function (key) {
        delete this.data[key];
        return promiseResolvedWith(null);
    };


    App.DataStore = DataStore;
    window.App = App;
})(window);