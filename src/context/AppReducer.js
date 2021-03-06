export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            debugger
            return {

                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            debugger
            return {

                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}