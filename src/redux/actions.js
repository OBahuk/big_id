export function setCountries(usersArray) {
    return {
        type: 'SET_COUNTRIES',
        payload: usersArray
    };
};

export function fetchCountries() {
    return dispatch => {
        fetch('http://13.69.54.84:9000/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const users = transformData(data);
                dispatch(setCountries(users));
            });
    };
};

export function sendNewCountry(data) {
    return dispatch => {
        fetch('http://13.69.54.84:9000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchCountries());
            });
    }
}

function transformData(json) {
    const countriesArr = [];
    json.forEach(item => {
        countriesArr.push([item.country, item.users])
    });
    return countriesArr;
}