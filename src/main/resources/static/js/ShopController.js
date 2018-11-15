var OrdersControllerModule = (function () {
  
  var loadProduct=function (product,elemento) {
		//alert(elemento);
		//alert(product.name);
		nombre='<div class="col-md-4 text-center animate-box fadeInUp animated-fast"><div class="product"><div class="product-grid" style="background-image:url(';
		nombre+=product.url+');">';
		nombre+='<div class="inner"><p><a href="single.html" class="icon"><i class="icon-shopping-cart"></i></a><a href="single.html" class="icon"><i class="icon-eye"></i></a></p></div></div><div class="desc"><h3><a href="single.html">';
		nombre+=product.name+'</a></h3><span class="price">$';
		nombre+=product.price+'</span></div></div>';
		document.getElementById(elemento).innerHTML+=nombre;
	};
//------------------Metodos Get---------------
  var getProducts = function () {
    var callback = {
		
        onSuccess: function(ordersList){
			document.getElementById("magic").innerHTML="";
			var cont=3;
			var id=0;
			for(i in ordersList){
				if (cont==3){
					cont=1;
					id+=1;
					var txt1 = '<div class="row" id="'+"magic"+id.toString()+'"></div>';          
					document.getElementById("magic").innerHTML+=txt1;
				}
				else{cont+=1;}
				
			loadProduct(ordersList[i],"magic"+id.toString());
			}
			
            },
        onFailed: function(exception){
		alert(exception);
        }
    }
    RestControllerModule.getProducts(callback);
  };
  var setSearch = function (search) {
    localStorage.setItem('searchProduct', search);

  };
   var getSearchProducts = function () {
	
	var search= localStorage.getItem('searchProduct');
    var callback = {

        onSuccess: function(ordersList){
			var cont=3;
			var id=0;
			for(i in ordersList){
				if (cont==3){
					cont=1;
					id+=1;
					var txt1 = '<div class="row" id="'+"magic"+id.toString()+'"></div>';          
					document.getElementById("magic").innerHTML+=txt1;
				}
				else{cont+=1;}	
			loadProduct(ordersList[i],"magic"+id.toString());
			}
			
            },
        onFailed: function(exception){
		alert(exception);
        }
    }
    RestControllerModule.getSearchProducts(search,callback);
  };
  
  var getProduct = function (productName) {
    
    var callback = {

        onSuccess: function(order){
			document.getElementById("updateTabla").innerHTML = '';
			loadOrder(order,"updateTabla");
            },
        onFailed: function(exception){
		alert(exception);
        }
    }
    RestControllerModule.getProduct(productName, callback);
  };
  var getActiveUser= function (){
	var callback = {
		
        onSuccess: function(ordersList){
			elemento=document.getElementById("identifiers");
			elemento.innerHTML = '';
			for (i in ordersList) {
				elemento.innerHTML +='<option>';
				elemento.innerHTML +="<option value='"+i+"'>Order "+ ordersList[i].tableNumber;
				elemento.innerHTML +='</option>';
			}
            },
        onFailed: function(exception){
		alert(exception);
        }
    }
    RestControllerModule.getActiveUser(callback);
  };  
	  

//------------------Metodos Post---------------
var createUser = function (nombre,correo,clave,tipo) {
    var callback = {

        onSuccess: function(){

            },
        onFailed: function(exception){
        alert(exception);
        }
    }
    RestControllerModule.createUser(nombre,correo,clave,tipo, callback);
  };
var createProduct = function (name,price,type,description,quantity,url) {
	alert("Usuario creado exitosamente");
	var product={"name":name,"price":price,"type":type,"description":description,"quantity":quantity,"url":url};
    var callback = {
        onSuccess: function(){
			alert("Usuario creado exitosamente");
            },
        onFailed: function(exception){
        alert(exception);
        }
    }
    RestControllerModule.createProduct(product, callback);
  };
//------------------Metodos Put---------------
	
var logIn = function (mail, contr) {
    var callback = {
        onSuccess: function(){

            },
        onFailed: function(exception){
		alert(exception);
        alert("Hubo un problema con las credenciales");
        }
    }
    RestControllerModule.logIn(mail,contr, callback);
  };
var logOut = function (mail, contr) {
    var callback = {
        onSuccess: function(){

            },
        onFailed: function(exception){
		alert(exception);
        alert("Hubo un problema cerrando sesión");
        }
    }
    RestControllerModule.logOut(callback);
  };

 

  return {
	createUser: createUser,
	createProduct: createProduct,
	logIn: logIn,
	logOut: logOut,
	getActiveUser: getActiveUser,
	setSearch:setSearch,
    getProducts: getProducts,
	getProduct: getProduct,
    getSearchProducts: getSearchProducts
  };

})();