type CarBrands = 'BMW' | 'Lada' | 'Toyota'

interface CarBase {
    year: number
    brand: CarBrands
}

interface BMWBase extends CarBase {
    climatControl: boolean
    brand: 'BMW'
    model: 'x5' | 'x7'
}

interface BMWX5 extends BMWBase {
    model: 'x5'
    value: string
}
interface BMWX7 extends BMWBase {
    model: 'x7'
    value: number
}

type BMW = BMWX5 | BMWX7

interface LadaBase extends CarBase {
    conditioner: boolean
    brand: 'Lada'
}

interface Toyota extends CarBase {
    climatControl: boolean
    brand: 'Toyota'
}

interface LadaBase extends CarBase {
    brand: 'Lada'
    conditioner: boolean
    model: 'priora' | 'vesta'
}

interface Priora extends LadaBase {
    model: 'priora'
    conditioner: boolean
}

interface Vesta extends LadaBase {
    model: 'vesta'
    conditioner: boolean
}

type Lada = Priora | Vesta

type Car = BMW | Lada

function isLadaVesta(car:Car): car is Vesta {
    return car.brand === 'Lada' && car.model === 'vesta'
}

function isBmwX5(car:Car): car is BMWX5 {
    return car.brand === 'BMW' && car.model === 'x5'
}

function fn(car:Car) {
    if (isBmwX5(car)){
        
    }
}