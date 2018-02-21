package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.INotificationDAO;
import fr.jgj.gestibank.model.Notification;

public class NotificationDAOImpl implements INotificationDAO {
	
	//static HashMap<Long, Notification> notificationsMap = new HashMap<Long, Notification>();
	static HashMap<Long, Notification> notificationsMap = createMap();
	
	static HashMap<Long, Notification> createMap()
    {
    	HashMap<Long, Notification> notificationsMap = new HashMap<Long, Notification>();
    	Notification notification1 = new Notification(1L, "danger", "notification 1", new Date("01/02/2018"));
    	Notification notification2 = new Notification(2L, "info", "notification 2", new Date("02/02/2018"));
    	Notification notification3 = new Notification(3L, "success", "notification 3", new Date("03/02/2018"));
    	Notification notification4 = new Notification(4L, "warning", "notification 4", new Date("04/02/2018"));
    	notificationsMap.put(1L, notification1);
    	notificationsMap.put(2L, notification2);
    	notificationsMap.put(3L, notification3);
    	notificationsMap.put(4L, notification4);
        return notificationsMap;
    }
	
	@Override
	public List<Notification> getAllNotifications() {
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
