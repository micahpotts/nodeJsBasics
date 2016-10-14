//Problem: we need a simple way to look at a user's badge count and JavaScript points
//Solution use node,js to connect to treehouse's api to get profile information to print out

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)
//Read the data
//Parse the data
//Print the data
printMessage("Micah", 1000, 2000000);