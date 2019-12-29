const basicAuth = 'Basic ' + btoa('admin:district');
const headers = new Headers({
    'Authorization': basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

class Api {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };
    getCharts = () => {
        return fetch(`${this.config.baseUrl}/charts`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers,
            })
            .catch(error => error)
            .then(response => { return response.json() })
    }

    getDashboards = () => {
        return fetch(`${this.config.baseUrl}/dashboards/`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers,
            }).catch(error => error)
            .then(response => response.json())
    }



}

export default new Api();