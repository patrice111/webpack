function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForName(formText)
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
        document.getElementById('Positive').innerHTML =res.score_tag
        // put remaining element
    })
}

/*
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
            document.getElementById('score_tag').innerHTML =res.score_tag
            document.getElementById("positive").innerHTML = `Positive: ${res.positive}`;
            document.getElementById("neutral").innerHTML = `Neutral: ${res.neutral}`;
            document.getElementById("negative").innerHTML = `Negative: ${res.negative}`;
            document.getElementById("without_sentiment").innerHTML = `Without Sentiment: ${res.without_sentiment}`;
        })

*/        
export { handleSubmit }
