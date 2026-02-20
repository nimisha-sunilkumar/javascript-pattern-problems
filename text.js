//1 butterfly prblm
let n=5;
let temp=0;
//upper side
for(let i=1;i<=n;i++){
    let res="";
    temp++;
    //left
    for(let j=1;j<=temp;j++){
        res=res+"* ";
    }
    //middle
    for(let k=1;k<=(n-temp)*4;k++){
        res=res+" ";
    }
    //right
    for(let j=1;j<=temp;j++){
        res=res+"* ";
    }
console.log(res);
}
//lower side
for(let i=1;i<n;i++){
    let res="";
    temp--;
    //left
    for(let j=1;j<=temp;j++){
        res=res+"* ";
    }
    //middle
    for(let k=1;k<=(n-temp)*4;k++){
        res=res+" ";
    }
    //right
    for(let j=1;j<=temp;j++){
        res=res+"* ";
    }
console.log(res);
}

//2 122333444555554444333221 left pattern
let temp=0
for(i=1;i<=9;i++){
let res=""
if(i<=5){
    temp++
}else{
    temp--
}
res=""
for(j=1;j<=temp;j++){
    res=res+temp
}console.log(res)
}

//3 123454321 left pattern
let temp=0
for(i=1;i<=9;i++){
let res=""
if(i<=5){
    temp++
}else{
    temp--
}
for(j=1;j<=temp;j++){
    res=res+j
}console.log(res)
}

//4 12345 top bottom reverse
for(i=1;i<=5;i++){
    let res=""
    for(j=1;j<=6-i;j++){
        res=res+j
    }console.log(res)
}

//5 12345 simple pyramid problem
for(i=1;i<=5;i++){
    let res=""
    for(j=1;j<=i;j++){
        res=res+j;
    }console.log(res)
}

//6 center pyramid odd no of stars
let num=5;
for(let i=1;i<=num;i++){
    res= "";
    for(let k=1;k<=num-i;k++){
        res=res+" ";
    }
    for(let j=1;j<=(2*i-1);j++){ 
        res=res+"*";
    }console.log(res);
}

//7 top bottom pyramid 9,7,5,3,1,3,5,7,9 method space,star ++ --
let space=0
let star=6
for(let i=1;i<=9;i++){
    let res=""
    if(i<=5){
        space++
        star--
    }else{
        space--
        star++
    }
    for(j=1;j<=space;j++){
       res=res+" "
    }
    for(k=1;k<=2*star-1;k++){
        res=res+"*"
    }console.log(res);
}

//8 top bottom pyramid 5,4,3,2,1,2,3,4,5
let num=5;
for(let i=1;i<=num;i++){
    res= "";
    for(let k=1;k<=i;k++){
        res=res+" ";
    }
    for(let j=1;j<=6-i;j++){
        res=res+"* ";
    }console.log(res);
}
for(let i=2;i<=num;i++){
    res= "";
    for(let k=1;k<=6-i;k++){
        res=res+" ";
    }
    for(let j=1;j<=i;j++){
        res=res+"* ";
    }console.log(res);
}


//9 center pyramid
 let num=5;
for(let i=1;i<=num;i++){
    res= "";
    for(let k=1;k<=6-i;k++){
        res=res+" ";
    }
    for(let j=1;j<=i;j++){
        res=res+"* ";
    }console.log(res);
}

//10 top bottom left pattern method temp
let temp=0
for(i=1;i<=9;i++){
    let res=""
    if(i<=5){
        temp++
    }else {
        temp--
    }
    for(let j=1;j<=temp;j++){
        res=res+"*"
    }console.log(res)
}

//11 top bottom right pattern method space,star -- ++
let space=0
let star=6
for(let i=1;i<=9;i++){
    let res=""
    if(i<=5){
        space++
        star--
    }else{
        space--
        star++
    }
    for(j=1;j<=space;j++){
       res=res+" "
    }
    for(k=1;k<=star;k++){
        res=res+"*"
    }console.log(res);
}


//12 54321 right pattern
let num=5;
for(let i=1;i<=num;i++){
    res="";
    for(let k=1;k<=i-1;k++){
        res=res+" "
    }
    for(let j=1;j<=6-i;j++){
        res=res+"*";
    }console.log(res);
}


//13 54321 left pattern
let num=5;
for(let i=1;i<=num;i++){
    res="";
    for(let k=1;k<=i-1;k++){
        res=res+""
    }
    for(let j=1;j<=6-i;j++){
        res=res+"*";
    }console.log(res);
}

//14 12345 left pattern
for(i=1;i<=5;i++){
let res=""
for (j=1;j<=i;j++){
    res=res+"*"
}console.log(res);
}



//15 12345 right pattern
for(i=1;i<=5;i++){
let res=""
for(k=1;k<=5-i;k++){
    res=res+" ";
}
for (j=1;j<=i;j++){
    res=res+"*"
}console.log(res);
}

//16 5*pattern
for(i=1;i<=5;i++){
    let res=""
    for(j=1;j<=5;j++){
        res=res+"*"
    }console.log(res)
}