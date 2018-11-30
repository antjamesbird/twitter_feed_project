const user = () => {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET","http://localhost:3000/assets/user.txt");
        xhr.responseType = 'text';
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject();
            }
        };
        xhr.send();
    });
};

const tweet = () => {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET","http://localhost:3000/assets/tweet.txt");
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject();
            }
        };
        xhr.send();
    });
};

export const loadAllData = () => {
    return Promise.all([tweet(), user()]);
};