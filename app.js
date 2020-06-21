// Chapter # 21-25:-
// Assignment # 21-25:-

// Q1)
var fname = prompt('Enter your first name: ');
var lname = prompt('Enter your second name: ');
var fullname = fname + ' ' + lname;
alert('Hi, ' + fullname);

// Q2)
var mob = prompt('Enter your favorite mobile phone model: ');
document.write('Your favorite phone is: ' + mob + '<br>' + 'Length of string: ' + mob.length);

// Q3)
var str = 'Pakistani';
for (var i = 0; i < str.length; i++) {
    if (str.slice(i, i + 1) === "n") {
        document.write("String: " + str + "<br>" + "Index of 'n': " + i);
        break;
    }
}

// Q4)
var str = 'Hello world';
var ind = 0;
for (var i = 0; i < str.length; i++) {
    if (str.slice(i, i + 1) === "l") {
        ind = i;
    }
}
document.write("String: " + str + "<br>" + "Index of 'l': " + ind);

// Q5)
var str = 'Pakistani';
var ind = 3;
var st = str.charAt(3);
document.write("String: " + str + "<br>" + " Character at index 3: " + st);

// Q6)
var fname = prompt('Enter your first name: ');
var lname = prompt('Enter your second name: ');
var fullname = fname.concat(lname);
alert('Hi, ' + fullname);

// Q7)
var text = 'Hyderabad';
var rep = text.replace('Hyder', 'Islam');
document.write('City: ' + text + '<br>' + 'After Replacement: ' + rep);

// Q8)
var message = 'Ali and Sami are best friends. They play cricket and football together.';
for (var i = 0; i < message.length; i++) {
    if (message.slice(i, i + 3) === 'and') {
        message = message.slice(0, i) + "&" + message.slice(i + 3);
    }
}
document.write(message);

// Q9)
var val = '472';
var num = parseInt(val);
var type_val = typeof (val);
var type_num = typeof (num);
document.write('Value: ' + val + '<br>' + 'Type: ' + type_val + '<br>' + 'Value: ' + num + '<br>' + 'Type: ' + type_num);

// Q10)
var inp = prompt('Enter any word: ');
var cap = inp.toUpperCase();
document.write('User Input: ' + inp + '<br>' + 'Upper case: ' + cap);

// Q11)
var inp = prompt('Enter any word: ');
var cap = inp.charAt(0).toUpperCase() + inp.slice(1).toLowerCase();
document.write('User Input: ' + inp + '<br>' + 'Upper case: ' + cap);

// Q12)
var num = 35.36;
var str = num.toString();
var st = str.replace('.', '');
document.write('Number: ' + num + '<br>' + 'String: ' + st);

// Q13)
var ch = 0;
var name = prompt('Enter Username: ');
for (i = 0; i < name.length; i++) {
    if (name.codePointAt(i) === 33 || name.codePointAt(i) === 44 || name.codePointAt(i) === 46 || name.codePointAt(i) === 64) {
        ch += 1;
    }
}
if (ch === 1) {
    alert('Please enter a valid username.');
}
else { }

// Q14)
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var c = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am: ");
var b = c.toLowerCase();
var flag = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
        flag += 1;
        break;
    }
}
if (flag === 1) {
    document.write(b + ' is availabe at index ' + i + ' of our bakery.');
}
else {
    document.write('We are Sorry. ' + b + ' is not available at our bakery.');
}

// Q15)
var password = prompt('Enter password must be alphanumeric.');
if (password.length < 6 || (password.codePointAt(0) > 48 && password.codePointAt(0) < 58)) {
    alert('Enter valid password.');
}
else { }

// Q16)
var university = 'University of Karachi';
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}

// Q17)
var input = prompt('Enter anything: ');
var last = input.length - 1;
var char = input.charAt(last);
document.write('User input: ' + input + '<br>' + 'Last character of input: ' + char);

