package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Notification;


public interface INotificationDAO {
	
	public List<Notification> getAllNotifications();//surspec
	
	public Notification getNotificationById(long id);
	
	public List<Notification> getClientNotifications(Long idClient);
	
	public void ajouterNotification(Notification notification);
	
	public void supprimerNotification(long id);

}
