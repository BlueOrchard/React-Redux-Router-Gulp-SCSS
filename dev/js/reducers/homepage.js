const HomeContent = (state = {}, action) => {
    switch(action.type){
        case 'POPULATE':
            return {
                populated: true
            }
        default:
            return {
                populated: false
            }          
    }
}

export default HomeContent;