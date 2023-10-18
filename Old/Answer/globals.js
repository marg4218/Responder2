
var defense_loader = [];
var response_loader = [];

var preview_array = [];


newDiv = function(parent_id, new_id) 
{
    let new_div = document.createElement("div");
    new_div.id = new_id;

    let parent = document.getElementById(parent_id);
    parent.appendChild(new_div);

    return new_div;
}

var numbers = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", 
    'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 
    'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-nine', 
    'forty', 'forty-one', 'forty-two', 'forty-three', 'forty-four', 'forty-five', 'forty-six', 'forty-seven', 'forty-eight', 'forty-nine', 
    'fifty', 'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine', 
    'sixty', 'sixty-one', 'sixty-two', 'sixty-three', 'sixty-four', 'sixty-five', 'sixty-six', 'sixty-seven', 'sixty-eight', 'sixty-nine', 
    'seventy', 'seventy-one', 'seventy-two', 'seventy-three', 'seventy-four', 'seventy-five', 'seventy-six', 'seventy-seven', 'seventy-eight', 'seventy-nine', 
    'eighty', 'eighty-one', 'eighty-two', 'eighty-three', 'eighty-four', 'eighty-five', 'eighty-six', 'eighty-seven', 'eighty-eight', 'eighty-nine', 
    'ninety', 'ninety-one', 'ninety-two', 'ninety-three', 'ninety-four', 'ninety-five', 'ninety-six', 'ninety-seven', 'ninety-eight', 'ninety-nine',
]

// Transform Ordinal Headers From integer To xth defenses - up to 9E16 (2^63)
var nth = function(i) {
    var n = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var s = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth",
         "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth"];
    var p = ["twent", "thirt", "fourt", "fift", "sixt", "sevent", "eight", "ninet"];
    var c = ["hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];
    var b = Math.floor(Math.log10(i));
    if(i<20) return s[i]; // Special case for sub-20
    if(b==1){ // Between 21 and 99
      if(i%10 === 0) return p[Math.floor(i/10)-2]+"ieth"; // On the tens, return p+"ieth"
      return p[Math.floor(i/10)-2] + "y-" + s[i%10]; // Otherwise, return hyphenated
    }
    if(b==2){ // Between 100 and 999
        var e = Math.floor(i/Math.pow(10,b)); // The first number
        return n[e-1]+"-"+c[0]+" "+nth(i-(e*Math.pow(10,b)));
    }
    // Greater than 1000 we break into groups of 10^3 followed by a multiplier
    var m = b%3 + 1; // Take the first m digits off
    var cm = Math.floor(b/3);
    var x = Math.floor(i/Math.pow(10,b-m+1));
    var numberToString = function(y){ // Converts a number less than 1000 to its string representation as a multiplier
      if(y<20) return n[y-1];
      if(y<100) return p[Math.floor(y/10)-2] + "y-" + n[y%10-1];
      return n[Math.floor(y/100)-1] + " " + c[0] + " " + numberToString(y-(Math.floor(y/100)*100));
    }
    return numberToString(x) + " " + c[cm] + " " + nth(i-(x*Math.pow(10, b-m+1)));
  }
