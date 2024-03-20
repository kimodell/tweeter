/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  //event listener to submit POST request asynchronously
  $("#tweet-form").on("submit", function(event) {
    //prevent default behaviour
    event.preventDefault();
    //turn form data into a query string
    let formData = $(this).serialize();
    //POST request to send serialized data to server
    $.post("/tweets", formData)
      .then(() => {
        //add stuff here later
      });
  });

  const loadTweets = function() {
    //GET request to load tweets using renderTweets function
    $.get("/tweets")
      .then((res) => {
        renderTweets(res);
      });
  };

loadTweets();

});


const renderTweets = function(tweets) {
  // loops through tweets
  tweets.forEach(tweet => {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('.tweet-container').prepend($tweet);
  });
};

//function to take object with tweet data and return an HTML article containing tweet info
const createTweetElement = function(tweet) {

  //Utilize timeAgo library to format tweet submission dates
  const timeAgo = timeago.format(tweet.created_at, 'en_US');

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
        <p>${timeAgo}</p>
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
  renderTweets(formData);
});