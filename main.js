
//function for getting and displaying values
function dis(val)
{
document.getElementById("userinput").value+=val;}
//function for evaluation
function solve()
{
let x = document.getElementById("userinput").value
let y = eval(x)
document.getElementById("userinput").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("userinput").value = ""
}
