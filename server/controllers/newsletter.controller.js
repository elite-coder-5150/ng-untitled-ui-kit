const createNewsletter = (newsletterData) => {
    axios.post('/api/newsletter', newsletterData)
        .then(response => {
            console.log('newsletter created: ', response.data);
        }).catch(error => {
            console.error('error creating newsletter: ', error);
        })
}