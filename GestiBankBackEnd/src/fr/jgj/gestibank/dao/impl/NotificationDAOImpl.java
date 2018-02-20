package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.INotificationDAO;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Notification;

public class NotificationDAOImpl implements INotificationDAO {
	
	//static HashMap<Long, Notification> notificationsMap = new HashMap<Long, Notification>();
	static HashMap<Long, Notification> notificationsMap = createMap();
	
	static HashMap<Long, Notification> createMap()
    {
    	HashMap<Long, Notification> notificationsMap = new HashMap<Long, Notification>();
    	Notification notification1 = new Notification(1L, 1, "danger", "client 1 / danger", new Date("01/02/2018"));
    	Notification notification2 = new Notification(2L, 1, "info", "client 1 / info", new Date("02/02/2018"));
    	Notification notification3 = new Notification(3L, 1, "success", "client 1 / success", new Date("03/02/2018"));
    	Notification notification4 = new Notification(4L, 1, "warning", "client 1 / warning", new Date("04/02/2018"));
    	Notification notification5 = new Notification(5L, 2, "warning", "client 2 / warning", new Date("01/01/2018"));
    	Notification notification6 = new Notification(6L, 2, "success", "client 2 / success", new Date("02/02/2018"));
    	Notification notification7 = new Notification(7L, 2, "info", "client 2 / info", new Date("03/03/2018"));
    	Notification notification8 = new Notification(8L, 2, "danger", "client 2 / danger", new Date("04/04/2018"));
    	notificationsMap.put(1L, notification1);
    	notificationsMap.put(2L, notification2);
    	notificationsMap.put(3L, notification3);
    	notificationsMap.put(4L, notification4);
    	notificationsMap.put(4L, notification4);
    	notificationsMap.put(5L, notification5);
    	notificationsMap.put(6L, notification6);
    	notificationsMap.put(7L, notification7);
    	notificationsMap.put(8L, notification8);
        return notificationsMap;
    }
	
	@Override
	public List<Notification> getAllNotifications() {
		List<Notification> notifications = new ArrayList<Notification>(notificationsMap.values());
		return notifications;
	}

	@Override
	public List<Notification> getClientNotifications(long idClient) {
		//création de la liste filtrée
		List<Notification> notifications = new ArrayList<Notification>();
		//pour l'ensemble des opérations en mémoires
		for (Notification notification : notificationsMap.values()) {
			//suivant l'identifiant du compte
			if (notification.getIdClient() == idClient) {
				notifications.add(notification);
			}
		}		
		return notifications;
	}
	
	@Override
	public Notification ajouterNotification(Notification notification) {
		Long id = notification.getId();
		notificationsMap.put(id, notification);
		return notificationsMap.get(id);
	}

	@Override
	public Notification supprimerNotification(long id) {
		Notification notificationResponse = notificationsMap.remove(id);
		return notificationResponse;
	}


}
