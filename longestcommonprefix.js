function longestCommonPrefix(arr) {
    if (arr.length === 0) return "";  

    let prefix = arg[0];
    
    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
}


const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings));  
