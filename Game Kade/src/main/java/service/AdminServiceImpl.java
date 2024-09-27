package service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import model.EmpReq;
import model.Employees;
import util.CommanConstants;
import util.DBConnection;

public class AdminServiceImpl implements IAdminService{
	
	private static Connection con;
	private static Statement st;
	private static PreparedStatement pst;
	private static ResultSet rs;
	
	public static final Logger log = Logger.getLogger(UserServiceImpl.class.getName());
	
	
	@Override
	public ArrayList<EmpReq> getAllEmpReqList() {
		
		ArrayList<EmpReq> empReqList = new ArrayList<>();
		
		con = DBConnection.getConnection();
		
		try {
			st = con.createStatement();
            rs = st.executeQuery(CommanConstants.QUERY_ID_EMP_AdminGetAllEmpReq);
            
            while(rs.next()) {
                EmpReq empReq = new EmpReq();
                
                empReq.setReqId(rs.getInt(1));
                empReq.setEmpId(rs.getString(2));
                empReq.setEmail(rs.getString(3));
                empReq.setLeaveType(rs.getString(4));
                empReq.setDate(rs.getString(5));
                empReq.setStatus(rs.getString(6));
                empReq.setReason(rs.getString(7));
                
                empReqList.add(empReq);
                
            }
            
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			/*
			 * Close prepared statement and database connectivity at the end of transaction
			 */System.out.println("this is empReqListIMpl");

			try {
				if (pst != null) {
					pst.close();
				}
				if (st != null) {
					st.close();
				}
				if (rs != null) {
					rs.close();
				}
			} catch (SQLException e) {
				log.log(Level.SEVERE, e.getMessage());
			}
	}
		return empReqList;
}

	@Override
	public String updateEmpReqStatus(int id, String status) {
		
		con = DBConnection.getConnection();
		String Status = "There was an error";
		System.out.println("This is the AminupdateEmpReqStatusImpl: " + status +" Id: " +id);

		try {
			System.out.println("this is before try block");
			if(!status.equals("null")) {
				System.out.println("this is after try block");
				pst = con.prepareStatement(CommanConstants.QUERY_ID_Admin_AdminUpdateEmpReq);
				pst.setString(1, status);
				pst.setInt(2, id);
				
				pst.executeUpdate();
			}
			
			Status = "Reservation Updated";
			System.out.println("Status: " +Status);
			System.out.println("status: "+ status);
			
		}catch (Exception e) {
			e.printStackTrace();
		
		}

		return status;
	}


	@Override
	public ArrayList<Employees> getAllEmpList() {
		
		con = DBConnection.getConnection();
		ArrayList<Employees> EmpList = new ArrayList<>();
		
		try {
			
			st = con.createStatement();
            rs = st.executeQuery(CommanConstants.QUERY_ID_AdminGetAllEMP_LIST);
            
            while(rs.next()) {
                Employees empList = new Employees();
                  
                empList.setEmpID(rs.getString(1));
                empList.setEmpName(rs.getString(2));
                empList.setEmpEmail(rs.getString(3));
              
                empList.setEmpPosition(rs.getString(5));

                EmpList.add(empList);
                System.out.println(empList.getEmpName());
            }
            
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return EmpList;
	}

}
