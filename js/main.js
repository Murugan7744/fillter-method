
let prizes=[500,1500,2500,3000];

result=prizes.filter(function(prize)
{ 
	if(prize>=1000)
	{
			return prize;
    }
})
document.write(result);
