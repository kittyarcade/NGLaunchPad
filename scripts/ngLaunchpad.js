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
    $scope.movieName = ''; //empties input field
  }; // end getMovieName
  $scope.removeFilm = function(index){
    console.log('removed', index);
    if (index > -1) {
    $scope.favoriteMovies.splice(index);
}
  };
}]); //end controller
