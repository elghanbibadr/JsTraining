let myCar={
    name:'tesla',
    modele:2023
}
let v;
let version='2';
function updateVersion(v){
  return  v='3'
}

updateVersion(version)
console.log(v)


updateVersion(myCar);

console.log(myCar);