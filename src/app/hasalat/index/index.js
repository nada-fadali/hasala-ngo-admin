angular
  .module('hasalaNgo')
  .controller('hasalatIndexController', ['getHasalatList', function (getHasalatList) {
    var vm = this;
    this.ngo = "Masr El Kheir";
    this.list = getHasalatList;
    this.categories = categories;
    this.selectedCategory = null;

    this.filterHasalat = function (category) {
      vm.selectedCategory = category;
    };
  }])
  .factory('getHasalatList', [function () {
    return hasalatList.reverse();
  }]);

var categories = [
  'Health',
  'Eduation',
  'Social'
];

var hasalatList = [
  {
    id: 0,
    name: 'hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 25,
    target: 1000,
    status: 'expired',
    isTerminated: 0,
    category: 'Health'
  },
  {
    id: 1,
    name: 'another hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 75,
    target: 7000,
    status: 'active',
    isTerminated: 0,
    category: 'Eduation'
  },
  {
    id: 2,
    name: 'onemore hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 30,
    target: 500,
    status: 'active',
    isTerminated: 0,
    category: 'Social'
  },
  {
    id: 3,
    name: 'three hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 30,
    target: 500,
    status: 'active',
    isTerminated: 1,
    category: 'Health'
  }
];

