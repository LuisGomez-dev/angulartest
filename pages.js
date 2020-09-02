app.service('pages', function() {
    this.lists = function (data,filtro) {
        var pages = [];
        var indexPage = 0;
        var pageContador = 0;
        var listItems = [];
        var pagination= [];
        
        var arrWork = data;

        var intVisto =0;
        var intNoVisto =0;

        var noProcesado = true ;

        debugger;

        if (filtro.id != "" ){
            arrWork = arrWork.filter(obj => obj.id ==  filtro.id);
        }

        if (filtro.label != "" ){
            arrWork = arrWork.filter(obj => obj.labels[0] ==  filtro.label);
        }

        if (filtro.criticality != "" ){
            arrWork = arrWork.filter(obj => obj.criticality ==  filtro.criticality);
        }

        if (filtro.timestamp != "" ){
            arrWork = arrWork.filter(obj => obj.timestamp ==  filtro.timestamp);
        }

        if (filtro.eventBody != "" ){
            arrWork = arrWork.filter(obj => obj.eventBody.symbol ==  filtro.eventBody);
        }

        if (filtro.status != "" ){
            arrWork = arrWork.filter(obj => obj.status ==  filtro.status);
        }

        if (filtro.checked != "Todos"){
            arrWork = arrWork.filter(obj => obj.checked ==  filtro.checked.toLowerCase());
        }
        
        var arrCount =    arrWork.filter(obj => obj.checked ==  "no visto");
            intNoVisto = arrCount.length
        arrCount =    arrWork.filter(obj => obj.checked ==  "visto");
            intVisto = arrCount.length


        angular.forEach(arrWork, function(value, key) {
            console.log(key + ': ' + value);
            listItems.push(value);
            pageContador++;
            if (pageContador > 9){
                noProcesado = false
                pagination.push({'index': indexPage,'label':(indexPage + 1)})
                pageContador =0;
                pages[indexPage] = listItems;
                listItems = [];
                indexPage++;
            }
          });

          if(noProcesado){
            if(listItems.length > 0 ){
                pagination.push({'index': indexPage,'label':(indexPage + 1)})
                pageContador =0;
                pages[indexPage] = listItems;
                indexPage++;
            }
          }


      return   {
                    'inipage':0,
                    'totalpage': indexPage,
                    'pages':pages,
                    'actualpage':0,
                    'pagination':pagination,
                    "visto" :intVisto,
                    "noVisto":intNoVisto
                };
    }
    this.optimiza=function(data){

    }
});