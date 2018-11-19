package fuse.appweb.shop.bill;

import fuse.appweb.shop.model.Order;
import fuse.appweb.shop.model.Product;
import java.util.Map;

public interface BillCalculator {
	
	public float calculateBill(Order o,Map<String,Product> productsMap);
	
}
