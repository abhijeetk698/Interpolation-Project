// Newton divided Difference 
var xVal=[2,3,5,9,13];
var yVal=[2,3,5,9,13];
var count=xVal.length;
var variator=[];
variator.push(yVal[0]);
var arr1=xVal;
var arr2=yVal;
for(var j=1;j<count;j++){
    for(var i=0;i<(count-j);i++){
    arr2[i]=(arr2[i+1]-arr2[i])/(arr1[i+j]-arr1[i]);
}
variator.push(arr2[0]);
}
console.log(variator);
function value(x){
var f="";
f+=String(variator[0]);
var ans=variator[0];
var multiplier=1;
for(var i=0;i<(count-1);i++){
    var mul=1;
    var m="(1";
    for(var j=0;j<=i;j++){
        m+="*"+"(x-"+String(arr1[j])+")";
        mul=mul*(x-arr1[j]);
    }
    m+=")";
    f+=("+"+m+"*"+String(variator[i+1]));
    ans+=(mul*(variator[i+1]));
}
console.log(f);
return ans;
}
console.log(value(5));
