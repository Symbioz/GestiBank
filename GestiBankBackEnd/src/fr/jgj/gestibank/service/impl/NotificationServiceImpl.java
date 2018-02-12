package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.NotificationDAOImpl;
import fr.jgj.gestibank.model.Notification;
import fr.jgj.gestibank.service.INotificationService;

public class NotificationServiceImpl implements INotificationService {
	
	//à modifier ? spring
	NotificationDAOImpl notificationDAOImpl = new NotificationDAOImpl();
	
	//méthode (non modifié par Spring)
	@Override
	public List<Notification> getAllNotifications() {
		List<Notification> notificationList = notificationDAOImpl.getAllNotification();
		return notificationList;
	}

	@Override
	public Notification ajouterNotification(Notification notification) {
		Notification notificationResponse = notificationDAOImpl.ajouterNotification(notification);
		return notificationResponse;
	}
	@Override
	public Notification supprimerNotification(Long id) {
		Notification notificationResponse = notificationDAOImpl.supprimerNotification(id);
		return notificationResponse;
	}


}
