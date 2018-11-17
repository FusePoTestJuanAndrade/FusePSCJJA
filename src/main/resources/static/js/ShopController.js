var OrdersControllerModule = (function () {
  
  var loadProduct=function (product,elemento) {

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
   var getSearchProducts = function () {
    var callback = {
		
        onSuccess: function(ordersList){
			document.getElementById("cuerpoDeTablas").innerHTML = '';
			for(i in ordersList){
			loadOrder(ordersList[i],"cuerpoDeTablas");
			}
			alert("Los datos se descargaron de manera satisfactoria");
            },
        onFailed: function(exception){
		alert(exception);
        }
    }
    RestControllerModule.getSearchProducts(search,callback);
  };
  
  var getProduct = function (orderId) {
    
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
	  


 

  return {
	getActiveUser: getActiveUser,
    getProducts: getProducts,
	getProduct: getProduct,
    getSearchProducts: getSearchProducts
  };

})();