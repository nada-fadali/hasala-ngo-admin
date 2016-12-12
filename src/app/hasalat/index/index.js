angular
  .module('hasalaNgo')
  .controller('hasalatIndexController', ['getHasalatList', function (getHasalatList) {
    this.ngo = "Masr El Kheir";
    this.list = getHasalatList;
  }])
  .factory('getHasalatList', [function () {
    return hasalatList.reverse();
  }]);

var hasalatList = [
  {
    id: 0,
    name: 'hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 25,
    target: 1000,
    status: 'expired',
    isTerminated: 0
  },
  {
    id: 1,
    name: 'another hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 75,
    target: 7000,
    status: 'active',
    isTerminated: 0
  },
  {
    id: 2,
    name: 'onemore hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 30,
    target: 500,
    status: 'active',
    isTerminated: 0
  },
  {
    id: 3,
    name: 'three hasala name',
    photo: 'http://lorempixel.com/400/250/',
    donation: 30,
    target: 500,
    status: 'active',
    isTerminated: 1
  }
];

