package service;

import java.util.ArrayList;

import model.Reservations;


public interface IReservationsService {
	public ArrayList<Reservations> getAllReservations();
	public ArrayList<Reservations> getPendingReservations();
	public  String updateReservationsStatus(int id, String status);

}
