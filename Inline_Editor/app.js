let app = angular.module('myApp', []);
app.controller('navCtrl', function($scope) {
    $scope.myInput = "Edit me. ";
});

function ShowHide() {
    let bld = document.querySelectorAll('.popup-input');
 
    for (let i=0; i < bld.length; i++) {
      if (bld[i].style.visibility == 'hidden') {
       bld[i].style.visibility = 'visible';
      }
      else {
       bld[i].style.visibility = 'hidden';
      }
    }

}