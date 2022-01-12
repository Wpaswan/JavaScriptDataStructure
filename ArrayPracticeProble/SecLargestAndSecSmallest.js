var tenRandomNumbers=[]

for(var i=1;i<=10;i++)
{
    tenRandomNumbers[i]=Math.floor(Math.random()*(999-100+1)+100)
}
for(i=1;i<=10;i++)
console.log(tenRandomNumbers[i])
var Largest=tenRandomNumbers[1]
var Smallest=tenRandomNumbers[1]
for(i=1;i<=10;i++)
{
    if(Largest<tenRandomNumbers[i])
    Largest=tenRandomNumbers[i]
    if(Smallest>tenRandomNumbers[i])
    Smallest=tenRandomNumbers[i]
}
var secondLargest=Largest
var secondSmallest=Smallest
for(i=1;i<=10;i++)
{
    if(secondLargest<tenRandomNumbers[i])
    secondLargest=tenRandomNumbers[i]
    if(secondSmallest>tenRandomNumbers[i])
    secondSmallest=tenRandomNumbers[i]
}
console.log("Second Largest="+secondLargest)
console.log("Second smallest="+secondSmallest)