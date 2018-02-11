package com.rj.gestibank.service.impl;

import java.util.List;

import com.rj.gestibank.dao.impl.NotificationDAOImpl;
import com.rj.gestibank.model.Notification;
import com.rj.gestibank.service.INotificationService;

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
