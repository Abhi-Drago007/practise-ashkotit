app.controller('loginController', function($scope, $location, $window) {
    $scope.login = function() {
        if ($scope.username === 'admin' && $scope.password === 'admin') {
            $window.sessionStorage.setItem('user', $scope.username);
            $location.path('/dashboard');
        } else {
            alert("Invalid Credentials!");
        }
    };
});
