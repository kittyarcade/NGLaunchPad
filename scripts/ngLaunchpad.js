console.log('js');

var myApp = angular.module('myApp', []);



myApp.controller('LaunchpadController', ['$scope', function($scope){
  console.log('NG');
  $scope.favoriteMovies = [];
  $scope.getMovieName = function(){
    console.log( 'in getMovieName()');
    console.log( 'movieName:', $scope.movieName );
    $scope.favoriteMovies.push( $scope.movieName );
    console.log( 'favoriteMovies:', $scope.favoriteMovies );
  }; // end getMovieName
}]); //end controller
