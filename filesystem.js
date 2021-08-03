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
        console.log("This is the content of the file: \n");
        console.log(file);
    }
}) ;

// renaming a file 

filesystem.rename('example.txt', 'example2.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file successfuly renamed');
    }
}) ;


// append data at the end of file 

filesystem.appendFile('example2.txt', '\n This is an extra content appended to the file', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('data successfuly appended to the file \n');
    }
}) ;




// delete file 

filesystem.unlink('example2.txt',  (err)=>{
     
    if(err){
        console.log(err);
    }else{
        console.log('file successfuly deleted \n');
    }
}) ;
 

// create a directory and a files

filesystem.mkdir('tutorial', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(' tutorial Directory successfuly created');

        // write a file in the directory
        filesystem.writeFile('./tutorial/book1.txt', 'Thomas Darko', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(' book1 file created successfuly');
            }
        
        }) ;

        // write a file in the directory
        filesystem.writeFile('./tutorial/book2.txt', 'Thomas Darko', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(' book2 file created successfuly');
            }
        
        }) ;
    }
})


// delete a folder
// filesystem.rmdir('tutorial', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log( 'folder folder deleted successfully');
//     }
// })


// delete multiple files within a folder

filesystem.readdir('tutorial', (err, files)=>{
    for (const file of files) {

        filesystem.unlink('./tutorial/'+file,  (err)=>{
     
            if(err){
                console.log(err);
            }else{
                console.log(`file ${file} successfuly deleted \n`);
            }
        }) ;
        
    }

})



