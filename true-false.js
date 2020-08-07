// const name = '0';
//Falsy:
//0
//""
//undefinded
//null
//NaN
//Truthy
//'0',' ', []
let name = 0;
if (name || name == 0) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}