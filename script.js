const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundButton = document.querySelector(".sound"),
copyButton = document.querySelector(".copy"),
twitterButton = document.querySelector(".twitter");

//random q function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    //
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote"; 
        quoteBtn.classList.remove("loading");
    });
}

soundButton.addEventListener("click", ()=>{
    //
    let utterance = new SpeechSynthesisUtterance( `${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyButton.addEventListener("click", ()=>{
    //
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);