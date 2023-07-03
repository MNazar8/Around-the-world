const initialState = {
    countries: [],
    activities: [],
    countries2: [],
    detail: [],
    filteredCountries: null
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state,
                countries: payload
            }

        case 'GET_COUNTRY_BY_NAME':
            return {
                ...state,
                countries: payload, 
                filteredCountries: payload
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

        case 'FILTER_BY_CONTINENTS':
            const allCountriesFiltered = payload === "All"
                ? null
                : state.countries.filter(country => country.continent === payload);

            return {
                ...state,
                filteredCountries: allCountriesFiltered
            };

        case 'FILTER_BY_ACTIVITIES':
            const selectedActivity = payload;
            if (selectedActivity === 'All') {
                return {
                    ...state,
                    filteredCountries: null
                };
            } else {
                const allCountriesFilteredByActivity = state.countries.filter(country => {
                    return country.Activities.some(activity => activity.name === selectedActivity);
                });

                return {
                    ...state,
                    filteredCountries: allCountriesFilteredByActivity
                };
            }

        case 'ORDER_BY_NAME':
            const orderBy = payload;
            if (orderBy === 'All') {
                return {
                    ...state,
                    filteredCountries: null
                };
            }

            if (orderBy === 'OrderAZ') {
                const countriesByNameAsc = [...state.countries].sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
                    return 0;
                })
                return {
                    ...state,
                    filteredCountries: countriesByNameAsc
                };
            }

            if (orderBy === 'OrderZA') {
                const countriesByNameDes = [...state.countries].sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
                    return 0;
                });
                return {
                    ...state,
                    filteredCountries: countriesByNameDes
                };
            }
            break;

        case 'ORDER_BY_POPULATION':
            const orderByNumber = payload;
            if (orderByNumber === 'All') {
                return {
                    ...state,
                    filteredCountries: null
                };
            }

            if (orderByNumber === 'Minortomajor') {
                const MinorToMajor = [...state.countries].sort(function (a, b) {
                    return a.population - b.population;
                })

                return {
                    ...state,
                    filteredCountries: MinorToMajor
                };
            }

            if (orderByNumber === 'MajortoMinor') {
                const MajorToMinor = [...state.countries].sort(function (a, b) {
                    return b.population - a.population;
                })

                return {
                    ...state,
                    filteredCountries: MajorToMinor
                };
            }
            break;

        default: return state
    }
}