package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.IDemandeDAO;
import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.model.DemandeChequier;
import fr.jgj.gestibank.model.Inscription;
import fr.jgj.gestibank.model.Notification;
import fr.jgj.gestibank.dao.impl.*;
public class DemandeDAOImpl implements IDemandeDAO {

	// Création d'un bouchon liste de demandes
	static HashMap<String, Demande> demandesMap = createMap();

	static HashMap<String, Demande> createMap() {
		HashMap<String, Demande> demandesMap = new HashMap<String, Demande>();

		Inscription demande1 = new Inscription(1L, 1L, new Date(), true,
				new Date());
		Inscription demande2 = new Inscription(2L, 2L, new Date(), false,
				new Date());
		Inscription demande3 = new Inscription(3L, 3L, new Date(), true, null);
		Inscription demande4 = new Inscription(4L, 0, new Date(), false,
				new Date());
		DemandeChequier demande5 = new DemandeChequier(5L, 1L, new Date(),
				true, "888", "10010001");
		DemandeChequier demande6 = new DemandeChequier(6L, 1L, new Date(),
				false, "888", "10010001");
		DemandeChequier demande7 = new DemandeChequier(7L, 3L, new Date(),
				true, "888", "10010003");
		DemandeChequier demande8 = new DemandeChequier(8L, 4L, new Date(),
				true, "888", "10010004");
		DemandeChequier demande9 = new DemandeChequier(9L, 5L, new Date(),
				true, "888", "10010006");
		DemandeChequier demande10 = new DemandeChequier(10L, 5L, new Date(),
				true, "888", "10010007");

		demandesMap.put("1", demande1);
		demandesMap.put("2", demande2);
		demandesMap.put("3", demande3);
		demandesMap.put("4", demande4);
		demandesMap.put("5", demande5);
		demandesMap.put("6", demande6);
		demandesMap.put("7", demande7);
		demandesMap.put("8", demande8);
		demandesMap.put("9", demande9);
		demandesMap.put("10", demande10);
		return demandesMap;
	}

	@Override
	public Demande getDemandeById(String id) {
		Demande demande = demandesMap.get(id);
		return demande;

	}

	@Override
	public List<DemandeChequier> getDemandeChequierByClient(String idClient) {
		List<DemandeChequier> demandesTemp = new ArrayList<DemandeChequier>();
		List<Demande> demandes = this.getAllDemandes();
		for (Demande demande : demandes) {
			if (demande instanceof DemandeChequier) {
				demandesTemp.add((DemandeChequier) demande);
			}
		}
		return demandesTemp;
	}

	@Override
	public DemandeChequier creerDemandeChequier(DemandeChequier demandeChequier) {
		DemandeChequier demande =(DemandeChequier) demandesMap.put(demandeChequier.getIdClient() + "", demandeChequier);
		return demande;
	}

	@Override
	public Demande modifierDemande(Demande demande) {
		if (demandesMap.get(demande.getIdClient()) != null) {
			demandesMap.get(demande.getIdClient()).setIdDemande(
					demande.getIdDemande());
			demandesMap.get(demande.getIdClient()).setStatus(
					demande.getStatus());
			demandesMap.get(demande.getIdClient()).setDateDemande(
					demande.getDateDemande());
			Notification notification = new Notification("success", "notification 1", new Date("01/02/2018"));
			NotificationDAOImpl notificationDAOImpl = new NotificationDAOImpl();
			notificationDAOImpl.ajouterNotification(notification);
		} else {
			demandesMap.put(demande.getIdClient() + "", demande);
		}
		return demandesMap.get(demande.getIdClient());
	}

	@Override
	public List<Inscription> getAllInscriptions() {
		List<Inscription> demandesTemp = new ArrayList<Inscription>();
		List<Demande> demandes = this.getAllDemandes();
		for (Demande demande : demandes) {
			if (demande instanceof Inscription) {
				demandesTemp.add((Inscription) demande);
			}
		}
		return demandesTemp;
	}

	@Override
	public List<Demande> getAllDemandes() {
		List<Demande> demandes = new ArrayList<Demande>(
				this.demandesMap.values());
		return demandes;
	}

	@Override
	public Demande supprimerDemande(String id) {
		Demande demandeResponse = demandesMap.remove(id);
		return demandeResponse;
	}
}
