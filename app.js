const axios = require('axios')

axios.get('https://random-data-api.com/api/stripe/random_stripe?size=5').then(res => {
    res.data.forEach(element => {
        const {id, token} = element
        console.log(id, token)
        console.log(returnIds(element))
    });
})

function returnIds(element){
    return element.map((e) => { return e.id})
}