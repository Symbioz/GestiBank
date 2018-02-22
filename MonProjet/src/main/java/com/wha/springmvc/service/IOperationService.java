package com.wha.springmvc.service;

import java.util.List;

import com.wha.springmvc.model.Operation;

public interface IOperationService {
	
	public List<Operation> getAllOperationsByIBAN(String iBAN);
	
	public Operation ajoutOperation(Operation operation);
	
}
