package service;

import java.util.ArrayList;

import model.EmpReq;
import model.Employees;

public interface IAdminService {
	public ArrayList<Employees> getAllEmpList();
	public ArrayList<EmpReq> getAllEmpReqList();
	public  String updateEmpReqStatus(int id, String status);
}
