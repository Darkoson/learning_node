const filesystem = require('fs');

const readStream = filesystem.createReadStream('./tutorial/book1.txt', 'utf8' ) ;
const writeStream = filesystem.createWriteStream('./tutorial/book2.txt', 'utf8') ;

// we are copying the content of book1.txt to book2.txt

readStream.on('data', (chunk)=> writeStream.write(chunk)) ;

/**
 *  It is recommended to use the stream reader instead of File readers
 *  Because the filereader loads the content of the file in memory before 
 *  Reading so if the size of the file is huge, the system will give you an error
 */

