/*

Take two objects, and return a new object with key-values that are different between them

*/

define(function(){
   
    var diff = function(obj1, obj2){
        
        var diff_obj = {}
        for (var key in obj1){
            if (obj1.hasOwnProperty(key)){
                if (key in obj2) {} else{
                    diff_obj[key] = obj1[key]
                }
            } 
        };    
        return diff_obj;
    };
    
    return diff;
});