// Q18)
var text = 'The quick brown fox jumps over the lazy dog';
var inst = 0;
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 3) === 'the') {
        inst += 1;
    }
    else { }
}
document.write('Text: ' + text + '<br>' + 'There are ' + inst + " occurence of word 'the'");







// Chapter # 26-30:-
// Assignment # 26-30:-

// Q1)
var posnum = +prompt("Enter a positive number: ");
document.write("<br>" + "<br>" + "Number: " + posnum);
document.write("<br>" + "Round off value: " + Math.round(posnum));
document.write("<br>" + "Floor value: " + Math.floor(posnum));
document.write("<br>" + "Ceil value: " + Math.ceil(posnum));

// Q2)
var negnum = +prompt("Enter a negative floating point number: ");
document.write("<br>" + "<br>" + "Number: " + negnum);
document.write("<br>" + "Round off value: " + Math.round(posnum));
document.write("<br>" + "Floor value: " + Math.floor(posnum));
document.write("<br>" + "Ceil value: " + Math.ceil(posnum));

// Q3)
var absval1 = -4;
var absval2 = 5;
document.write("<br>" + "<br>" + "Absolute value of " + absval1 + " is " + Math.abs(absval1) + " and absolute value of " + absval2 + " is " + Math.abs(absval2));

// Q4)
document.write("<br>" + "<br>" + "Random dice value: " + Math.floor(Math.random() * 7) + 1);
document.write("<br>" + "Random dice value: " + Math.floor(Math.random() * 7) + 1);

// Q5)
var toss = Math.floor(Math.random() * 2);
if (toss === 0) {
    alert("Random coin value: Heads");
}
else {
    alert("Random coin value: Tails");
}

// Q6)
document.write("<br>" + "<br>" + "Random number between 1 and 100 is: " + Math.floor(Math.random() * 101) + 1);

// Q7)
var weight = prompt("Enter your weight: ");
var weightparse = parseInt(weight);
document.write("<br>" + "<br>" + "The weight of user is: " + weightparse + " kilograms");

// Q8)
var seckey = "5";
var guessseckey = prompt("Enter secret key: ");
if (seckey == guessseckey) {
    document.write("<br>" + "<br>" + "You enter the right key");
}
else {
    document.write("<br>" + "<br>" + "Try Again");
}








// Chapter # 31-34:-
// Assignment # 31-34:-

// Q1)
var currentdate = new Date();
document.write(currentdate);

// Q2)
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentmonth = currentdate.getMonth();
document.write(months[currentmonth]);

// Q3)
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentday = currentdate.getDay();
document.write("Today is " + days[currentday]);

// Q4)
if (currentday == 0 || currentday == 6) {
    document.write("Today is a funday")
}

// Q5)
if (currentdate.getDate() <= 15) {
    document.write("first fifteen days of the month");
} else if (currentdate.getDate() <= 16) {
    document.write("16th day of the month");
} else {
    document.write("last 16 days of the month");
}

// Q6)
document.write("milliseconds: " + currentdate.getTime())
var minutes = currentdate.getTime() / (1000 * 60);
document.write("minutes" + minutes);

// Q7)
var hour = currentdate.getHours();
if (hour < 12) {
    document.write("its AM");
} else {
    document.write("its PM");
}

// Q8)
var laterDate = new Date("2020/12/31");
document.write(laterDate);

// Q9)
var startingdate = new Date("2020/6/18");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime()) / (1000 * 60 * 60 * 24));
document.write(daysgone + " days have passed since ramazan 1st")

// Q10)
var startingdate = new Date("2015/1/1");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime()) / (1000 * 60));
document.write(daysgone + " seconds have passed since 2015")

// Q11).
document.write("current date" + currentdate)
var hourago = new Date(currentdate.getTime() - (1000 * 60 * 60));
document.write("an hour ago it was " + hourago)

// Q12)
document.write("current date" + currentdate)
var centuryago = new Date(currentdate.getTime() - (1000 * 60 * 60 * 24 * 365.25 * 100));
document.write("100 years ago it was " + centuryago)

