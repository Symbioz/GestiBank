package com.wha.springmvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.wha.springmvc.model.Notification;
import com.wha.springmvc.model.User;
import com.wha.springmvc.service.NotificationServiceImpl;

@RestController
public class NotificationController {

	@Autowired 
	NotificationServiceImpl notificationService;
	
	//-------------------Récupération de toutes les notifications--------------------------------------------------------
    
    @RequestMapping(value = "/notifications", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Notification>> listAllNotifications() {
    	System.out.println("listAllNotifications");
        List<Notification> notifs = notificationService.getAllNotifications();
        if(notifs.isEmpty()){
            return new ResponseEntity<List<Notification>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Notification>>(notifs, HttpStatus.OK);
    }
	
    
    //-------------------Création d'une notification--------------------------------------------------------
    
    @RequestMapping(value = "/notifications", method = RequestMethod.POST)
    public ResponseEntity<Void> createNotifications(@RequestBody Notification notif, UriComponentsBuilder ucBuilder) {
    	System.out.println("Creating notification : " + notif.getMessage());
   	 	
    	notificationService.ajouterNotification(notif);
        
    	HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/notifications/{id}").buildAndExpand(notif.getId()).toUri());
        
    	return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
	
    
}
