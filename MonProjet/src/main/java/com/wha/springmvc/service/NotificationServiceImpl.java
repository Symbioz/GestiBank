package com.wha.springmvc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wha.springmvc.dao.INotificationDAO;
import com.wha.springmvc.model.Notification;

@Service("notificationService")
@Transactional
public class NotificationServiceImpl implements INotificationService {
	
	@Autowired
	INotificationDAO notificationDAOImpl;
	
	
	public List<Notification> getAllNotifications() {
		List<Notification> notificationList = notificationDAOImpl.getAllNotifications();
		return notificationList;
	}
	
	public Notification getNotificationById(long id) {
		Notification notification = notificationDAOImpl.getNotificationById(id);
		return notification;
	}
	
	public List<Notification> getClientNotifications(long idClient) {
		List<Notification> notificationList = notificationDAOImpl.getClientNotifications(idClient);
		return notificationList;
	}

	public void ajouterNotification(Notification notification) {
		notificationDAOImpl.ajouterNotification(notification);
	}
	
	public void supprimerNotification(long id) {
		notificationDAOImpl.supprimerNotification(id);
	}

	


}
