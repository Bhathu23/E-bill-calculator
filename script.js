function calculateBill()
{
	let units = Number(document.getElementById('txtUnits').value);
	let amount;
	if (units > 0 && units <= 30) 
	{
		amount = units*7.85 + 480;
	}
	else if(units >30 && units <= 60)
	{
		amount = 30*7.85 + (units-30)*7.85 + 480;
	}
	else if(units > 60 && units <= 90)
	{
		amount = 30*7.85 + 30*7.85 + (units-60)*10 + 480;
	}
	else if(units > 90 && units <= 120)
	{
		amount = 30*7.85 + 30*7.85 + 30*10 + (units-90)*27.75 + 480;
	}
	else 
	{
		amount = 30*7.85 + 30*7.85 + 30*10 + 30*27.75 + (units-120)*32 + 480;
	}

	let txtResult = document.getElementById('YourBill');
	txtResult.innerHTML = amount;
}