var google = require('googleapis');
var googleAuth = require('google-auth-library');
const path = require('path');
const fs = require('fs');
const auth = require('../auth/auth.js');

// Load client secrets from a local file.
exports.getToken = (fn) => {
	fs.readFile(path.join(__dirname, '../auth/client_secret.json'), function processClientSecrets(err, content) {
	  if (err) {
	    console.log('Error loading client secret file: ' + err);
	    return;
	  }
	  // Authorize a client with the loaded credentials, then call the YouTube API.
	  auth.authorize(JSON.parse(content), (auth) => {
	  	return fn(auth);
	  });
	});
}

exports.getChannel = function(auth) {
	return new Promise((resolve, reject) => {
		var service = google.youtube('v3');
		service.channels.list({
		auth: auth,
		part: 'snippet,contentDetails,statistics',
		forUsername: 'GoogleDevelopers'
		}, function(err, response) {
		if (err) {
		  reject('The API returned an error: ' + err);
		  return;
		}
		var channels = response.items;
		if (channels.length == 0) {
		  reject('No channel found.');
		} else {
			resolve({
				id: channels[0].id,
				title: channels[0].snippet.title,
				views: channels[0].statistics.viewCount
			})
		}
		});
	})
}
