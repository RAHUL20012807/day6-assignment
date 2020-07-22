function generateTable()
{
     var myVar = prompt("A number?", "");
     var myString = "";
     for (i=1; i<=10; i++) {
       myString += myVar+ " x " +i+ " = " +(i*myVar)+ "\n";
       document.write("\n");

     }
     
     document.write(myString);
     
}