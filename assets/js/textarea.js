angular.module("textAngularTest", ['textAngular']);
function wysiwygeditor($scope) {
  $scope.orightml = 'This is the beginning of the Text';
  $scope.htmlcontent = $scope.orightml;
  $scope.disabled = false;
};
