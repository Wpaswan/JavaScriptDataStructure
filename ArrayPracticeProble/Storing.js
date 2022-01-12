var repeatedDigit=[]
for(var i=0;i<=100;i++)
{
    if(i%11==0)
    repeatedDigit.push(i)
}
repeatedDigit.forEach(function(entry){
    console.log(entry)
})r