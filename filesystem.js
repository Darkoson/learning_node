const filesystem = require('fs');

// creation of file

filesystem.writeFile('example.txt', 'This is some sample content', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('file created successfuly');
    }

}) ;

// reading from file

filesystem.readFile('example.txt', 'utf8', (err, file) => {
    if (err) {

        console.log(err);
    }
    else {
        console.log(file);
    }
}) ;

// renaming a file 

filesystem.rename('example.txt', 'example2.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file successfuly created');
    }
}) ;
 