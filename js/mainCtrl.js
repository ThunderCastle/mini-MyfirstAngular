angular.module('friendsList');

angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Fuzzy Hall', 'Scott Caldwell', 'Loren Overy', 'Jason Brady', 'Brady Scoffield', 'Peggy Paget'];

  $scope.addFriend =function() {
    $scope.friends.push($scope.newFriend)
  }
});
