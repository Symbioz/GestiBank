package com.wha.springmvc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.wha.springmvc.model.Notification;

public class NotificationDAOImpl extends AbstractDao<Long, Notification> implements INotificationDAO {
	
	@PersistenceContext
	EntityManager em;
	
	@Override
	@SuppressWarnings("unchecked")
	public List<Notification> getAllNotifications() {
		List<Notification> notifsList;
		notifsList = em.createQuery("SELECT n FROM Notification n")
					   .getResultList();
		return notifsList;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Notification> getClientNotifications(long idClient) {
		List<Notification> notifs;
		notifs = em.createQuery("SELECT n FROM Notification n WHERE n.idClient = "+ idClient)
					   .getResultList();
		return notifs;
	}

	
	@Override
	public void ajouterNotification(Notification notification) {
		persist(notification);
	}

	@Override
	public void supprimerNotification(long id) {		
		Notification notification = getByKey(id);
		delete(notification);
	}


}
