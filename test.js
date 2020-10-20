function func() { 
        // Original array 
        var arr = [2, 56, 78, 34, 65]; 
  
        // new mapped array 
        var new_arr = arr.map(function (num, index, other) { 
	    console.log("num:%d,index: %d, other:%d" , num, index, other);
            return num / 2; 
        }); 
  
    } 
    func(); 

