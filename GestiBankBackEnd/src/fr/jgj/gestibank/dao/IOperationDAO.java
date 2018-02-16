package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Operation;

public interface IOperationDAO {
	
	public List<Operation> getAllOperationsByIBAN(String iBAN);
	
	public Operation ajoutOperation(Operation operation);

}
