function investETH(callback) {
    myContract.investETH().send().then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });
}

