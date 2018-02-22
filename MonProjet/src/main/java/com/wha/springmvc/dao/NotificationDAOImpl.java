package com.wha.springmvc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.wha.springmvc.model.Notification;

@Repository("notificationDAOImpl")
public class NotificationDAOImpl extends AbstractDao<Long, Notification> implements INotificationDAO {
	
	@PersistenceContext
	EntityManager em;
	
	@Transactional
	@SuppressWarnings("unchecked")
	public List<Notification> getAllNotifications() {
		List<Notification> notifsList;
		notifsList = em.createQuery("SELECT n FROM Notification n")
					   .getResultList();
		return notifsList;
	}
	
	@Transactional
	public Notification getNotificationById(long id) {
		Notification notification = getByKey(id);
		return notification;
	}
	
	@Transactional
	@SuppressWarnings("unchecked")
	public List<Notification> getClientNotifications(long idClient) {
		List<Notification> notifs;
		notifs = em.createQuery("SELECT n FROM Notification n WHERE n.idClient = "+ idClient)
					   .getResultList();
		return notifs;
	}

	
	public void ajouterNotification(Notification notification) {
		persist(notification);
	}

	public void supprimerNotification(long id) {		
		Notification notification = getByKey(id);
		delete(notification);
	}


}
