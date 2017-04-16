mathApp.controller('RealLifeProblemsController', ['$scope', '$http', function($scope, $http) {
console.log('real life problems');

$scope.questionsList = [];
$scope.seeAnswer = false;
var countdown;

/*Enter all questions between these commented out lines!!! */
var q1 = {
  num: 1,
  question: "What is 10 * 10?",
  answer: "100",
  difficulty: 1
};

var q2 = {
  num: 2,
  question: "Where's Waldo?",
  answer: "No one knows (deh neh neh nah)",
  difficulty: 3
};

var q3 = {
  num: 3,
  question: "Billy went to the store with two apples, " + 
    "now he only has one, who took Billy's apple?",
  answer: "Billy does. He ate it. What did you think, he got robbed?",
  difficulty: 2
}

$scope.questionsList.push(q1,q2,q3);
/*Make sure to add it to the questions list on the line above here!!! */

console.log($scope.questionsList);

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

getRandomQuestion(0, $scope.questionsList.length);
console.log('selected question is', $scope.selectedQuestion);

}]);