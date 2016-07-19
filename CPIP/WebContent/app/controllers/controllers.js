angular
    .module('ModuloLogin', ['ngSanitize'])
    .controller('mineducControllers',['$scope','$rootScope', function($scope,$rootScope, $http) {

    	$scope.getDataFromServer = function() {
            $http({
                    method : 'GET',
                    url : 'datosSostenedor'
            }).success(function(data, status, headers, config) {
                    $scope.person = data;
                    console.log('data'+$scope.person);
            }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
            	console.log('data error'+$scope.person);
            });

    };
    }])
    .controller('loginctr',['$scope','$rootScope','$location','$http', function($scope,$rootScope,$location, $http) {


        $scope.ingresar= function() {
        	$http({
                method : 'GET',
                url : 'datosSostenedor'
        }).success(function(data, status, headers, config) {
                $scope.person = data;
                console.log('data'+$scope.person[0].pernr);
        }).error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
        	console.log('data error'+$scope.person);
        });
            $location.url("/docente");

         };
    }])
    .controller('botoneraDocentectl',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {
        $scope.enviar= function(strDestino) {
            $location.url("/" + strDestino);
        };

    }])
    .controller('botoneraSostenedorctl',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {
        $scope.enviar= function(strDestino) {
            $location.url("/" + strDestino);
        };

    }])



    .controller('sostenedorDDM',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {


        $scope.RBDShow = false;
        $scope.SOSShow = false;


        $scope.model = {};
        $scope.model = {
            categories: [ {
                id: 2,
                name: 'SOSTENEDOR',
                subCategory: ['INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]'],
                filterValue: ''
            }],
            selectedCategory: {}
        };

        $scope.Data_EE = [{
            id:'LICEO JOSE MIGUEL INFANTE - RBD[8592]',
            nombre:'LICEO JOSE MIGUEL INFANTE',
            direccion:'General Mackenna 1923',
            comuna:'Santiago',
            telefono:'6402800',
            emailContacto:'licemin@fmachile.org',
            web:'jmi.fmachile.org',
            director:'Andrés Rosendo Bustamante Gil',
            sostenedor:'Instituto Hijas De Maria Auxiliadora',
            img:'liceojosemiguelinfante.jpeg'
        },{
            id:'LICEO LAURA VICUNA - RBD[9759]',
            nombre:'LICEO LAURA VICUNA',
            direccion:'Gran Avenida 9042',
            comuna:'La Cisterna',
            telefono:'25582908',
            emailContacto:'cmiranda@fmachile.org',
            web:'www.liceolauravicuna.cl',
            director:'Carmen Luz Miranda Muñoz',
            sostenedor:'Instituto Hijas De Maria Auxiliadora',
            img:'liceolauravicuna.jpeg'
        },{
            id:'COLEGIO DEL ROSARIO LAS CONDES - RBD[8827]',
            nombre:'COLEGIO DEL ROSARIO LAS CONDES',
            direccion:'	La Piedad 35',
            comuna:'Las Condes',
            telefono:'3421063',
            emailContacto:'nsrdireccion@gmail.com',
            web:'Sin Información',
            director:'Yolanda Isabel Domínguez Dinamarca',
            sostenedor:'Sociedad Educacional Rosario S.A.',
            img:'colegiodelrosariolascondes.jpeg'
        },{
            id:'COLEGIO LA VIRGEN DE POMPEYA - RBD[8849]',
            nombre:'COLEGIO LA VIRGEN DE POMPEYA',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'colegiolavirgenpompeya.jpeg'
        },{
            id:'INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]',
            nombre:'INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]',
            rut:'70.083.600-2',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'sostenedor.jpeg'
        },{
            id:'SOCIEDAD EDUCACIONAL ROSARIO S.A. [96922120]',
            nombre:'SOCIEDAD EDUCACIONAL ROSARIO S.A. [96922120]',
            rut:'96.922.120-9',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'sostenedor.jpeg'

        },{
            id:'FUNDACION SANTA ROSA DE LIMA [74068000]',
            nombre:'FUNDACION SANTA ROSA DE LIMA [74068000]',
            rut:'74.068.000-2',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'sostenedor.jpeg'

        }];



        $scope.categoryChange = function() {
            console.dir($scope.selectedCategory);
            $scope.RBDShow = false;
            $scope.SOSShow = false;
        };

        $scope.findIndexByKeyValue = function(obj, key, value)
        {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i][key] == value) {
                    return i;
                }
            }
            return null;
        };





        $scope.subCategoryChange = function() {
            //console.dir($scope.categories.subCategory);

            var dataIndex = $scope.findIndexByKeyValue($scope.Data_EE,'id',$scope.model.selectedCategory.filterValue);
            $scope.nombre = $scope.Data_EE[dataIndex].nombre;
            $scope.comuna = $scope.Data_EE[dataIndex].comuna;
            $scope.telefono = $scope.Data_EE[dataIndex].telefono;
            $scope.emailContacto = $scope.Data_EE[dataIndex].emailContacto;
            $scope.web = $scope.Data_EE[dataIndex].web;
            $scope.director = $scope.Data_EE[dataIndex].director;
            $scope.direccion = $scope.Data_EE[dataIndex].direccion;
            $scope.rut = $scope.Data_EE[dataIndex].rut;
            $scope.director = $scope.Data_EE[dataIndex].director;
            $scope.sostenedor = $scope.Data_EE[dataIndex].sostenedor;
            $scope.imagen = $scope.Data_EE[dataIndex].img;


            if ($scope.model.selectedCategory.name == 'RBD'){

                $scope.RBDShow = true;
                $scope.SOSShow = false;
            } else {
                $scope.RBDShow = false;
                $scope.SOSShow = true;
            }


        };


        var init = function() {
            $scope.model.selectedCategory = $scope.model.categories[0];
        }


    }])
    .controller('sostenedorCU',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {

    }])
    .controller('sostenedorIDD',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {

    }])
    .controller('sostenedorCSU',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {

    }])
    .controller('sostenedorctrpa',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {



        $scope.RBDShowAll = true;
        $scope.SOSShow8592 = false;
        $scope.SOSShow9759 = false;


        $scope.model = {};
        $scope.model = {
            categories: [{
                id: 1,
                name: 'RBD',
                subCategory: ['LICEO JOSE MIGUEL INFANTE - RBD[8592]', 'LICEO LAURA VICUNA - RBD[9759]'],
                filterValue: ''
            }],
            selectedCategory: {}
        };

        $scope.Data_EE = [{
            id:'LICEO JOSE MIGUEL INFANTE - RBD[8592]',
            nombre:'LICEO JOSE MIGUEL INFANTE',
            direccion:'General Mackenna 1923',
            comuna:'Santiago',
            telefono:'6402800',
            emailContacto:'licemin@fmachile.org',
            web:'jmi.fmachile.org',
            director:'Andrés Rosendo Bustamante Gil',
            sostenedor:'Instituto Hijas De Maria Auxiliadora',
            img:'liceojosemiguelinfante.jpeg'
        },{
            id:'LICEO LAURA VICUNA - RBD[9759]',
            nombre:'LICEO LAURA VICUNA',
            direccion:'Gran Avenida 9042',
            comuna:'La Cisterna',
            telefono:'25582908',
            emailContacto:'cmiranda@fmachile.org',
            web:'www.liceolauravicuna.cl',
            director:'Carmen Luz Miranda Muñoz',
            sostenedor:'Instituto Hijas De Maria Auxiliadora',
            img:'liceolauravicuna.jpeg'
        }];



        $scope.categoryChange = function() {
            console.dir($scope.selectedCategory);
            $scope.RBDShow = false;
            $scope.SOSShow = false;
        };

        $scope.findIndexByKeyValue = function(obj, key, value)
        {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i][key] == value) {
                    return i;
                }
            }
            return null;
        };





        $scope.subCategoryChange = function(id) {
            //console.dir($scope.categories.subCategory);


            if ("LICEO JOSE MIGUEL INFANTE - RBD[8592]"== id) {

                $scope.RBDShowAll = false;
                $scope.SOSShow8592 = true;
                $scope.SOSShow9759 = false;

            }
            if ("LICEO LAURA VICUNA - RBD[9759]"== id) {

                $scope.RBDShowAll = false;
                $scope.SOSShow8592 = false;
                $scope.SOSShow9759 = true;

            }

            if ("1"== id) {

                $scope.RBDShowAll = true;
                $scope.SOSShow8592 = false;
                $scope.SOSShow9759 = false;

            }



        };


        var init = function() {
            $scope.model.selectedCategory = $scope.model.categories[0];
        }



    }])

    .controller('sostenedorETB',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {


        $scope.cajas = [{
            id:'12',
            nombre:'INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]',
            local:'70.083.600-2',
            estado:'A'

        }];

        $scope.locales = [];
        $scope.estadocaja = [{
            value: 'A',
            text: 'Activa'
        }, {
            value: 'M',
            text: 'Mantención'
        }, {
            value: 'B',
            text: 'Baja'
        }];

        $scope.estadoactivdadcaja = [{
            value: 'A',
            text: 'Abierta'
        }, {
            value: 'C',
            text: 'Cerrada'
        }];


    }])
    .controller('sostenedorPFL',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {

        $scope.Data_EE = [
        {
            id:'INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]',
            nombre:'INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]',
            rut:'70.083.600-2',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'sostenedor.jpeg'
        }];




    }])
    .controller('docentectrpa',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {


        $scope.RBDShow = false;
        $scope.SOSShow = false;


        $scope.model = {};
        $scope.model = {
            categories: [{
                id: 1,
                name: 'RBD',
                subCategory: ['LICEO JOSE MIGUEL INFANTE - RBD[8592]', 'LICEO LAURA VICUNA - RBD[9759]', 'COLEGIO DEL ROSARIO LAS CONDES - RBD[8827]','COLEGIO LA VIRGEN DE POMPEYA - RBD[8849]'],
                filterValue: ''
            }, {
                id: 2,
                name: 'SOSTENEDOR',
                subCategory: ['INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]', 'SOCIEDAD EDUCACIONAL ROSARIO S.A. [96922120]', 'FUNDACION SANTA ROSA DE LIMA [74068000]'],
                filterValue: ''
            }],
            selectedCategory: {}
        };

        $scope.Data_EE = [{
            id:'LICEO JOSE MIGUEL INFANTE - RBD[8592]',
            nombre:'LICEO JOSE MIGUEL INFANTE',
            direccion:'General Mackenna 1923',
            comuna:'Santiago',
            telefono:'6402800',
            emailContacto:'licemin@fmachile.org',
            web:'jmi.fmachile.org',
            director:'Andrés Rosendo Bustamante Gil',
            sostenedor:'Instituto Hijas De Maria Auxiliadora',
            img:'liceojosemiguelinfante.jpeg'
        },{
            id:'LICEO LAURA VICUNA - RBD[9759]',
            nombre:'LICEO LAURA VICUNA',
            direccion:'Gran Avenida 9042',
            comuna:'La Cisterna',
            telefono:'25582908',
            emailContacto:'cmiranda@fmachile.org',
            web:'www.liceolauravicuna.cl',
            director:'Carmen Luz Miranda Muñoz',
            sostenedor:'Instituto Hijas De Maria Auxiliadora',
            img:'liceolauravicuna.jpeg'
        },{
            id:'COLEGIO DEL ROSARIO LAS CONDES - RBD[8827]',
            nombre:'COLEGIO DEL ROSARIO LAS CONDES',
            direccion:'	La Piedad 35',
            comuna:'Las Condes',
            telefono:'3421063',
            emailContacto:'nsrdireccion@gmail.com',
            web:'Sin Información',
            director:'Yolanda Isabel Domínguez Dinamarca',
            sostenedor:'Sociedad Educacional Rosario S.A.',
            img:'colegiodelrosariolascondes.jpeg'
        },{
            id:'COLEGIO LA VIRGEN DE POMPEYA - RBD[8849]',
            nombre:'COLEGIO LA VIRGEN DE POMPEYA',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'colegiolavirgenpompeya.jpeg'
        },{
            id:'INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]',
            nombre:'INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]',
            rut:'70.083.600-2',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'sostenedor.jpeg'
        },{
            id:'SOCIEDAD EDUCACIONAL ROSARIO S.A. [96922120]',
            nombre:'SOCIEDAD EDUCACIONAL ROSARIO S.A. [96922120]',
            rut:'96.922.120-9',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'sostenedor.jpeg'

        },{
            id:'FUNDACION SANTA ROSA DE LIMA [74068000]',
            nombre:'FUNDACION SANTA ROSA DE LIMA [74068000]',
            rut:'74.068.000-2',
            direccion:'Camino El Alba 9145',
            comuna:'Las Condes',
            telefono:'22295608',
            emailContacto:'info@colegiovirgendepompeya.cl',
            web:'www.colegiovirgendepompeya.cl',
            director:'Herminia Sutil García',
            sostenedor:'Fundacion Santa Rosa De Lima',
            img:'sostenedor.jpeg'

        }];



        $scope.categoryChange = function() {
            console.dir($scope.selectedCategory);
            $scope.RBDShow = false;
            $scope.SOSShow = false;
        };

        $scope.findIndexByKeyValue = function(obj, key, value)
        {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i][key] == value) {
                    return i;
                }
            }
            return null;
        };





        $scope.subCategoryChange = function() {
            //console.dir($scope.categories.subCategory);

            var dataIndex = $scope.findIndexByKeyValue($scope.Data_EE,'id',$scope.model.selectedCategory.filterValue);
            $scope.nombre = $scope.Data_EE[dataIndex].nombre;
            $scope.comuna = $scope.Data_EE[dataIndex].comuna;
            $scope.telefono = $scope.Data_EE[dataIndex].telefono;
            $scope.emailContacto = $scope.Data_EE[dataIndex].emailContacto;
            $scope.web = $scope.Data_EE[dataIndex].web;
            $scope.director = $scope.Data_EE[dataIndex].director;
            $scope.direccion = $scope.Data_EE[dataIndex].direccion;
            $scope.rut = $scope.Data_EE[dataIndex].rut;
            $scope.director = $scope.Data_EE[dataIndex].director;
            $scope.sostenedor = $scope.Data_EE[dataIndex].sostenedor;
            $scope.imagen = $scope.Data_EE[dataIndex].img;


           if ($scope.model.selectedCategory.name == 'RBD'){

               $scope.RBDShow = true;
               $scope.SOSShow = false;
           } else {
               $scope.RBDShow = false;
               $scope.SOSShow = true;
           }


        };


        var init = function() {
            $scope.model.selectedCategory = $scope.model.categories[0];
        }

    }])
    .controller('docentectrc',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {


        $scope.enviar= function(strDestino) {
            $location.url("/" + strDestino);

        };


    }])
    .controller('docentectrl',['$scope','$rootScope','$location', function($scope,$rootScope,$location, $http) {


        $scope.enviar= function(strDestino) {
            $location.url("/" + strDestino);

        };


        var tree = [
            {
                text: "INSTITUTO HIJAS DE MARIA AUXILIADORA [70083600]",
                nodes: [
                    {
                        text: "LICEO JOSE MIGUEL INFANTE - RBD[8592]"

                    },
                    {
                        text: "LICEO LAURA VICUNA - RBD[9759]"
                    }
                ]
            },
            {
                text: "SOCIEDAD EDUCACIONAL ROSARIO S.A. [96922120]",
                nodes: [
                    {
                        text: "COLEGIO DEL ROSARIO LAS CONDES - RBD[8827]"

                    }
                ]
            },
            {
                text: "FUNDACION SANTA ROSA DE LIMA [74068000]",
                nodes: [
                    {
                        text: "COLEGIO LA VIRGEN DE POMPEYA - RBD[8849]"

                    }
                ]
            }
        ];

        function getTree() {
            // Some logic to retrieve, or generate tree structure
            return tree;
        }


        var $searchableTree = $('#treeview-searchable').treeview({
            data: getTree(),
        });

    }])
    .controller('docentectr',['$scope','$rootScope','$window', function($scope,$rootScope,$window, $http) {


        $scope.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
        $scope.series = ['PADRE COLL', 'DIVINA PAST','ALEM DE STGO'];
        $scope.data = [
            [300.000, 350.000, 220.000, 20.000, 90.000, 100.000, 550.000],
            [200.000, 200.000, 320.000, 19.000, 86.000, 27.000, 90.000],
            [150.000, 50.000, 20.000, 60.000, 45.000, 35.000, 20.000]
        ];

        $scope.dataHorasSostenedor = [
            [30, 35, 22, 20, 90, 10, 55],
            [20, 20, 32, 19, 86, 27, 90],
            [15, 50, 20, 60, 45, 35, 20]
        ];
        $scope.dataDiasTrabajados = [
            [4, 4, 3, 3, 11, 1, 6],
            [2,1, 3, 4, 2, 11, 4, 11],
            [1, 6, 3, 7, 5, 4, 2]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };


        $scope.labelsRatio = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.dataRatioHorasTrabajadas = [55, 90, 20];

        $scope.dataRatio = [3, 1, 4];
        $scope.seriesLabel = ['Tickets Resueltos', 'Tickets Pendientes','Tickes en Proceso'];



    }])
    .controller('sostenedorctr',['$scope','$rootScope','$window', function($scope,$rootScope,$window, $http) {


        $scope.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
        $scope.series = ['PADRE COLL', 'DIVINA PAST','ALEM DE STGO'];
        $scope.data = [
            [300.000, 350.000, 220.000, 20.000, 90.000, 100.000, 550.000],
            [200.000, 200.000, 320.000, 19.000, 86.000, 27.000, 90.000],
            [150.000, 50.000, 20.000, 60.000, 45.000, 35.000, 20.000]
        ];

        $scope.dataHorasSostenedor = [
            [30, 35, 22, 20, 90, 10, 55],
            [20, 20, 32, 19, 86, 27, 90],
            [15, 50, 20, 60, 45, 35, 20]
        ];
        $scope.dataDiasTrabajados = [
            [4, 4, 3, 3, 11, 1, 6],
            [2,1, 3, 4, 2, 11, 4, 11],
            [1, 6, 3, 7, 5, 4, 2]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };


        $scope.labelsRatio = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.dataRatioHorasTrabajadas = [55, 90, 20];

        $scope.dataRatio = [3, 1, 4];
        $scope.seriesLabel = ['Tickets Resueltos', 'Tickets Pendientes','Tickes en Proceso'];



    }]);




