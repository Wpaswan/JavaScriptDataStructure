var tenRandomNumbers=[]
console.log("hello")
for(var i=1;i<=10;i++)
{
    tenRandomNumbers[i]=Math.floor(Math.random()*(999-100+1)+100)
}


for(i=1;i<=10;i++)
{
    var temp=0
    for(var j=i+1;j<=10;j++)
    {
        if(tenRandomNumbers[i]>tenRandomNumbers[j])
        {
            temp=tenRandomNumbers[i]
            tenRandomNumbers[i]=tenRandomNumbers[j]
            tenRandomNumbers[j]=temp
        }

    }
}
for(i=1;i<=10;i++)
console.log(tenRandomNumbers[i])
console.log("Second smallest="+tenRandomNumbers[2])
console.log("Second largest="+tenRandomNumbers[9])
