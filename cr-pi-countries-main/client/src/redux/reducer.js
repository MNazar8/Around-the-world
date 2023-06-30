const initialState = {
    countries: [],
    activities: [],
    countries2: [],
    detail: [],
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state,
                countries: payload
            }

        case 'GET_COUNTRY_DETAIL':
            return {
                ...state,
                detail: payload
            }


        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: payload
            }

        default: return state
    }
}