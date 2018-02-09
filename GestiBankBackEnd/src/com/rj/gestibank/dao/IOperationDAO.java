package com.rj.gestibank.dao;

import java.util.List;

import com.rj.gestibank.model.Operation;

public interface IOperationDAO {
	
	public List<Operation> getAllOperation();
	
	public Operation ajoutOperation(Operation operation);

}
