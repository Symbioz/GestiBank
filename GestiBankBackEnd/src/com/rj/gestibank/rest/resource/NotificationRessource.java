package com.rj.gestibank.rest.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.rj.gestibank.model.Notification;
import com.rj.gestibank.service.impl.NotificationServiceImpl;

@Path("/notifications")
public class NotificationRessource {
	
	NotificationServiceImpl notificationServiceImpl = new NotificationServiceImpl();
	
	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Notification> listAllNotifications() {
		List<Notification> notificationList = notificationServiceImpl.getAllNotifications();
		return notificationList;
	}
	
	// CRUD -- CREATE operation
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Notification createNotification(Notification notification) {
		Notification notificationResponse = notificationServiceImpl.ajouterNotification(notification);
		return notificationResponse;
	}
	
	// CRUD -- DELETE operation
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Notification deleteNotification(@PathParam("id") Long id) {
		Notification notificationResponse = notificationServiceImpl.supprimerNotification(id);
		return notificationResponse;
	}
}
