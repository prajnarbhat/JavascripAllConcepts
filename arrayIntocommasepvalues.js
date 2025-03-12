var array2D = [ 
    [ "a" , "2"] ,
    [ "c" ,"d" ] 
  ];

const arrayValues = array2D.map(item => {
    var row =item;
    return row.join(",");
})

console.log(arrayValues)