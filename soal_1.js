// 535230177 Eunice Eugenia Karta
function BilPrima(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function ListPrima() {
    for (let i = 1; i <= 1000; i++) {
        if (BilPrima(i)) {
            console.log(i);
        }
    }
}

ListPrima();