mathApp.controller('RealLifeProblemsController', ['$scope', '$http', function($scope, $http) {

$scope.seeAnswer = false;
var countdown;
getQuestions();

function getQuestions() {
  $http({
      method: 'GET',
      url: '/realLifeQuestions/get'
  }).then(function(res, err) {
      console.log('response', res.data);
      $scope.questionsList = res.data;
      getRandomQuestion(0, $scope.questionsList.length);
  });
}

function getRandomQuestion(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randQuest =  Math.floor(Math.random() * (max - min)) + min;
  $scope.selectedQuestion = $scope.questionsList[randQuest];
  finalCountdown($scope.selectedQuestion);
}

function finalCountdown(question) {
  determineTimer(question);
  countdown = setInterval(function() {
    $scope.timer--;
    console.log('timer', $scope.timer);
    if ($scope.timer <= 0) {
      $scope.$apply(function() {
        $scope.timer = 0;
      });
      return clearInterval(countdown);
    }
  }, 1000);
}

function determineTimer(question) {
  if (question.difficulty >= 3) {
    $scope.timer = 4;
  } else if (question.difficulty == 2) {
    $scope.timer = 3;
  } else if (question.difficulty <= 1) {
    $scope.timer = 2;
  } else {
    $scope.timer = 60;
  }
}

$scope.showAnswer = function() {
  console.log('clicked showAnswer');
  return $scope.seeAnswer = true;
}

$scope.newQuestion = function() {
  clearInterval(countdown);
  console.log('clicked');
  getRandomQuestion(0, $scope.questionsList.length);
  $scope.seeAnswer = false;
}

}]);