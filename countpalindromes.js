function countDistinctPalindromes(str) {
    function isPalindrome(s) {
        const cleaned = s.toLowerCase().replace('');
        const reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
    }

    const palindromes = new Set();
    const length = str.length;

    for (let start = 0; start < length; start++) {
        for (let end = start + 1; end <= length; end++) {
            const substring = str.slice(start, end);
            if (isPalindrome(substring)) {
                palindromes.add(substring);
            }
        }
    }

    return palindromes.size;
}

console.log(countDistinctPalindromes("abba"));   
console.log(countDistinctPalindromes("racecar")); 