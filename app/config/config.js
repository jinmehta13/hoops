myApp.config(

	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/teams');
		$stateProvider
			.state('teams', {
				url: '/teams',
        			templateUrl: 'app/views/teams.html',
				controller: 'teamsController'
			}
		);
	}
);
