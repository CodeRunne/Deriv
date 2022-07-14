function TruncateString(prop, str) {
    let newStr = `${ prop && str }`;
    
    if(newStr === 'undefined') newStr = "";

    return newStr;
}

export default TruncateString;