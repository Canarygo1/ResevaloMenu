const Business = (id) => {
    switch (id){
        case 'madremiarolls':
            return require('./business-data/madre-mia-rolls.json')
        case 'ervaza':
            return require('./business-data/ervaza.json')
        case 'privilege':
            return require('./business-data/privilege.json')
    }
};

export default Business;