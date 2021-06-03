//summation of every number
function numberSum(N){
    var total =0;
for(let i=1; i<=N; i++)
    {
    total += i;
}
return total;

}
function run(){
    val = document.getElementById("val").value;
    document.getElementById("results").innerHTML="sum = "+numberSum(val)
}




//Repeat the string
function repeatstr(n ,s)
{
    return s.repeat(n);
}
function string(){
    let val = document.getElementById("str").value;
    
    let num = document.getElementById("num").value;
    document.getElementById("result").innerHTML="Repeat the string = "+repeatstr(num,val)
}


//which number is even or odd 
function iqTest(numbers) 
{
    numbers = numbers.split(' ').map(Number);
    var evens = numbers.filter(function(num){
        return num % 2 === 0;
    });
    var odds = numbers.filter(function(num){
        return num % 2 !== 0;
    });

    if (odds.length === 1){
        return numbers.indexOf(odds[0]) + 1;

    } 
    else if(evens.length === 1){
        return numbers.indexOf(evens[0]) + 1;
    }
}
function iq(){
    val = document.getElementById("test").value;
    document.getElementById("res").innerHTML=" "+iqTest(val)
}

//DistinctList
function DistinctList(arr,n){
    let res = 1;
    for (let i =1; i<n; i++){
        let j=0;
        for(j=0;j<i;j++)
        if (arr[i] === arr[j])
        break;
        if (i===j)
        res++;
        
    }
    return res;
    }
function Dlist(){
    val = document.getElementById("list").value;
    let arr =[];
    val =val.split(' ')
    
    for(j=0;j<val.length;j++){
        arr.push(Number(val[j]))
    }
    let n= arr.length;
    document.getElementById("resul").innerHTML=" "+DistinctList(arr,n)
}


//Fibonacci Sequence
var fibonacci_series = function(n)
{
    if (n==1)
    {
        var loop =[0,1];
        document.getElementById("output").innerHTML = loop;
        return loop;}
        else{
            var s = fibonacci_series(n-1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            document.getElementById("output").innerHTML =s;
            return s;
        }
    };
