(function() {

  'use strict';

  angular
    .module('angularsect')
    .factory('Status', StatusService);

  function StatusService($firebaseArray) {
    var ref = new Firebase("https://statusapp.firebaseio.com/status");
    return $firebaseArray(ref);
  }

})();