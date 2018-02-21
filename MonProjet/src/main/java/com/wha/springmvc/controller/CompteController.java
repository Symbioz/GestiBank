package com.wha.springmvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wha.springmvc.model.Compte;
import com.wha.springmvc.model.Notification;
import com.wha.springmvc.model.Operation;
import com.wha.springmvc.service.ICompteService;
import com.wha.springmvc.service.IOperationService;


@RestController
public class CompteController {
	
	@Autowired
	ICompteService compteService;
	
	@Autowired
	IOperationService operationService;
	
	//-------------------Récupération d'un compte via son IBAN--------------------------------------------------------
	@RequestMapping(value = "/compte/{IBAN}", method = RequestMethod.GET)
    public Compte getCompteByIBAN(@PathVariable("IBAN") String IBAN) {
    	System.out.println("listClientComptes for client ");
        Compte compte = compteService.getCompteByIBAN(IBAN);
        return compte;
    }
	
	//-------------------Modification d'un compte via son IBAN--------------------------------------------------------
    
	
	
	
	
	//-------------------Récupération des operations liées à un compte--------------------------------------------------------
	@RequestMapping(value = "/compte/{IBAN}/operations", method = RequestMethod.GET)
    public List<Operation> getCompteOperations(@PathVariable("IBAN") String IBAN) {
    	System.out.println("listOperations for compte ");
        // TODO
        return null;
    }
	
	
	
	
	
	//-------------------Ajouter une opération--------------------------------------------------------
    
	
	
	
	
	
}
