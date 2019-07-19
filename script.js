var parameters = {
  target: '#myFunction',
  data: [{
    fn: 'sin(x)', 
    color: 'red'
 }],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

var btn=document.querySelector("#mainbttn");
btn.addEventListener("click",function(){
  var xValues=document.querySelector("#xValues").value.split(" ");
  var yValues=document.querySelector("#yValues").value.split(" ");
  var xVal=[];
  var yVal=[];
  for(var i=0;i<xValues.length;i++){
    if(xValues[i]!=""){
      xVal.push(Number(xValues[i]));
    }
  }
  for(var i=0;i<yValues.length;i++){
    if(yValues[i]!=""){
      yVal.push(Number(yValues[i]));
    }
  }
  ///********************************************* */
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
/********************************/
function value(){
var f="";
f+=String(variator[0]);
var multiplier=1;
for(var i=0;i<(count-1);i++){
    var m="(1";
    for(var j=0;j<=i;j++){
        m+="*"+"(x-"+String(arr1[j])+")";
    }
    m+=")";
    f+=("+"+m+"*"+String(variator[i+1]));
}
return f;
}
/**********************************************/
document.querySelector("#function").value=value();
plot();
})

function plot() {
  var f = document.querySelector("#function").value;
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;
  var color = document.querySelector("#color").value;
  
  parameters.data[0].fn = f;
  parameters.xAxis.domain = [xMin, xMax];
  parameters.yAxis.domain = [yMin, yMax];
  parameters.data[0].color = color;
  
  functionPlot(parameters);
}