// Q13)
var age = prompt("enter your age")
var birthyear = new Date(currentdate.getTime() - (1000 * 60 * 60 * 24 * 365.25 * age));
document.write(birthyear.getFullYear());

// Q14)
document.write("customer name : Omama Zainab");
document.write("Month : Feburary");
document.write("Number of units : 416");
document.write("Charges per unit : 16");
document.write("net amount payable with in due date : " + 416 * 16);
document.write("late payment surcharge : 350");
document.write("payment after due date : " + ((416 * 16) + 350));









// Chapter # 35-38:-
// Assignment # 35-38:-

// Q1)
var date = new Date()
document.write(date)

// Q2)
fname = prompt('Enter your first name: ')
lname = prompt('Enter your last name: ')
fullname = fname + ' ' + lname
prompt('Hi, ' + fullname)

// Q3)
var num1 = parseInt(prompt('Enter first number: '))
var num2 = parseInt(prompt('Enter second number: '))
var sum = num1 + num2
alert('Sum of ' + num1 + ' and ' + num2 + ' is ' + sum)

// Q4)
var num1 = parseInt(prompt('Enter first number: '))
var num2 = parseInt(prompt('Enter second number: '))
var op = prompt('Enter operation; +, -, *, /')
func(num1, num2, op);
alert('Sum is: ' + sum);
function func(num1, num2, op) {
    if (op === '+') {
        sum = num1 + num2
    }
    else if (op === '-') {
        sum = num1 - num2
    }
    else if (op === '*') {
        sum = num1 * num2
    }
    else if (op === '/') {
        sum = num1 / num2
    }
    else {
        alert('invalid operation')
    }
    return sum
}

// Q5)
function Square(num) {
    var result = num * num;
    return result;
}
document.write("<br> The Square of the number is " + Square(4));

// Q6)
var sum = 0;
function Factorial(number) {
    var fact;
    for (i = 1; i < number; i++) {
        fact = number * i;
        sum = sum + fact;
    }
    return sum;
}
document.write("<br> The Factorial of the number is " + Factorial(4));

// Q7)
function Counting(firstNumber, lastNumber) {
    for (i = firstNumber; i <= lastNumber; i++) {
        document.write("<br>" + i);
    }
}
document.write("<br><h1>Counting</h1>");
Counting(12, 19);

// Q8)
function calculateHypotenuse(base, perpendicular) {
    function Square(x) {
        return x * x;
    }
    Result = Square(base) + Square(perpendicular)
    return Result;
}
document.write("<br>The hypoteneous of the right angle triangle is" + calculateHypotenuse(4, 3));

// Q9)
function calculateArea(width, height) {
    var Area = width * height;
    return Area;
}
var Height = 15;
var Width = 3;
document.write("<br>" + "The Area of The Triangle by Passing Arguement as value  is " + calculateArea(Height, Width));
document.write("<br>" + "The Area of The Triangle by Passing Arguement as variable  is " + calculateArea(7, 4));

// Q10)
function Palindrome(string) {
    var newString = "";
    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    if (string === newString) {
        document.write("<br>Its a Palindrome");
    }
    else {
        document.write("<br>Its not a Palindrome");
    }
}
Palindrome("madam");

// Q11)
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
document.write("<br> The String in Title Case is " + titleCase('the quick brown fox'));

// Q12)
function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
document.write("<br>" + find_longest_word('Web Development Tutorial'));

// Q13)
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}
document.write("<br>The occurence of the letter in the string is " + char_count('Omama', 'a'));

// Q14)
document.write("<h1>Geometrizer</h1>");
function calcCircumference(radius) {
    var pi = 3.142;
    var circumference;
    circumference = 2 * pi * radius;
    return circumference;
}
document.write("<br>The Circumference of the Circle is " + calcCircumference(5));

function calcArea(radius) {
    var pi = 3.142;
    var Area;
    Area = pi * radius * radius;
    return Area;
}
document.write("<br>The Area  of the Circle is " + calcArea(5));