angular
  .module('hasalaNgo')
  .controller('ngoShowController', ['getNgoDetails', function (getNgoDetails) {
    this.details = getNgoDetails;
  }])
  .factory('getNgoDetails', [function () {
    return ngodata;
  }]);

var ngodata = {
  id: '0',
  name: 'Masr El Kheir',
  cover: 'http://lorempixel.com/1200/300/',
  logo: 'http://lorempixel.com/300/300/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  categories: [
    'Health',
    'Eduation',
    'Health',
    'Eduation',
    'Health',
    'Eduation'
  ],
  nFollowers: 100,
  nViews: 1000,
  nDonors: 12,
  nDonations: 100,
  nHasalat: 4,
  nHasalatFinished: 4,
  story: 'this is the long description'
};
