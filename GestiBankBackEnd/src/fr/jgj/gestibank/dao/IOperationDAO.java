package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Operation;

public interface IOperationDAO {
	
	public List<Operation> getAllOperation();
	
	public Operation ajoutOperation(Operation operation);

}
