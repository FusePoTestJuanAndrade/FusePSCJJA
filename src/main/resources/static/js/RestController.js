var RestControllerModule = (function () {
//------------------Metodos Get------
  var getProducts = function (callback) {
	
    axios.get('/shopapi/products/')
    .then(function (response) {
     return callback.onSuccess(response.data);
    })
    .catch(function (error) {
      return callback.onFailed(error);
    });
  };
  var getProduct = function(productName, callback){			
	axios.get('/shopapi/products/'+productName)		
		.then(function(response){
			callback.onSuccess(response.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
	var getActiveUser = function( callback){			
	axios.get('/shopapi/active')		
		.then(function(response){
			callback.onSuccess(response.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
	var getSearchProducts = function(search, callback){			
	axios.get('/shopapi/searchproducts/'+search)		
		.then(function(response){
			callback.onSuccess(response.data);			
		})
		.catch(function(error){
			callback.onFailed(error);
		});
	};
	//------------------Metodos Post------	
  var createUser = function (nombre,correo,clave,tipo, callback) {
    axios.post('/shopapi/users/'+nombre+'/'+correo+'/'+clave+'/'+tipo+'/')
     .then(function(){
		callback.onSuccess();
	 })
	 .catch(function(error){		 
		callback.onFailed(error);
	 });
  };
  var createProduct = function (product, callback) {
    axios.post('/shopapi/products/',product)
     .then(function(){
		callback.onSuccess();
	 })
	 .catch(function(error){		 
		callback.onFailed(error);
	 });
  };
//------------------Metodos Put------	
  var logIn = function (email,contr,callback) {
    axios.put('/shopapi/users/login/'+mail+'/'+contr+'/')
     .then(function(){
		callback.onSuccess();
	 })
	 .catch(function(error){		 
		callback.onFailed(error);
	 });
  };
  var logOut = function (callback) {
    axios.put('/shopapi/users/logout/')
     .then(function(){
		callback.onSuccess();
	 })
	 .catch(function(error){		 
		callback.onFailed(error);
	 });
  };
	
  return {
	getActiveUser: getActiveUser,
    getProducts: getProducts,
	createUser: createUser,
	createProduct: createProduct,
	logIn: logIn,
	logOut: logOut,
	getProduct: getProduct,
    getSearchProducts: getSearchProducts

  };

})();