function duplicates(str){
    const name=new set(str);
    return Array.from(name).join("");

}
console.log(duplicates ("class"));