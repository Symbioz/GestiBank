package com.wha.springmvc.service;

import java.util.List;

import com.wha.springmvc.dao.IOperationDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wha.springmvc.model.Operation;

@Service("operationService")
public class OperationServiceImpl implements IOperationService {

	@Autowired
	IOperationDAO operationDAOImpl;
		
	
	//Récupération de toutes les opérations liées à un compte via son iBAN
	public List<Operation> getAllOperationsByIBAN(String iBAN) {
		List<Operation> operationList = operationDAOImpl.getAllOperationsByIBAN(iBAN);
		return operationList;
	}

	//Création d'une opération 
	public Operation ajoutOperation(Operation operation) {
		Operation operationResponse = operationDAOImpl.ajoutOperation(operation);
		return operationResponse;
	}

}
