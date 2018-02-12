package com.rj.gestibank.service;

import java.util.List;

import com.rj.gestibank.model.Notification;

public interface INotificationService {
	
	public List<Notification> getAllNotifications();
	
	public Notification ajouterNotification(Notification notification);
	
	public Notification supprimerNotification(Long id);

}
