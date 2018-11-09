
			// set up google map
			var map;

			function initMap() {
			var locat = {lat:25.044415, lng:121.513821};

			map = new google.maps.Map(document.getElementById('map'), {
			center: locat,
			zoom: 18
			});

			var marker = new google.maps.Marker({
			position: locat,
			map: map,
			title:'Restaurant Dionysus'
			});

			marker.setMap(map);

			var contentString = "<h1>Restaurant Dionysus</h1>";

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			infowindow.open(map, marker);
			marker.addListener('click', function(){
				infowindow.open(map, marker);
			});

			}
			