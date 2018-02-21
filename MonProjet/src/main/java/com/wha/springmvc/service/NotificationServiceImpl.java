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
	
	
	@Override
	public List<Notification> getAllNotifications() {
		List<Notification> notificationList = notificationDAOImpl.getAllNotifications();
		return notificationList;
	}

	@Override
	public List<Notification> getClientNotifications(long idClient) {
		List<Notification> notificationList = notificationDAOImpl.getClientNotifications(idClient);
		return notificationList;
	}

	@Override
	public void ajouterNotification(Notification notification) {
		ajouterNotification(notification);
	}
	@Override
	public void supprimerNotification(long id) {
		notificationDAOImpl.supprimerNotification(id);
	}


}
