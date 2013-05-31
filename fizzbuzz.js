for (var i=0;i<100;i++)
{ 
    if (i % 3 && i % 5) {
        document.write('FizzBuzz' + '<br/>');
    } else if (i % 3) 
    {
        document.write('Fizz' + '<br/>');    
    } else if (i % 5) 
    {
        document.write('Buzz' + '<br/>');    
    } else 
    {
        document.write(i + '<br/>');
    }
}
