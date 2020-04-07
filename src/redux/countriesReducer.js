export default function countriesReducer(state, action) {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return {
                ...state,
                users: [["Country", "Popularity"], ...action.payload]
            };
        default:
            return state;
    }
}