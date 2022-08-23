import instance from "./index";

const axios = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance
                .get(url, { params })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            instance
                .post(url, JSON.stringify(params))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    }
};

export default axios;
