const tweetSubmit = document.querySelector("form");
let counterGlobal = 0;

tweetSubmit.addEventListener("submit", function(event){
    event.preventDefault();
    const tweetContent = document.querySelector(".twitter_form").value;
    const tweetToFeed = document.createElement("li");
    tweetToFeed.textContent = tweetContent;
    const twitterFeed = document.querySelector(".twitter_feed");
    twitterFeed.insertBefore(tweetToFeed, twitterFeed.firstChild);
    const twitterBox = document.querySelector(".twitter_form");
    twitterBox.value = "";
});

const characters = document.querySelector(".twitter_form");
characters.addEventListener("input", function(inputEvent){
   let charNum = document.querySelector(".counter");
   let charCount = inputEvent.target.value.length;
   charNum.textContent = charCount;
   (charCount >= 281) ? charNum.style.color = "red" : charNum.style.color = "black";
});
