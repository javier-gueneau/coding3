
let y=[2,3,5,9,10];


let indice=3
let valorAdicional=55

let arr1=[]
for(let i=0;i<y.length;i++ ){
    if(i<indice){
        arr1.push(y[i])
    } 
    else if(i==indice){
        arr1.push(valorAdicional)
    }
    else{
        arr1.push(y[i])
    }
}

console.log(arr1)