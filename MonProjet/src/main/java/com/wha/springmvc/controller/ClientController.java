package com.wha.springmvc.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wha.springmvc.model.Client;
import com.wha.springmvc.model.Compte;
import com.wha.springmvc.model.Notification;
import com.wha.springmvc.service.IClientService;
import com.wha.springmvc.service.ICompteService;
import com.wha.springmvc.service.INotificationService;
import com.wha.springmvc.service.IOperationService;

@RestController
public class ClientController {
	
	@Autowired	IClientService clientService;
	@Autowired	ICompteService comtpeService;
	@Autowired	IOperationService operationService;
	@Autowired	INotificationService notificationService;
	
	//==========================Gestion des Clients=======================================
	
	//------------------Récupération de la liste des clients------------------------------
	@RequestMapping(value = "/clients", method = RequestMethod.GET)
    public List<Client> listAllNotifications() {
        List<Client> clients = clientService.getAllClients();
        return clients;
    }
		
	//------------------Récupération d'un client via son id-------------------------------
	@RequestMapping(value = "/clients/{id}", method = RequestMethod.GET)
    public Client getClientById(@PathVariable("id") long id) {
		Client client = clientService.getClientById(id);
		return client;
	}
	
	//==========================Gestion des Notifs=======================================
	
	//------------------Récupération de la liste des notifs d'un client------------------
	@RequestMapping(value = "/clients/{id}/notifications", method = RequestMethod.GET)
    public Set<Notification> listClientNotifications(@PathVariable("id") long id) {
    	Client client = clientService.getClientById(id);
        Set<Notification> notifs = client.getNotifications();
        return notifs;
    }
	
	//==========================Gestion des Comptes=======================================
	
	//------------------Récupération de la liste des comptes d'un client------------------
	@RequestMapping(value = "/clients/{id}/comptes", method = RequestMethod.GET)
    public Set<Compte> listClientComptes(@PathVariable("id") long id) {
    	System.out.println("listClientComptes for client ");
    	Client client = clientService.getClientById(id);
        Set<Compte> comptes = client.getComptes();
        return comptes;
    }
	
	//------------------Récupération de la liste des comptes d'un client------------------
	@RequestMapping(value = "/clients/{id}/comptes/{iBAN}", method = RequestMethod.GET)
    public Compte getCompteByIBAN(@PathVariable("iBAN") String iBAN) {
    	System.out.println("get compte by iBAN");
    	Compte compte = comtpeService.getCompteByIBAN(iBAN);
        return compte;
	}
	
	
	//==========================Gestion des Opérations=======================================
	
	//-------------Récupération de la liste des opération d'un compte-----------------
//		@RequestMapping(value = "/clients/{id}/comptes/{iBAN}/operations", method = RequestMethod.GET)
//	    public List<Compte> listClientComptes(@PathVariable("id") long id) {
//	    	System.out.println("listClientComptes for client ");
//	    	Client client = clientService.getClientById(id);
//	        List<Compte> comptes = client.getComptes();
//	        return comptes;
//	    }
	
	
	
}
