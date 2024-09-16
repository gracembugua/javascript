function areAnagrams(str1, str2) {
    const Str1 = str1.toLowerCase().replace('');
    const Str2 = str2.toLowerCase().replace('');

    if (Str1.length !== Str2.length) {
        return false;
    }

    const sortedStr1 = Str1.split('').sort().join('');
    const sortedStr2 = Str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("Listen", "Silent")); 
console.log(areAnagrams("Hello", "World")); 
