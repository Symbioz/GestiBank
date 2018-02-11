package com.rj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.rj.gestibank.dao.INotificationDAO;
import com.rj.gestibank.model.Notification;

public class NotificationDAOImpl implements INotificationDAO {
	
	static HashMap<Long, Notification> notificationsMap = new HashMap<Long, Notification>();
	
	@Override
	public List<Notification> getAllNotification() {
		List<Notification> notifications = new ArrayList<Notification>(notificationsMap.values());
		return notifications;
	}

	@Override
	public Notification ajoutNotification(Notification notification) {
		Long id = notification.getId();
		notificationsMap.put(id, notification);
		return notificationsMap.get(id);
	}

}
