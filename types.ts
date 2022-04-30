import axios from 'axios'

interface iResponse{
        id: number,
        uid: string,
        valid_card: string,
        token: string,
        invalid_card: string,
        month: string,
        year: string,
        ccv: string,
        ccv_amex: string
      
}

axios.get('https://random-data-api.com/api/stripe/random_stripe?size=5').then(res => {
    res.data.forEach((element: iResponse) => {
        const {id, token} = element
        console.log(id, token) 
    });
    console.log(returnIds(res.data))
})

function returnIds(resArr: iResponse[]) {
    return resArr.map((e) => { return e.id})
}