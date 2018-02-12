package com.rj.gestibank.dao;

import java.util.List;

import com.rj.gestibank.model.Notification;

public interface INotificationDAO {
	
	public List<Notification> getAllNotification();
	
	public Notification ajouterNotification(Notification notification);
	
	public Notification supprimerNotification(Long id);

}
