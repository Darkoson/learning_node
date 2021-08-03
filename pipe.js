const fileSystem = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

// creation of input and output stream on the origin and destination files

inputStreamReader  = fileSystem.createReadStream('./tutorial/book1.txt', 'utf8') ;
outputStreamReader  = fileSystem.createWriteStream  ('./tutorial/book1.gz', 'utf8') ;

// reading and compressing into a .gz file
inputStreamReader.pipe(gzip).pipe(outputStreamReader);

// to uncompress a file these are the steps to follow
/**
 * input stream will take as parameter the path to a compressed file
 * output stream will take az parameter a name that you want to give to the uncompressed file
 * the is no need to specify the encoding for the input stream
 * instead of : gzip = zlib.createGzip(), rather do : gunzip = zlib.createGunzip(); 
 * finally, pass the gunzip object to the pipe
 */