
var app = angular.module('myApp', []);
app.controller('mainAppCtrl', function($scope) {
    $scope.name = "John Doe";
    $scope.newItem = {'type' : 'para' , 'data' : ''};
    $scope.newContentList = [];
    $scope.generatedJsonContent = JSON.stringify($scope.newContentList);

    $scope.scrollToBottom = function() {
        window.scrollTo(0,document.body.scrollHeight);
    };
    $scope.resetItem = function() {
        $scope.newItem = {'type' : 'para' , 'data' : ''};
    };
    $scope.addNewItem = function() {        
        var currentLength = $scope.newContentList.length;
        var object = {'id': currentLength + 1, 'type' : $scope.newItem.type, 'data' : $scope.newItem.data};
        $scope.newContentList.push(object);
        $scope.generatedJsonContent = JSON.stringify($scope.newContentList);
        $scope.resetItem();
    };
});