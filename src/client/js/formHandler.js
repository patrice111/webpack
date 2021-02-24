function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkUrl(formText))
    console.log("::: Form Submitted :::")

    
    fetch('http://localhost:8081/article', {
        method: "POST",
        credentials: "same-origin",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({url: formText}),
    })
    .then(res => {
        return res.json()
    })
    .then(function(res) {
        document.getElementById("positive").innerHTML = `Positive: ${res.positive}`;
        document.getElementById("neutral").innerHTML = `Neutral: ${res.neutral}`;
        document.getElementById("negative").innerHTML = `Negative: ${res.negative}`;
        document.getElementById("without sentiment").innerHTML = `Without Sentiment: ${res.without_sentiment}`;
    })
}

    
export { handleSubmit }
