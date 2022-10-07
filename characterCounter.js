

function stringLength(string) {

    let str= (string.split(" ").join("")).length;
    if (str > 0 && str <= 10){
      return str
    }else {
        let err =('Error in Data Entry');
       return err;
    }
    

}

module.exports = stringLength;

// stringLength('Golden');