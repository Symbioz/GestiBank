package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Operation;

public interface IOperationService {
	
	public List<Operation> getAllOperationsByIBAN(String iBAN);
	
	public Operation ajoutOperation(Operation operation);
	
}
