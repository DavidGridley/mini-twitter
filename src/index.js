const tweetSubmit = document.querySelector("form");
let counterGlobal = 0;

const updateDeleteButtons = () => {
   const deleteButtons = document.querySelectorAll(".delete_button");
   console.log(deleteButtons);
   return deleteButtons;
};

tweetSubmit.addEventListener("submit", function(event){
    event.preventDefault();
    const tweetContent = document.querySelector(".twitter_form");
    const tweetText = tweetContent.value;
    const tweetToFeed = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete_button";
    tweetToFeed.textContent = tweetText;
    tweetToFeed.appendChild(deleteButton);
    const twitterFeed = document.querySelector(".twitter_feed");
    const charNum = document.querySelector(".counter").textContent;
    const warning = document.querySelector(".warning");
    if (charNum <= 280) { 
        twitterFeed.insertBefore(tweetToFeed, twitterFeed.firstChild);
        const twitterBox = document.querySelector(".twitter_form");
        twitterBox.value = "";
        warning.textContent = "";
        updateDelete(deleteButton);
    } else {
        warning.textContent = "Over max character limit!";
        warning.style.color = "red";
    };
});

const characters = document.querySelector(".twitter_form");
characters.addEventListener("input", function(inputEvent){
   let charNum = document.querySelector(".counter");
   let charCount = inputEvent.target.value.length;
   charNum.textContent = charCount;
   (charCount >= 281) ? charNum.style.color = "red" : charNum.style.color = "black";
});

function updateDelete(butt){
    butt.addEventListener("click", function(event) {
      const tweet = event.target.parentNode.parentNode;
      const targ = event.target.parentNode;
      tweet.removeChild(targ);  
    });
};