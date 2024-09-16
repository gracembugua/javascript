
function getSubsets() {
    var str = "dog"; 
    var subsets = [];
    
    for (let i = 0; i < str.length; i++) {
       
        for (let j = i + 1; j <= str.length; j++) {
            subsets.push(str.substring(i, j));
        }
    }
    
    return subsets;
}


var result = getSubsets();
console.log(result);