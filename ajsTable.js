
app.controller('tableController', function($scope, $http, pages) {

    $scope.id = ""
    $scope.label = ""
    $scope.criticality = ""
    $scope.timestamp = ""
    $scope.eventBody = ""
    $scope.status = ""
    $scope.checked = "Todos"

    /*
    $http.get("render.php")
    .then(function (response) {
        $scope.actualData = response.data;
        $scope.llenaTabla();
    });
    */

   $http.get("test.json")
    .then(function (response) {
        $scope.actualData = response.data;
        $scope.llenaTabla();
    });

    $scope.llenaTabla=function(){


        $scope.realizafiltro();

        var data = $scope.actualData;
        var control = pages.lists(data.events,$scope.filtraParam);

        $scope.items = control.pages
        $scope.intialPage = control.inipage
        $scope.totalPage = control.inipage
        $scope.actualPage = control.actualpage
        $scope.pagination = control.pagination
        $scope.visto = control.visto
        $scope.noVisto = control.noVisto
    }

    $scope.cambiaPagina=function(actualPage){
        $scope.actualPage = actualPage;
    }

    $scope.realizafiltro=function(){
        $scope.filtraParam = {
            "id":$scope.id,
            "label" : $scope.label,
            "criticality" : $scope.criticality,
            "timestamp" : $scope.timestamp,
            "eventBody" : $scope.eventBody,
            "status" : $scope.status,
            "checked" : $scope.checked
        }
    }

    $scope.cambiaValor=function(index,actualValor){
        var newValue = "visto";
        if(actualValor == "visto"){
            newValue = "no visto";
        } else{
            newValue = "visto";
        }

        var arrData =  $scope.actualData
        const key = arrData.events.findIndex(obj => obj.id === index);

        $scope.actualData.events[key].checked = newValue;
        $scope.llenaTabla();
    }

});