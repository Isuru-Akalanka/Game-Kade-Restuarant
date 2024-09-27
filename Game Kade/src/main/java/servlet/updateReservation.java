package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import model.Reservations;
import service.IReservationsService;
import service.ReservationServiceImpl;

/**
 * Servlet implementation class updateReservation
 */
@WebServlet("/updateReservation")
public class updateReservation extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public updateReservation() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
		String id = request.getParameter("reservationId");
		String status = request.getParameter("action");
		
		int resId = Integer.parseInt(id);
		
		System.out.println("id: " + id + " status: " + status);
		
		//Collection<Reservations> reservations = new ArrayList<Reservations>();
		IReservationsService ireservations = new ReservationServiceImpl();
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		String resp = new Gson().toJson(ireservations.updateReservationsStatus(resId, status));
		out.print(resp);
		
	}

}
