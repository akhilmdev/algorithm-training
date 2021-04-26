function RandomNumberFromStream(stream) {
    let randomNumber = null;

    stream.forEach((element, index) => {
        if (index === 0) {
            randomNumber = element;
        }
        if ((Math.random(0, index + 1) * index + 1) === 1) {
            randomNumber = element;
        }
    })


    return randomNumber;
}

RandomNumberFromStream()