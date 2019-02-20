function investETH(trx, callback) {
    myContract.investETH().send({
        callValue: trx
    }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });
}


