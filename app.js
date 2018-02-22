console.log('Hello bro!');

const Twit = require('twit');
// const Twitter = require('twitter-node-client');
const Config = require('./config');
// console.log(Config);

var T = new Twit(Config)


// T.get('statuses/home_timeline', { count: 1}, function(err, data, response) {
//   console.log(data)
// });

var stream = T.stream('statuses/filter', {track : 'bitcoin'});

stream.on('tweet', function (tweet) {
  console.log(`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}
               ${tweet.text}`);
})
