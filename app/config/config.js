myApp.config(

	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/teams');
		$stateProvider
			.state('teams', {
				url: '/teams',
        		templateUrl: 'app/views/teams.html',
				controller: 'teamsController'
			}
		).state('team', {
			url:'/team/:tname',
			templateUrl: 'app/views/team.html',
	
		}
		);
	}
);
