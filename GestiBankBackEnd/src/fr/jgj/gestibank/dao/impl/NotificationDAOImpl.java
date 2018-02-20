package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.INotificationDAO;
import fr.jgj.gestibank.model.Notification;

public class NotificationDAOImpl implements INotificationDAO {
	
	//static HashMap<int, Notification> notificationsMap = new HashMap<int, Notification>();
	static HashMap<int, Notification> notificationsMap = createMap();
	
	static HashMap<int, Notification> createMap()
    {
    	HashMap<int, Notification> notificationsMap = new HashMap<int, Notification>();
    	Notification notification1 = new Notification(1, "danger", "notification 1", new Date("01/02/2018"));
    	Notification notification2 = new Notification(2, "info", "notification 2", new Date("02/02/2018"));
    	Notification notification3 = new Notification(3, "success", "notification 3", new Date("03/02/2018"));
    	Notification notification4 = new Notification(4, "warning", "notification 4", new Date("04/02/2018"));
    	notificationsMap.put(1, notification1);
    	notificationsMap.put(2, notification2);
    	notificationsMap.put(3, notification3);
    	notificationsMap.put(4, notification4);
        return notificationsMap;
    }
	
	@Override
	public List<Notification> getAllNotifications() {
		List<Notification> notifications = new ArrayList<Notification>(notificationsMap.values());
		return notifications;
	}

	@Override
	public Notification ajouterNotification(Notification notification) {
		int id = notification.getId();
		notificationsMap.put(id, notification);
		return notificationsMap.get(id);
	}

	@Override
	public Notification supprimerNotification(int id) {
		Notification notificationResponse = notificationsMap.remove(id);
		return notificationResponse;
	}

}
