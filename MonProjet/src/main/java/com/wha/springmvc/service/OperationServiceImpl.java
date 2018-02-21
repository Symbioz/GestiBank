package com.wha.springmvc.service;

import java.util.List;

import com.wha.springmvc.dao.IOperationDAO;
import org.springframework.beans.factory.annotation.Autowired;

import com.wha.springmvc.model.Operation;


public class OperationServiceImpl implements IOperationService {

	@Autowired
	IOperationDAO operationDAOImpl;
		
	
	@Override
	public List<Operation> getAllOperationsByIBAN(String iBAN) {
		List<Operation> operationList = operationDAOImpl.getAllOperationsByIBAN(iBAN);
		return operationList;
	}

	@Override
	public Operation ajoutOperation(Operation operation) {
		Operation operationResponse = operationDAOImpl.ajoutOperation(operation);
		return operationResponse;
	}

}
