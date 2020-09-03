const Business = (id) => {
    switch (id){
        case 'madremiarolls':
            return require('./business-data/madre-mia-rolls.json')
        case 'ervaza':
            return require('./business-data/ervaza.json')
    }
};

export default Business;