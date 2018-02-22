package com.wha.springmvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.wha.springmvc.model.Notification;
import com.wha.springmvc.model.User;
import com.wha.springmvc.service.INotificationService;
import com.wha.springmvc.service.NotificationServiceImpl;

@RestController
public class NotificationController {

	@Autowired 
	INotificationService notificationService;
	
	//-------------------Récupération de toutes les notifications--------------------------------------------------------
    
    @RequestMapping(value = "/notifications", method = RequestMethod.GET)
    public List<Notification> listAllNotifications() {
    	System.out.println("listAllNotifications");
        List<Notification> notifs = notificationService.getAllNotifications();

        return notifs;
    }
	
    
 
    //-------------------Récupération des notifications d'un client--------------------------------------------------------
    
//    @RequestMapping(value = "/clients/{id}/notifications", method = RequestMethod.GET)
//    public List<Notification> listClientNotifications(@PathVariable("id") long id) {
//    	System.out.println("listClientNotifications for client ");
//        List<Notification> notifs = notificationService.getClientNotifications(id);
//
//        return notifs;
//    }
	
    
 
    //-------------------Création d'une notification--------------------------------------------------------
    
    @RequestMapping(value = "/notifications", method = RequestMethod.POST)
    public void createNotifications(@RequestBody Notification notif) {
    	System.out.println("Creating notification : " + notif.getMessage());
   	 	
    	notificationService.ajouterNotification(notif);

    }
	
    
    //-------------------Suppression d'une notification--------------------------------------------------------
    
    @RequestMapping(value = "/notifications/{id}", method = RequestMethod.DELETE)
    public void deleteNotification(@PathVariable("id") long id) {
        System.out.println("Fetching & Deleting Notif with id " + id);
        
        notificationService.supprimerNotification(id);
    }
}
