package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Operation;

public interface IOperationDAO {
	
	public List<Operation> getAllOperationsByIBAN(String iBAN);
	
	public Operation ajoutOperation(Operation operation);

}
