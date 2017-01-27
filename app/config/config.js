myApp.config(

	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/teams');
		$stateProvider
			.state('teams', {
				url: '/teams',
        		templateUrl: 'app/views/teams.html',
				controller: 'teamsController'
			}
		).state('teamName', {
			url:'/teams/:teamName',
			templateUrl: 'app/views/team.html',
	
		}
		);
	}
);
