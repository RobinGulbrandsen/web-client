angular.module( 'app', [
  'templates-app',
  'templates-common',
  'app.home',
  'ui.router',
  'ui.bootstrap'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  
});