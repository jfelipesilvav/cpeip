angular
    .module('mineducapp', ['ModuloLogin','ngRoute','ngAnimate','ngResource','ngCookies'])
    .config(['$routeProvider',function($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'app/views/login.html',
            controller: 'loginctr'
        })
        .when('/docente', {
            templateUrl: 'app/views/docente.html',
            controller: 'docentectr'
        })
        .when('/sostenedor', {
            templateUrl: 'app/views/sostenedor.html',
            controller: 'sostenedorctr'
        })
        .when('/sostenedorCreacionSubusuario', {
                templateUrl: 'app/views/sostenedor_creacion_subusuario.html',
                controller: 'sostenedorCSU'
            })
        .when('/sostenedorCreacionUsuario', {
            templateUrl: 'app/views/sostenedor_creacion_usuario.html',
            controller: 'sostenedorCU'
        })
        .when('/docente_profile', {
            templateUrl: 'app/views/docente_profile.html',
            controller: 'docentectr'
        })
        .when('/sostenedor_profile', {
            templateUrl: 'app/views/sostenedor_profile.html',
            controller: 'sostenedorPFL'
        })
        .when('/docente_profile_contacto', {
            templateUrl: 'app/views/docente_profile_contacto.html',
            controller: 'docentectrc'
        })
        .when('/docente_profile_laboral', {
            templateUrl: 'app/views/docente_profile_laboral.html',
            controller: 'docentectrl'
        })
        .when('/sostenedor_profile_contacto', {
            templateUrl: 'app/views/sostenedor_profile_contacto.html',
            controller: 'sostenedorctrl'
        })
        .when('/sostenedor_profile_laboral', {
            templateUrl: 'app/views/sostenedor_profile_laboral.html',
            controller: 'sostenedorctrl'
        })
        .when('/docente_profile_contacto_edit', {
            templateUrl: 'app/views/docente_profile_contacto_Edit.html',
            controller: 'docentectrl'
        })
        .when('/sostenedor_docente', {
            templateUrl: 'app/views/sostenedor_docente.html',
            controller: 'sostenedorctrpa'
        })
        .when('/sostenedor_ingreso_declaracion', {
            templateUrl: 'app/views/sostenedor_ingreso_declaracion.html',
            controller: 'sostenedorIDD'
        })
        .when('/sostenedor_establecimento', {
            templateUrl: 'app/views/sostenedor_establecimiento.html',
            controller: 'sostenedorETB'
        })
        .when('/sostenedor_profile_contacto_edit', {
            templateUrl: 'app/views/sostenedor_profile_contacto_Edit.html',
            controller: 'sostenedorctrl'
        })
        .when('/sostenedor_docente_declaracion_mensual', {
            templateUrl: 'app/views/sostenedor_docente_declaracion_mensual.html',
            controller: 'sostenedorDDM'
        })
        .when('/docente_planilla_asignaciones', {
            templateUrl: 'app/views/docente_planilla_asignaciones.html',
            controller: 'docentectrpa'
        })
        .when('/sostenedor_planilla_asignaciones', {
            templateUrl: 'app/views/sostenedor_planilla_asignaciones.html',
            controller: 'sostenedorctrpa'
        })
    ;

}]);