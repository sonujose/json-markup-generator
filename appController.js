
var app = angular.module('myApp', []);
app.controller('mainAppCtrl', function($scope,$sce) {
    
    $scope.newItem = {'type' : 'para' , 'data' : ''};
    $scope.newContentList = [];
    $scope.generatedJsonContent = JSON.stringify($scope.newContentList);
    $scope.isEditMode = false;

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
        $scope.generatedJsonContent = JSON.stringify($scope.newContentList, undefined, 2);
        $scope.resetItem();
    };

    $scope.UpdateItem = function() {
        $scope.newContentList.some(function(item){
            if(item === $scope.selectedItem) {
                item.data = $scope.newItem.data;                
                return true;
            }
        });
        $scope.generatedJsonContent = JSON.stringify($scope.newContentList, undefined, 2);
        $scope.isEditMode = false;
        $scope.selectedItem = {};
        $scope.resetItem();
    } 

    $scope.trustContentAsHtml = function(data) {
        return $sce.trustAsHtml(data);
    }

    $scope.editContent = function (dataVal) {
        $scope.newContentList.some(function(item){
            if(item.id === dataVal) {
                $scope.selectedItem = item;
                return true;
            }
        });
        
        $scope.newItem = $scope.selectedItem;
        $scope.isEditMode = true;
    }

    $scope.resetEntireList = function() {
        $scope.newContentList = [];
        $scope.generatedJsonContent = JSON.stringify($scope.newContentList, undefined, 2);
        $scope.resetItem();
    }

});