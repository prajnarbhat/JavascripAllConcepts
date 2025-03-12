let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

const arrayFilterFalsyvalues = arr.filter(item => {
    if(item) 
        return item;
    
});

console.log("Remove falsy values:",arrayFilterFalsyvalues);