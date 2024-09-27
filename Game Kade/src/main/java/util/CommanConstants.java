package util;

public class CommanConstants {
	public static final String QUERY_ID_LOGIN = "SELECT * FROM cusdetails where Cusemail=? and CusPassword=?";
	public static final String QUERY_ID_UPDATE_PASSWORD = "UPDATE cusdetails SET CusPassword=? WHERE Cusemail=?";
	public static final String QUERY_ID_UPDATE_PROFILE = "UPDATE cusdetails SET CusName=?, CusPhone=?, CusAddress=? WHERE Cusemail=?";
	
	
	//customer Service
	
	public static final String QUERY_ID_CUS_GET_ALL_MENU_ITEMS = "SELECT * FROM gamekade.menu_items;";
	
	
	//common services
	

	
	public static final String QUERY_ID_UPDATE_Res_status = "UPDATE gamekade.reservations SET ResStatus = ? WHERE ResId = ?";
	
	public static final String QUERY_ID_CUS_GET_ALL_Reservations = "SELECT * FROM gamekade.reservations;";
	
	//Admin Services
	
	public static final String QUERY_ID_EMP_AdminGetAllEmpReq = "SELECT * FROM gamekade.empleavereq;";
	
	//get all employee list
	public static final String QUERY_ID_AdminGetAllEMP_LIST = "SELECT * FROM gamekade.empdetails;";
	
	//Admin update Emp requests
	public static final String QUERY_ID_Admin_AdminUpdateEmpReq = "UPDATE `gamekade`.`empleavereq` SET `status` = ? WHERE (`ReqId` = ?)";
	//pending reservations
	public static final String QUERY_ID_EMP_GET_ALL_PENDING_RESERVATIONS = "SELECT * FROM gamekade.reservations Where ResStatus = 'pending';";
}
