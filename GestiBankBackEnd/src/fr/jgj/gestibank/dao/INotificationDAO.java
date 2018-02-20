package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Notification;

public interface INotificationDAO {
	
	public List<Notification> getAllNotifications();
	
	public Notification ajouterNotification(Notification notification);
	
	public Notification supprimerNotification(int id);

}
