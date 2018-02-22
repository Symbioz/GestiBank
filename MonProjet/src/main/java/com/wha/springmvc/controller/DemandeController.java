package com.wha.springmvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wha.springmvc.model.Demande;
import com.wha.springmvc.model.DemandeChequier;
import com.wha.springmvc.model.Inscription;
import com.wha.springmvc.service.IDemandeService;

@RestController
public class DemandeController {
	
	@Autowired
	IDemandeService demandeService;

	//-------------------Récupération d'une demande via son id--------------------------------------------------------
	
	@RequestMapping(value = "/demandes/{id}", method = RequestMethod.GET)
	public Demande getDemandesByID(@PathVariable("id") Long id) {
		Demande demande = demandeService.getDemandeById(id);
		return demande;
	}

	@RequestMapping(value = "/demandes/inscriptions", method = RequestMethod.GET)
	public List<Inscription> listAllInscriptions() {
		List<Inscription> inscriptionList = demandeService.getAllInscriptions();
		return inscriptionList;
	}

	@RequestMapping(value = "/demandes/client/{id}", method = RequestMethod.GET)
	public List<DemandeChequier> getDemandeChequierByClient(@PathVariable Long id) {
		List<DemandeChequier> demande = demandeService.getDemandeChequierByClient(id);
		return demande;
	}
	
	@RequestMapping(value = "/demandes/matricule/{matricule}", method = RequestMethod.GET)
	public List<Demande> getAllDemandeByAgent(@PathVariable("matricule") String matricule) {
		List<Demande> demande = demandeService.getAllDemandesByAgent(matricule);
		return demande;
	}
	
	@RequestMapping(value = "/demandes", method = RequestMethod.GET)
	public List<Demande> getAllDemandes() {
		List<Demande> demande = demandeService.getAllDemandes();
		return demande;
	}
	
	public Demande updateDemande(Demande demande) {
		Demande demandeResponse = demandeService.modifierDemande(demande);
		return demandeResponse;
	}
}