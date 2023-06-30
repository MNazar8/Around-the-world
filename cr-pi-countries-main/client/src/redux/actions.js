import axios from 'axios'
const URL = 'http://localhost:3001/countries'

export function getCountries() {
    return async function (dispatch) {
        try {
            var response = await axios.get(URL)
            return dispatch({
                type: 'GET_ALL_COUNTRIES',
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var response = await axios.get(URL + `/${id}`)
            return dispatch({
                type: 'GET_COUNTRY_DETAIL',
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            var response = await axios.get('http://localhost:3001/activities')
            return dispatch({
                type: 'GET_ACTIVITIES',
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivity(payload) {
    return function (dispatch) {
        try {
             axios.post('http://localhost:3001/activities', payload)
                .then((data) =>{
                    return dispatch({
                        type: 'POST_ACTIVITIES',
                        payload: data
                    });
                })
        } catch (error) {
            console.log(error)
        }
    }
}
