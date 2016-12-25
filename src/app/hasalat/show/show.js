angular
  .module('hasalaNgo')
  .controller('hasalatShowController', ['$stateParams', 'getHasalaDetails', '$uibModal', function ($stateParams, getHasalaDetails, $uibModal) {
    // this.show = getHasalaDetails.getHasala($stateParams.hasalaId);
    var vm = this;
    this.details = getHasalaDetails;

    // handle dates
    this.getDate = function (date) {
      var tmp = new Date(date);
      return tmp.toLocaleString();
    };
    // mark milestones
    vm.completeMilestone = function (index) {
      this.details.milestones[index].done = 1;
    };
    // milestone modal
    this.openMilestoneModal = function (size, parentSelector, index) {
      var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'modalContent.html',
        controller: 'ModalInstanceController',
        controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem
      });
      modalInstance.result.then(function (status) {
        if (status) {
          vm.completeMilestone(index);
        }
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }])
  .controller('ModalInstanceController', ['$uibModalInstance', function ($uibModalInstance) {
    this.status = 0;

    this.ok = function () {
      this.status = 1;
      $uibModalInstance.close(this.status);
    };
    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }])
  .factory('getHasalaDetails', [function () {
    this.getHasala = function (id) {
      return hasalatList[id];
    };
    // return this;

    // get milestones count
    data.nMilestones = data.milestones.length;

    return data;
  }]);

var data = {
  id: 1,
  name: 'Haga Soraya vegetable business',
  photo: 'http://lorempixel.com/500/300/',
  donation: 25,
  target: 1000,
  status: 'expired',
  isEditable: 1,

  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  story: 'This is the long description',

  nDoners: 10,
  nDonation: 10,
  nFollowers: 50,
  nShares: 100,
  nViews: 200,

  avgDonationsTime: 100,
  avgDonationsUser: 20,

  dateCreated: '2016-12-10 16:49:30 +0200',
  deadline: '2017-12-10 16:49:30 +0200',

  updates: [
    {
      title: 'Haga Soraya bought her new shalk',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      photo: 'http://lorempixel.com/600/300/',
      timestamp: '2016-12-10 16:49:30 +0200'
    },
    {
      title: 'Haga Soraya bought her new shalk',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      timestamp: '2016-12-10 16:49:30 +0200'
    },
    {
      title: 'Haga Soraya bought her new shalk',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      photo: 'http://lorempixel.com/500/400/',
      timestamp: '2016-12-10 16:49:30 +0200'
    }
  ],

  nMilestonesDone: 3,
  milestones: [
    {
      title: 'Haga Soraya to buy her new shalk',
      target: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      done: 1
    },
    {
      title: 'Haga Soraya to buy her new shalk',
      target: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      done: 1
    },
    {
      title: 'Haga Soraya to buy her new shalk',
      target: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      done: 1
    },
    {
      title: 'Haga Soraya to buy her new shalk',
      target: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      done: 0
    },
    {
      title: 'Haga Soraya to buy her new shalk',
      target: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      done: 0
    }
  ]
};
