var repeatedDigit=[]
for(var i=1;i<=100;i++)
{
    if(i%11==0)
    repeatedDigit.push(i)
}
repeatedDigit.forEach(function(entry){
    console.log(entry)
})