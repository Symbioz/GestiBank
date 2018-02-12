package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Notification;

public interface INotificationService {
	
	public List<Notification> getAllNotifications();
	
	public Notification ajouterNotification(Notification notification);
	
	public Notification supprimerNotification(Long id);

}
