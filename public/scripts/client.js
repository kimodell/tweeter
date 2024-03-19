/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1710628931892
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1710715331892
  }
];

const renderTweets = function(tweets) {
  // loops through tweets
  tweets.forEach(tweet => {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('.tweet-container').append($tweet);
  });
}

//function to take object with tweet data and return an HTML article containing tweet info
const createTweetElement = function(tweet) {

  //define tweet based on object
  const { user: { name, avatars, handle }, content: { text }, created_at } = tweet;
  
  //define tweet HTML with applicable info from data above
  let $tweet = $(`
    <article class="tweet">
      <header class="tweet-header">
        <div class="tweet-person">
          <img src="${avatars}" alt="${name}'s avatar" />
          <p>${name}</p>
        </div>
        <div class="tweet-handle">${handle}</div>
      </header>
      <div class="tweet-content">
        <p>${text}</p>
      </div>
      <div class = "tweet-border"></div>
      <footer class="tweet-footer">
        <div class="tweet-date">
          <p>${new Date(created_at).toLocaleString()}</p>
        </div>
        <div class="tweet-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
   
  //return tweet in HTML form
  return $tweet;
};

//const $tweet = createTweetElement(data[0]);
//console.log($tweet);

//$(document).ready(() => $('.tweet-container').append($tweet));

//call renderTweets after DOM fully loaded
$(document).ready(() => {
  renderTweets(data);
});