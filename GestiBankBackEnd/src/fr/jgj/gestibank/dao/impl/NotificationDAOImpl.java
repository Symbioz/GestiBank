package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


import fr.jgj.gestibank.dao.INotificationDAO;
import fr.jgj.gestibank.model.Notification;

public class NotificationDAOImpl implements INotificationDAO {
	
	static HashMap<Long, Notification> notificationsMap = new HashMap<Long, Notification>();
	
	static HashMap<Long, Notification> createMap()
    {
    	HashMap<Long, Notification> notificationsMap = new HashMap<Long, Notification>();
    	Notification notification1 = new Notification(1L, "notification 1", "01/02/2018");
    	Notification notification2 = new Notification(2L, "notification 2", "02/02/2018");
    	Notification notification3 = new Notification(3L, "notification 3", "03/02/2018");
    	notificationsMap.put(1L, notification1);
    	notificationsMap.put(2L, notification2);
    	notificationsMap.put(3L, notification3);
        return notificationsMap;
    }
	
	@Override
	public List<Notification> getAllNotification() {
		List<Notification> notifications = new ArrayList<Notification>(notificationsMap.values());
		return notifications;
	}

	@Override
	public Notification ajouterNotification(Notification notification) {
		Long id = notification.getId();
		notificationsMap.put(id, notification);
		return notificationsMap.get(id);
	}

	@Override
	public Notification supprimerNotification(Long id) {
		Notification notificationResponse = notificationsMap.remove(id);
		return notificationResponse;
	}

}
