const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');
const apiKey = "NOOu6bRUWt0aoBKl4Id8uA==nNSKlO3UjLGcc3UH";

const options = {
    method: "GET",
    headers:{
        'X-Api-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=';

async function getJoke(){
    try {
        jokeEl.innerText = 'Updating...'

        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
    
        const response = await fetch(apiURL,options)
        const data = await response.json()
    
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke';
    
        jokeEl.innerText = data[0].joke; 
    } catch (error) {
        jokeEl.innerText = "An error happenedd, Please try again..";

        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke';
        console.log(Error)
    }
    

}
btnEl.addEventListener('click',getJoke);