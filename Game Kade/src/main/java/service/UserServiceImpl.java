package service;

import java.sql.Statement;
import java.util.logging.Logger;

import model.User;
import util.CommanConstants;
import util.DBConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserServiceImpl implements IUserService{
	
	private static Connection con;
	private static Statement st;
	private static PreparedStatement pst;
	private static ResultSet rs;
	
	public static final Logger log = Logger.getLogger(UserServiceImpl.class.getName());

	@Override
	public String login(String email, String password) {
		
		con = DBConnection.getConnection();
		
		try {
			pst = con.prepareStatement(CommanConstants.QUERY_ID_LOGIN);
			pst.setString(1, email);
			pst.setString(2, password);
			rs = pst.executeQuery();
			
			if(rs.next()) {
				 User user = new User();
			}
			
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	}
}
