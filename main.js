const CitiesDatabase = {}

CitiesDatabase.cities = []

//function to create city objects to store in database
function makeCity(name, yearVisited, cont, imgSrc, array){
	CitiesDatabase.cities.push(
		Object.create({},{
			name:{
				value: name
			},
			year:{
				value: yearVisited
			},
			image:{
				value: imgSrc
			},
			attractions:{
				value: array
			},
			continent:{
				value:cont
			}
		})
	)

}

makeCity("Chicago, IL", 2015, "NA", "http://www.elfpreschool.com/wp-content/uploads/2016/06/lincoln-park-neighborhood-chicago.jpg", ["The Willis Tower", "Navy Pier", "Giordano's deep dish pizza", "The Bean", "Ed Debevic's"])
makeCity("Houghton, MI", 2014, "NA", "https://i.pinimg.com/originals/36/c3/fa/36c3fa0ae836837162296f424cb51f38.jpg", ["Mt. Ripley", "Winter Carnival", "Breakers to Bridges Paddle Festival", "Keewanawesomefest", "Quincy Mine"])
makeCity("Milwauke, WI", 2016, "NA", "https://rfsdelivers.com/images/local/milwaukee-top.jpg", ["Summerfest", "Milwaukee Art Museum", "North Point Light", "South Shore park", "Reiman Aquarium at Discovery World"])
makeCity("Toronto, ON, CA", 2011, "NA", "https://www.toronto.ca/wp-content/uploads/2018/03/8842-toronto-skyline.jpg", ["CN Tower", "Eaton Centre", "Royal Ontario Museum", "Distillery Distric", "Rogers Centre"])
makeCity("Gulf Shores, AL", 2017, "NA", "https://static.rootsrated.com/image/upload/s--XdtIB5fD--/t_rr_large_natural/kxnmyweztfq9lbig4xms.jpg", ["Gulf State Park", "Battleship Memorial Park", "Gulf Coast Escape Room", "Gulf Shores Museum", "Fort Morgan" ])
makeCity("Myrtle Beach, SC", 2003, "NA", "http://2017images.imgix.net/myrtlebeachresorts1.jpg", ["Myrtle Beach", "Boardwalk", "Ripley's Believe It or Not", ""])
makeCity("Indianapolis, IN", 2018, "NA", "http://www.allisontransmission.com/images/default-source/careers/5-1-2-bi-img-5-1-2.jpg", [])
makeCity("Orlando, FL", 2004, "NA", "http://greatruns.com/wp-content/uploads/2016/06/downtownOrlando-web-700x469.jpg", [])
makeCity("Pittsburgh, PA", 2010, "NA", "https://vacationidea.com/pix/img25Hy8R/destinations/best-things-to-do-in-pittsburgh-pa_f.jpg", [])

//save database to storage
const saveDatabase = function (databaseObject, localStorageKey){
	const stringifiedDatabase = JSON.stringify(databaseObject)
	localStorage.setItem(localStorageKey, stringifiedDatabase)
}



saveDatabase(CitiesDatabase, "CitiesVisited")

