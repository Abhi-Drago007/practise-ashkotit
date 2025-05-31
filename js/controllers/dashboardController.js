app.controller('dashboardController', function($scope, $location, $window) {
    var user = $window.sessionStorage.getItem('user');
    if (!user) {
        $location.path('/');
        
    }

     $scope.dashboardCards = [
        { icon: 'fas fa-users', title: 'Members', description: '150+ active gym members.' },
        { icon: 'fas fa-dumbbell', title: 'Equipments', description: 'State-of-the-art fitness machines.' },
        { icon: 'fas fa-calendar-check', title: 'Sessions', description: 'Daily strength & cardio training.' },
        { icon: 'fas fa-user-clock', title: 'Trainers', description: 'Certified personal trainers available.' },
        { icon: 'fas fa-heartbeat', title: 'Wellness', description: 'Yoga and Zumba sessions included.' },
        { icon: 'fas fa-coffee', title: 'Cafeteria', description: 'Healthy snacks and drinks served.' },
      ];
      
    $scope.logout = function() {
        $window.sessionStorage.removeItem('user');
        $location.path('/');
    };
});
