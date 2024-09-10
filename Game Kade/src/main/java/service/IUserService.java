package service;

import java.util.logging.Logger;

public interface IUserService {
	public static final Logger LOG = Logger.getLogger(IUserService.class.getName());
	
	public String login(String username, String password);

}
