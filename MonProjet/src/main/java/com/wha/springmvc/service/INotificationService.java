package com.wha.springmvc.service;

import java.util.List;

import com.wha.springmvc.model.Notification;

public interface INotificationService {
	
	public List<Notification> getAllNotifications();//surspec
	
	public List<Notification> getClientNotifications(long idClient);
	
	public void ajouterNotification(Notification notification);
	
	public void supprimerNotification(long id);

}
