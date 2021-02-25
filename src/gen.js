function* idMaker() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

let it = idMaker();
for (let i = 0; i < 10; i++) {

    console.log(it.next().value); // 0
}
