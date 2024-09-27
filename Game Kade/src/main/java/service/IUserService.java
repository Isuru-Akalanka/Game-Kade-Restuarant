package service;



import java.util.logging.Logger;


public interface IUserService {
	public static final Logger LOG = Logger.getLogger(IUserService.class.getName());
	
	public String login(String username, String password);
	public String register(String username, String password, String email);
	public String forgotPassword(String email);
	public String updatePassword(String username, String password, String newPassword);
	

}
