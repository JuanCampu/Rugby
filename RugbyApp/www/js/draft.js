// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

  .controller('DraftCtrl', function($scope) {

    $scope.items = [
      {
        logo: './img/c1.jpg'
      },
      {
        logo: './img/c2.jpg'
      },
      {
        logo: './img/c3.jpg'
      },
      {
        logo: './img/c3.jpg'
      },
      {
        logo: './img/c4.png'
      },
      {
        logo: './img/c5.png'
      },
      {
        logo: './img/c1.jpg'
      }
    ];

    $scope.comments = [
      {
        avatar: './img/a1.jpg',
        like: '1k',
        comment: 376,
        active: true,
        name: 'Stove',
        text: 'Oh, come on!'
      },
      {
        avatar: './img/a2.jpg',
        img: './img/d1.jpg',
        like: '284',
        comment: 124,
        active: false,
        name: 'Thor',
        text: "Ha! I’m glad you guys didn’t get a DE. You missed your chance to pick up an awesome player! "
      },
      {
        avatar: './img/a3.jpg',
        img: './img/d2.jpg',
        like: '8k',
        comment: 422,
        active: false,
        name: 'Ninja',
        text: 'We shouldn’t have drafted him...'
      },
      {
        avatar: './img/a4.jpg',
        like: '532',
        comment: 142,
        active: true,
        name: 'Kid',
        text: 'There are many variations of passages of Lorem Ipsum available,'
      },
      {
        avatar: './img/a5.png',
        img: './img/d3.jpg',
        like: '190k',
        comment: 5532,
        active: true,
        name: 'Zzz',
        text: 'Lorem ipsum dolor sit amet..'
      },
      {
        avatar: './img/a6.jpg',
        like: '12k',
        comment: 376,
        active: false,
        name: 'David Bone',
        text: 'English versions from the 1914 translation by H. Rackham.'
      }
    ]
  });

