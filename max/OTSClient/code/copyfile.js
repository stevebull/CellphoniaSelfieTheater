inlets = 1;
outlets = 1;

var chunksize = 10000;

function copyfile(src, dst) {
  var srcFile = new File(src, 'read');
  var dstFile = new File(dst, 'write');

  var srcEnd = srcFile.eof;

  var bytesWritten = 0;
  while (bytesWritten < srcEnd) {
    var bytesToRead = Math.min(chunksize, srcEnd - bytesWritten);
    var srcBytes = srcFile.readbytes(bytesToRead);
    dstFile.writebytes(srcBytes);
    bytesWritten = bytesWritten + bytesToRead;
  }

  srcFile.close();
  dstFile.close();
}
