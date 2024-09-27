/**
 * 
 */
 
 var MenuList = [];
var MenuListTable = document.getElementById('showMenuItems');

console.log("This is customer script");

function callGetAllMenuServlet(){

	$.get("http://localhost:8087/Game_Kade/getAllMenuItems", function(response) {
				
		MenuList = response
		var menuListLen = MenuList.length;
		console.log("This is Menu List " + MenuList);
		
		buildAllMenuList(MenuList, menuListLen);
		
		
	})
}

function buildAllMenuList(MenuList, menuListLen){
	MenuListTable.innerHTML = '';
	
	for(var i = 0; i < menuListLen; i++){
		
		var menuItemInfo = '<div class="menu-item"><img src="' + MenuList[i].image_url + '" alt="' + MenuList[i].name + '"><h3>'+ MenuList[i].name + '</h3>'
		+ '<p>' + MenuList[i].description + '</p>'
		+ '<button onclick="addToCart(\'' + MenuList[i].name + '\', '+ MenuList[i].price +')">Add to Cart</button></div>';	
		
        MenuListTable.innerHTML += menuItemInfo;
       

	}
	
}