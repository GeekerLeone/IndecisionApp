function square(x){
    return x * x;
}
console.log(square(2));

const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(3));

const squareArrow_one = (x) => x * x;
console.log(squareArrow_one(4));

const getFirstName = (fullName) => fullName.split(" ")[0];

const multiplier = {
    number: [10, 20, 30],
    multiplyBy: 3,
    printMultiply(){
        return this.number.map((num) => this.multiplyBy * num);
    }
};
console.log(multiplier.printMultiply());

