function MainCtrl($scope){
    $scope.tasks = []
    $scope.oneTask = ""
    $scope.addTask = function(task){
        $scope.tasks.push(task);
    }
    $scope.removeTask = function($index){
        $scope.tasks.splice($index,1);
    }
    $scope.editTask = function($index, text){
        $scope.tasks[$index] = text;
    }

}