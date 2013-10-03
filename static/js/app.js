var WEBAPP = WEBAPP || {};

// voert meteen uit
(function () {
	// Data objecten
	WEBAPP.schedule = {
		title:'Schedule',
		description:'Pool A - Schedule',
		items: [
			{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
		    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};

	WEBAPP.game = {
		title:'Game',
		description:'Pool A - Score: Boomsquad vs. Burning Snow',
		items: [
			{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
		    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
		    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
		    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
		    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
		    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
		    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
		    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
		    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
		    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
		    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
		    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
		    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
		    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
		    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
		    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
		    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
		    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
		    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
		    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
		    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
		    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
		    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		],
		winner: [
			{ team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		]
	};

	WEBAPP.ranking = {
		title:'Ranking',
		description:'Pool A - Ranking',
		items: [
			{ team: "Chasing", win: "2", lost: "2", sw: "7", sl: "9", pw: "35", pl: "39", ratio: "-4"}, 
		    { team: "Boomsquad", win: "2", lost: "2", sw: "9", sl: "8", pw: "36", pl: "34" , ratio: "-2"},
		    { team: "Burning Snow", win: "3", lost: "1", sw: "11", sl: "4", pw: "36", pl: "23" , ratio: "+13"},
		    { team: "Beast Amsterdam", win: "2", lost: "2", sw: "6", sl: "8", pw: "30", pl: "34" , ratio: "-6"},
		    { team: "Amsterdam Money Gang", win: "1", lost: "3", sw: "6", sl: "10", pw: "30", pl: "37" , ratio: "-7"}
		]
	};
	
	// Controller Init
	WEBAPP.controller = {
		init: function () {
			// Initialize router
			WEBAPP.router.init();
		}
	};

	// Router
	WEBAPP.router = {
		init: function () {
	  		routie({
			    '/game': function() {
			    	WEBAPP.page.game();
				},
			    '/schedule': function() {
			    	WEBAPP.page.schedule();
			    },

			    '/ranking': function() {
			    	WEBAPP.page.ranking();
			    },
			    '*': function() {
			    	WEBAPP.page.game();
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
                sections = $('section[data-route]'),
                section = $('[data-route=' + route + ']')[0];  

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};

	// Pages
	WEBAPP.page = {
		game: function () {
			Transparency.render($('[data-route=game')[0], WEBAPP.game);
			WEBAPP.router.change();
		},

		schedule: function () {
			Transparency.render($('[data-route=schedule')[0], WEBAPP.schedule);
			WEBAPP.router.change();
		},

		ranking: function () {
			Transparency.render($('[data-route=ranking')[0], WEBAPP.ranking);
			WEBAPP.router.change();
		}
	}
	// DOM ready
	onDomReady(function () {
		// Kickstart WEBAPPlication
		WEBAPP.controller.init();
	});
	
})();