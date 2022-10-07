

function capitalizeString(string) {
  
   string=string.toLowerCase()
   first=string.charAt(0)
   first=first.toUpperCase();
   string=string.slice(1)
   string=first + string
       return string;
}
module.exports = capitalizeString;

