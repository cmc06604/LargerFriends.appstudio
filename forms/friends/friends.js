var friendNames = [];

friendNames[0] = prompt("Enter the name of your first of three friends.");

// P needs to be lower case
friendNames[1]  = prompt("Enter the name of your second of three friends.");
friendNames[2] = prompt("Enter the name of your third of three friends.");


let friendNum = parseInt(prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third"))


let bestFriend = friendNames[friendNum - 1]
console.log(bestFriend)

if (bestFriend.charAt(0) == "A")
   alert("Your best friends' name starts with A.")
else if (bestFriend.charAt(0) = "B")
   alert("Your best friends' name starts with B.")
else 
   alert("Your name starts with something other than A or B.")