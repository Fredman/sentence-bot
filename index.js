console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//
//  tweet 'hello world!'
//
//tweetSentence();
setInterval(tweetSentence, 1000*10);

function tweetSentence(){
  var tweet = {status : '#coding with node.js'};
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    //console.log(data)
    if( err){
      console.log('Il y a eu un problème !');
    }else {
      console.log('Sentence tweeted !');
    }
  }
}
