function getSuspender(promise) {
    let status = "pending";
    let result;

    let suspender = promise.then(
        (res) => {
            status = "success";
            result = res;
        },
        (err) => {
            status = "error";
            result = err;
        }
    );

    return {
        read() {
            switch (status) {
                case "pending":
                    throw suspender;
                case "error":
                    throw result;
                default:
                    return result;
            }
        },
    };
}

export function useFetch(url) {

    const promise = fetch(url)
        .then((res) => res.json())
        .then((data) => data)

    return getSuspender(promise);
}