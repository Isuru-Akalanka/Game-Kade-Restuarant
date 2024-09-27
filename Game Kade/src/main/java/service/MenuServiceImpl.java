package service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Logger;

import model.MenuItems;
import util.CommanConstants;
import util.DBConnection;

public class MenuServiceImpl implements IMenuService {
	
	private static Connection con;
	private static Statement st;
	private static PreparedStatement pst;
	private static ResultSet rs;
	
	public static final Logger log = Logger.getLogger(UserServiceImpl.class.getName());

	@Override
	public ArrayList<MenuItems> getAllMenu() {
		
		con = DBConnection.getConnection();
		
		ArrayList<MenuItems> MenuList = new ArrayList<>();
		

		try {
			st = con.createStatement();
            rs = st.executeQuery(CommanConstants.QUERY_ID_CUS_GET_ALL_MENU_ITEMS);
            
            while(rs.next()) {
            	MenuItems menuList = new MenuItems();
                
            	menuList.setId(rs.getInt(1));
            	menuList.setName(rs.getString(2));
                menuList.setDescription(rs.getString(3));
                menuList.setPrice(rs.getDouble(4));
                menuList.setCategory(rs.getString(5));
                menuList.setImage_url(rs.getString(6));
                
                MenuList.add(menuList);
                
            }
            
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return MenuList;
	}

}
