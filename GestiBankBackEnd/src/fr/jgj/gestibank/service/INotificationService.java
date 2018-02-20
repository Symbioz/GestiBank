package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Notification;

public interface INotificationService {
	
	public List<Notification> getAllNotifications();//surspec
	
	public List<Notification> getClientNotifications(long idClient);
	
	public Notification ajouterNotification(Notification notification);
	
	public Notification supprimerNotification(long id);

}
