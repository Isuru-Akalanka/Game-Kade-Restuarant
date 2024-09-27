package service;

import java.util.logging.Level;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Logger;

import model.MenuItems;
import model.Reservations;
import util.CommanConstants;
import util.DBConnection;

public class ReservationServiceImpl implements IReservationsService{
	
	private static Connection con;
	private static Statement st;
	private static PreparedStatement pst;
	private static ResultSet rs;
	
	public static final Logger log = Logger.getLogger(UserServiceImpl.class.getName());

	@Override
	public ArrayList<Reservations> getAllReservations() {
		
		con = DBConnection.getConnection();
		
		ArrayList<Reservations> ReservList = new ArrayList<>();
		

		try {
			st = con.createStatement();
            rs = st.executeQuery(CommanConstants.QUERY_ID_CUS_GET_ALL_Reservations);
            
            while(rs.next()) {
            	Reservations reservation = new Reservations();
                
            	reservation.setReservationId(rs.getInt(1));
            	reservation.setCustomerName(rs.getString(2));
            	reservation.setCustomerEmail(rs.getString(3));
            	reservation.setCustomerPhone(rs.getString(4));
            	reservation.setDate(rs.getString(5));
            	reservation.setTimeSlot(rs.getString(6));
            	reservation.setNumOfGuests(rs.getInt(7));
            	reservation.setStatus(rs.getString(8));
            	reservation.setComments(rs.getString(9));
           	
                
            	ReservList.add(reservation);
                
            }
            
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return ReservList;
	}

	@Override
	public ArrayList<Reservations> getPendingReservations() {
		con = DBConnection.getConnection();
		
		
		ArrayList<Reservations> pendReservList = new ArrayList<>();
		

		try {
			st = con.createStatement();
            rs = st.executeQuery(CommanConstants.QUERY_ID_EMP_GET_ALL_PENDING_RESERVATIONS);
            
            while(rs.next()) {
            	Reservations PenReservation = new Reservations();
                
            	PenReservation.setReservationId(rs.getInt(1));
            	PenReservation.setCustomerName(rs.getString(2));
            	PenReservation.setCustomerEmail(rs.getString(3));
            	PenReservation.setCustomerPhone(rs.getString(4));
            	PenReservation.setDate(rs.getString(5));
            	PenReservation.setTimeSlot(rs.getString(6));
            	PenReservation.setNumOfGuests(rs.getInt(7));
            	PenReservation.setStatus(rs.getString(8));
            	PenReservation.setComments(rs.getString(9));
           	
                
            	pendReservList.add(PenReservation);
                
            }
            
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return pendReservList;
	}

	@Override
	public String updateReservationsStatus(int id, String status) {
		
		con = DBConnection.getConnection();
		String Status = "There was an error";
		System.out.println("This is the updateResrvationStatusImpl: " + status +" Id: " +id);

		try {
			System.out.println("this is before try block");
			if(!status.equals("null")) {
				System.out.println("this is after try block");
				pst = con.prepareStatement(CommanConstants.QUERY_ID_UPDATE_Res_status);
				pst.setString(1, status);
				pst.setInt(2, id);
				
				pst.executeUpdate();
			}
			
			Status = "Reservation Updated";
			System.out.println("Status: " +Status);
			System.out.println("status: "+ status);
			
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			/*
			 * Close prepared statement and database connectivity at the end of transaction
			 */

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

		return status;
	}
		
}
