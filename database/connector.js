var pool = require('./pool');

exports.executeQuery=function(query,callback){
    pool.getConnection(function(err,connection){
        if (err) {
          //connection.release();
	  console.log(err);
          throw err;
        }   
        connection.query(query,function(err,rows){
            connection.release();
            if(!err) {
                callback(null, {rows: rows});
            }           
        });
        connection.on('error', function(err) { 
	      console.error(err)	
              throw err;
              return;     
        });
    });
}
