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

    // Return the number of distinct palindromes
    return palindromes.size;
}

// Example usage:
console.log(countDistinctPalindromes("abba"));   // 4 (a, b, bba, abba)
console.log(countDistinctPalindromes("racecar")); // 10 (a, c, e, r, aceca, cec, racecar, r, rr, e)