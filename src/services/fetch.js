
class FetchData {
    constructor () {
        this.opts = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
    }

    getData (url) {
        return new Promise ((resolve, reject) => {
            fetch (url, this.opts)
                .then ((data) => data.json ())
                .then ((result) => resolve (result))
                .catch ((err) => reject (err))
        });
    }

    postData (url, formData) {
        return new Promise ((resolve, reject) => {
            this.opts.method = 'POST';
            this.opts.body = JSON.stringify (formData);
            fetch (url, this.opts)
                .then ((data) => data.json ())
                .then ((result) => resolve (result))
                .catch ((err) => reject (err))
        });
    }

    putData (url, formData) {
        return new Promise ((resolve, reject) => {
            this.opts.method = 'PUT';
            this.opts.body = JSON.stringify (formData);
            fetch (url, this.opts)
                .then ((data) => data.json ())
                .then ((result) => resolve (result))
                .catch ((err) => reject (err))
        });
    }

    deleteData (url) {
        return new Promise ((resolve, reject) => {
            this.opts.method = 'DELETE';
            fetch (url, this.opts)
                .then ((data) => data.json ())
                .then ((result) => resolve (result))
                .catch ((err) => reject (err))
        });
    }
}

export default FetchData;