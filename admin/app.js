require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routesConfig from 'config/routes.config.js';
import index from 'pages/index/'
import category from 'pages/category/'

angular.module('Mall',[uiRouter,ngResource,index,category])
    .config(routesConfig);