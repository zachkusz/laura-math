mathApp.controller('EditorController', ['$scope', '$http', function($scope, $http) {

    $scope.newQuestion = {};

    $scope.postRealLife = function() {
        $scope.newQuestion.page = 'realLifeProblems';
        console.log('posting');
        console.log($scope.newQuestion);
        $http({
            method: 'POST',
            url: '/realLifeQuestions/post',
            data: $scope.newQuestion
        }).then(function(res, err) {
            console.log('response', res || err);
            $scope.newQuestion.difficulty = 1;
            $scope.newQuestion.num = null;
            $scope.newQuestion.question = '';
            $scope.newQuestion.answer = '';
            $scope.newQuestion.pic = '';
            $scope.newQuestion.page = '';
        });
    };
    
}]);