angular.module("hasalaNgo",["ui.bootstrap","picardy.fontawesome","ui.router"]),angular.module("hasalaNgo").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,n,s){s.html5Mode(!0).hashPrefix("!"),n.otherwise("/"),a.state("hasalat",{url:"/hasalat",templateUrl:"app/hasalat/index/index.html",controller:"hasalatIndexController as hasalat"}).state("hasala",{url:"/hasalat/:hasalaId",templateUrl:"app/hasalat/show/show.html",controller:"hasalatShowController as hasala"}).state("hasalaTerminate",{url:"/hasala/:hasalaId/terminate",templateUrl:"app/hasalat/terminate/terminate.html",params:{hasalaName:null},controller:"hasalatTerminateController as hasalaTerminateCtl"}).state("ngoShow",{url:"/",templateUrl:"app/ngo/show/show.html",controller:"ngoShowController as ngo"})}]),angular.module("hasalaNgo").run(["$templateCache",function(a){a.put("app/ngo/show/show.html",'<div class="container ngo-container">\n  <div class="row info">\n    <img src="{{ngo.details.cover}}" alt="{{ngo.details.name}}" class="img-thumbnail">\n    <img src="{{ngo.details.logo}}" alt="{{ngo.details.name}}" class="img-thumbnail img-circle logo">\n    <h1>{{ngo.details.name}}</h1>\n  </div>\n\n  <div class="row info">\n    <div class="col-sm-8 col-sm-offset-2">\n      <p class="description">{{ngo.details.description}}</p>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-8 col-sm-offset-2 category">\n      <span ng-repeat="category in ngo.details.categories track by $index">\n        {{category}}\n      </span>\n    </div>\n  </div>\n\n\n\n  <div class="row">\n    <h3>Stats</h3>\n    <div class="stats">\n      <div class="col-sm-3">\n        <p><span>{{ngo.details.nFollowers}}</span> Followers</p>\n      </div>\n\n      <div class="col-sm-3">\n        <p><span>{{ngo.details.nViews}}</span> Views</p>\n      </div>\n\n      <div class="col-sm-3">\n        <p><span>{{ngo.details.nDonors}}</span> Donors</p>\n      </div>\n\n      <div class="col-sm-3">\n        <p><span>{{ngo.details.nDonations}}</span> Donations</p>\n      </div>\n\n      <div class="col-sm-3">\n        <p><span>{{ngo.details.nHasalat}}</span> Hasalat</p>\n      </div>\n\n      <div class="col-sm-3">\n        <p><span>{{ngo.details.nHasalatFinished}}</span> Hasalat Finished</p>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n'),a.put("app/hasalat/index/index.html",'<div class="container hasalat-container">\n\n  <div class="row">\n    <div class="col-sm-6">\n      <h1> {{hasalat.ngo}}\'s hasalat </h1>\n    </div>\n    <div class="col-sm-2 col-sm-offset-4">\n      <a href="#" class="btn btn-success btn-block">New Hasala</a>\n    </div>\n  </div>\n\n  <div class="row">\n    <div ng-repeat="hasala in hasalat.list">\n      <div class="col-sm-4">\n        <div class="container-fluid __container">\n          <div class="col-sm-12">\n            <a ui-sref="hasala({ hasalaId: hasala.id })"><img src="{{hasala.photo}}" alt="{{hasala.name}}" class="img-thumbnail img-responsive"></a>\n            <h2><a ui-sref="hasala({ hasalaId: hasala.id })">{{hasala.name}}</a></h2>\n          </div>\n          <div class="col-sm-12">\n            <p>Status: {{hasala.status}}</p>\n            <div class="progress-container">\n              <uib-progressbar class="" value="hasala.donation" type="primary">\n                {{hasala.donation}}%\n              </uib-progressbar>\n              <p class="pull-right"><small>EGP</small> {{hasala.target}}</p>\n            </div>\n          </div>\n          <div class="col-sm-12">\n            <div class="btn-group" ng-if="!hasala.isTerminated">\n              <a ui-sref="hasala({ hasalaId: hasala.id })" class="btn btn-primary">View</a>\n              <a href="" class="btn btn-success">Add Followup</a>\n              <a ui-sref="hasalaTerminate({ hasalaId: hasala.id, hasalaName: hasala.name })" class="btn btn-danger">Terminate</a>\n            </div>\n            <div class="isTerminated" ng-if="hasala.isTerminated">\n              Pending termination\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n'),a.put("app/hasalat/show/show.html",'<div class="container">\n  <div class="row">\n    <div class="col-sm-6">\n      <h1>{{hasala.details.name}}</h1>\n    </div>\n    <div class="col-sm-2 col-sm-offset-2">\n      <a class="btn btn-primary btn-block">Edit</a>\n    </div>\n    <div class="col-sm-2">\n      <a class="btn btn-danger btn-block" ui-sref="hasalaTerminate({ hasalaId: hasala.details.id, hasalaName: hasala.details.name })">Terminate</a>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-6">\n      <div class="row">\n        <div class="col-sm-8">\n          <div class="progress-container">\n            <uib-progressbar class="" value="hasala.details.donation" type="primary">\n              {{hasala.details.donation}}%\n            </uib-progressbar>\n            <p class="pull-right"><small>EGP</small> {{hasala.details.target}}</p>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-sm-12">\n        <p>Description:</p>\n        <p>{{hasala.details.description}}</p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-sm-12">\n          <p>Created: {{hasala.getDate(hasala.details.dateCreated)}}</p>\n          <p>Expires: {{hasala.getDate(hasala.details.deadline)}}</p>\n        </div>\n      </div>\n    </div>\n    <div class="col-sm-6">\n      <img src="{{hasala.details.photo}}" alt="{{hasala.details.name}}" class="img-thumbnail img-responsive pull-right">\n    </div>\n  </div>\n\n  <div class="row">\n    <uib-accordion close-others="false">\n      <div uib-accordion-group class="panel-default" is-open="true">\n        <uib-accordion-heading>\n          Stats <fa name="expand" class="pull-right"></fa>\n        </uib-accordion-heading>\n        <div class="container-fluid stats">\n          <div class="row">\n            <div class="col-sm-3">\n              <p><span>{{hasala.details.nFollowers}}</span> Followers</p>\n            </div>\n            <div class="col-sm-3">\n              <p><span>{{hasala.details.nShares}}</span> Shares</p>\n              <p><span>{{hasala.details.nViews}}</span> Views</p>\n            </div>\n            <div class="col-sm-3">\n              <p><span>{{hasala.details.nDoners}}</span> Doners</p>\n              <p><span>{{hasala.details.nDonation}}</span> Donation</p>\n            </div>\n            <div class="col-sm-3">\n              <p><span>{{hasala.details.avgDonationsTime}}</span> Average don. per time</p>\n              <p><span>{{hasala.details.avgDonationsUser}}</span> Average don. per user</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div uib-accordion-group class="panel-default" is-open="true">\n        <uib-accordion-heading>\n          Milestones <fa name="expand" class="pull-right"></fa>\n          <p class="pull-right"><strong>{{hasala.details.nMilestonesDone}}</strong> out of {{hasala.details.nMilestones}} completed</p>\n        </uib-accordion-heading>\n        <div class="container-fluid">\n          <div ng-repeat="milestone in hasala.details.milestones">\n            <div class="row milestones">\n              <div class="col-sm-1 order">{{$index+1}}</div>\n              <div class="col-sm-6">\n                <h5>{{milestone.title}}</h5>\n                <p>{{milestone.description}}</p>\n              </div>\n              <div class="col-sm-2 col-sm-offset-2">\n                <h4>Target: EGP <strong>{{milestone.target}}</strong></h4>\n                <div ng-if="milestone.done" class="bg-success">Milestone Achieved</div>\n                <div ng-if="!milestone.done">\n                  <a class="btn btn-primary btn-block">Mark as Achieved</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div uib-accordion-group class="panel-default" is-open="true">\n        <uib-accordion-heading>\n          Follow Ups <fa name="expand" class="pull-right"></fa>\n          <a class="btn btn-success">Add Follow up</a>\n        </uib-accordion-heading>\n        <div class="container-fluid">\n          <div ng-repeat="update in hasala.details.updates">\n            <div class="row">\n              <div class="col-sm-8 col-sm-offset-2 updates">\n                <div class="row">\n                  <div class="col-sm-8"><h3>{{update.title}}</h3></div>\n                  <div class="col-sm-4"><p>{{hasala.getDate(update.timestamp)}}</p></div>\n                </div>\n                <div ng-if="update.photo">\n                  <div class="col-sm-12">\n                    <img src="{{update.photo}}" alt="{{update.title}}" class="img-thumbnail img-responsive">\n                  </div>\n                </div>\n                <div class="row">\n                  <div class="col-sm-12"><p>{{update.caption}}</p></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </uib-accordion>\n  </div>\n\n</div>\n'),a.put("app/hasalat/terminate/terminate.html",'<div class="container">\n  <div class="row">\n    <h1>Terminate Hasala</h1>\n  </div>\n  <div class="row">\n    <div class="col-sm-6">\n      <form name="hasalaTerminateCtl.form" ng-submit="hasalaTerminateCtl.terminate(hasalaTerminateCtl.formData)">\n        <div class="checkbox">\n          <h4>Are you sure you want to terminate <strong>{{hasalaTerminateCtl.name}}</strong>?</h4>\n          <label><input type="checkbox" ng-model="hasalaTerminateCtl.formData.confirm" name="confirm" required="">Yes, I want to terminate this hasala </label>\n        </div>\n\n        <div class="form-group">\n         <label>Please, state the reason</label>\n         <textarea ng-model="hasalaTerminateCtl.formData.reason" class="form-control" required=""></textarea>\n        </div>\n\n        <input type="submit" class="btn btn-danger" value="Send">\n      </form>\n    </div>\n  </div>\n\n\n  <div class="row">\n    <div class="col-sm-6">\n      <p> We will be reviewing your request and contact you.</p>\n    </div>\n  </div>\n\n\n\n\n\n</div>\n')}]),angular.module("hasalaNgo").controller("hasalatIndexController",["getHasalatList",function(a){this.ngo="Masr El Kheir",this.list=a}]).factory("getHasalatList",[function(){return hasalatList.reverse()}]);var hasalatList=[{id:0,name:"hasala name",photo:"http://lorempixel.com/400/250/",donation:25,target:1e3,status:"expired",isTerminated:0},{id:1,name:"another hasala name",photo:"http://lorempixel.com/400/250/",donation:75,target:7e3,status:"active",isTerminated:0},{id:2,name:"onemore hasala name",photo:"http://lorempixel.com/400/250/",donation:30,target:500,status:"active",isTerminated:0},{id:3,name:"three hasala name",photo:"http://lorempixel.com/400/250/",donation:30,target:500,status:"active",isTerminated:1}];angular.module("hasalaNgo").controller("hasalatShowController",["$stateParams","getHasalaDetails",function(a,n){this.details=n,this.getDate=function(a){var n=new Date(a);return n.toLocaleString()}}]).factory("getHasalaDetails",[function(){return this.getHasala=function(a){return hasalatList[a]},data.nMilestones=data.milestones.length,data}]);var data={id:1,name:"Haga Soraya vegetable business",photo:"http://lorempixel.com/500/300/",donation:25,target:1e3,status:"expired",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",nDoners:10,nDonation:10,nFollowers:50,nShares:100,nViews:200,avgDonationsTime:100,avgDonationsUser:20,dateCreated:"2016-12-10 16:49:30 +0200",deadline:"2017-12-10 16:49:30 +0200",updates:[{title:"Haga Soraya bought her new shalk",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",photo:"http://lorempixel.com/600/300/",timestamp:"2016-12-10 16:49:30 +0200"},{title:"Haga Soraya bought her new shalk",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",timestamp:"2016-12-10 16:49:30 +0200"},{title:"Haga Soraya bought her new shalk",caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",photo:"http://lorempixel.com/500/400/",timestamp:"2016-12-10 16:49:30 +0200"}],nMilestonesDone:3,milestones:[{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:1},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:1},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:1},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:0},{title:"Haga Soraya to buy her new shalk",target:200,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",done:0}]};angular.module("hasalaNgo").controller("hasalatTerminateController",["$stateParams","terminateHasala",function(a,n){this.hasala={name:a.hasalaName,id:a.hasalaId},this.terminate=function(a,n){}}]).factory("terminateHasala",["$http",function(a){return this}]),angular.module("hasalaNgo").controller("ngoShowController",["getNgoDetails",function(a){this.details=a}]).factory("getNgoDetails",[function(){return ngodata}]);var ngodata={name:"Masr El Kheir",cover:"http://lorempixel.com/1200/300/",logo:"http://lorempixel.com/300/300/",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",categories:["Health","Eduation","Health","Eduation","Health","Eduation","Health","Eduation"],nFollowers:100,nViews:1e3,nDonors:12,nDonations:100,nHasalat:4,nHasalatFinished:4};