function isPalindrome(str) {
    const NewStr = str.toLowerCase().replace();
    const reversedStr = NewStr.split('').reverse().join('');
    return NewStr === reversedStr;
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("Hello, World!")); 