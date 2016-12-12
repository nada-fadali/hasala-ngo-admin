angular.module("hasalaNgo",["ui.bootstrap","ui.router"]),angular.module("hasalaNgo").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,t,e){e.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),a.state("hasalat",{url:"/hasalat",templateUrl:"app/hasalat/index/index.html",controller:"hasalatIndexController as hasalat"}).state("hasala",{url:"/hasalat/:hasalaId",templateUrl:"app/hasalat/show/show.html",controller:"hasalatShowController as hasala"}).state("ngoShow",{url:"/",templateUrl:"app/ngo/show/show.html",controller:"ngoShowController as ngo"})}]),angular.module("hasalaNgo").run(["$templateCache",function(a){a.put("app/hasalat/index/index.html",'<div class="container hasalat-container">\n\n  <div class="row">\n    <div class="col-sm-6">\n      <h1> {{hasalat.ngo}}\'s hasalat </h1>\n    </div>\n    <div class="col-sm-2 col-sm-offset-4">\n      <a href="#" class="btn btn-success btn-block">New Hasala</a>\n    </div>\n  </div>\n\n  <div class="row">\n    <div ng-repeat="hasala in hasalat.list">\n      <div class="col-sm-4">\n        <div class="container-fluid __container">\n          <div class="col-sm-12">\n            <img src="{{hasala.photo}}" alt="{{hasala.name}}" class="img-thumbnail img-responsive">\n            <h2>{{hasala.name}}</h2>\n          </div>\n          <div class="col-sm-12">\n            <p>Status: {{hasala.status}}</p>\n            <div class="progress-container">\n              <div class="progress">\n                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="{{hasala.donation}}" aria-valuemin="0" aria-valuemax="100" style="width: {{hasala.donation}}%">\n                  {{hasala.donation}}%\n                </div>\n              </div>\n              <p class="pull-right"><small>EGP</small> {{hasala.target}}</p>\n            </div>\n          </div>\n          <div class="col-sm-12">\n            <div class="btn-group" ng-if="!hasala.isTerminated">\n              <a ui-sref="hasala({ hasalaId: hasala.id })" class="btn btn-primary">View</a>\n              <a href="" class="btn btn-success">Add Followup</a>\n              <a href="" class="btn btn-danger">Terminate</a>\n            </div>\n            <div class="isTerminated" ng-if="hasala.isTerminated">\n              Pending termination\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n'),a.put("app/hasalat/show/show.html",'<div class="container">\n\n  <div class="row">\n    <div class="col-sm-6">\n      <h1>{{hasala.details.name}}</h1>\n    </div>\n    <div class="col-sm-2 col-sm-offset-2">\n      <a class="btn btn-primary btn-block">Edit</a>\n    </div>\n    <div class="col-sm-2">\n      <a class="btn btn-danger btn-block">Terminate</a>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-6">\n      <div class="row">\n        <div class="col-sm-8">\n          <div class="progress-container">\n            <div class="progress">\n              <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="{{hasala.details.donation}}" aria-valuemin="0" aria-valuemax="100" style="width: {{hasala.details.donation}}%">\n                {{hasala.details.donation}}%\n              </div>\n            </div>\n            <p class="pull-right"><small>EGP</small> {{hasala.details.target}}</p>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-sm-12">\n        <p>Description:</p>\n        <p>{{hasala.details.description}}</p>\n        </div>\n      </div>\n      <div class="row">\n\n      </div>\n    </div>\n\n\n    <div class="col-sm-6">\n      <img src="{{hasala.details.photo}}" alt="{{hasala.details.name}}" class="img-thumbnail img-responsive pull-right">\n    </div>\n  </div>\n\n\n</div>\n'),a.put("app/ngo/show/show.html","ngo profile\n")}]),angular.module("hasalaNgo").controller("hasalatIndexController",["getHasalatList",function(a){this.ngo="Masr El Kheir",this.list=a}]).factory("getHasalatList",[function(){return hasalatList.reverse()}]);var hasalatList=[{id:0,name:"hasala name",photo:"http://lorempixel.com/400/250/",donation:25,target:1e3,status:"expired",isTerminated:0},{id:1,name:"another hasala name",photo:"http://lorempixel.com/400/250/",donation:75,target:7e3,status:"active",isTerminated:0},{id:2,name:"onemore hasala name",photo:"http://lorempixel.com/400/250/",donation:30,target:500,status:"active",isTerminated:0},{id:3,name:"three hasala name",photo:"http://lorempixel.com/400/250/",donation:30,target:500,status:"active",isTerminated:1}];angular.module("hasalaNgo").controller("hasalatShowController",["$stateParams","getHasalaDetails",function(a,t){this.details=t}]).factory("getHasalaDetails",[function(){return this.getHasala=function(a){return hasalatList[a]},data}]);var data={id:1,name:"Haga Soraya vegetable business",photo:"http://lorempixel.com/500/300/",donation:25,target:1e3,status:"expired",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",nDoners:10,nDonation:10,nFollowers:50,nShares:100,nViews:200,avgDonationsTime:100,avgDonationsUser:20,dateCreated:"2016-12-10 16:49:30 +0200",deadline:"2017-12-10 16:49:30 +0200",updates:[{title:"Haga Soraya bought her new shalk",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",photo:"http://lorempixel.com/300/100/",timestamp:"2016-12-10 16:49:30 +0200"},{title:"Haga Soraya bought her new shalk",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",timestamp:"2016-12-10 16:49:30 +0200"},{title:"Haga Soraya bought her new shalk",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",photo:"http://lorempixel.com/300/100/",timestamp:"2016-12-10 16:49:30 +0200"}],nMilestonesDone:2,milestones:[{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:1},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:1},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:1},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:0},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:0}]};angular.module("hasalaNgo").controller("ngoShowController",["$stateParams","getNgoDetails",function(a,t){this.details=t}]).factory("getNgoDetails",[function(){return"hello"}]);