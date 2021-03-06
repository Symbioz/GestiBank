-- creation de tous les agents 
INSERT INTO `gestibank`.`utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `matriculeAgent`, `nbEnfants`, `situation`) VALUES ('AGENT', NULL, 'adr1', 'agent1@email', 'agent1', 'agent', 'Durant', '0600000001', 'Jaqueline', NULL, 'A001', NULL, '2', 'Marié');
INSERT INTO `gestibank`.`utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `matriculeAgent`, `nbEnfants`, `situation`) VALUES ('AGENT', NULL, 'adr2', 'agent2@email', 'agent2', 'agent', 'Smith', '0600000002', 'Max', NULL, 'A002', NULL, '0', 'Célibataire');

-- creation de tous les clients
INSERT INTO `gestibank`.`utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `matriculeAgent`, `nbEnfants`, `situation`) VALUES ('CLIENT', NULL, 'adrClient1', 'client1@email', 'client1', 'client', 'Dupont', '0600000101', 'Jean', NULL, NULL, 'A001', NULL, NULL);
INSERT INTO `gestibank`.`utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `matriculeAgent`, `nbEnfants`, `situation`) VALUES ('CLIENT', NULL, 'adrClient2', 'client2@email', 'client2', 'client', 'Martin', '0600000102', 'Marie', NULL, NULL, 'A001', NULL, NULL);
INSERT INTO `gestibank`.`utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `matriculeAgent`, `nbEnfants`, `situation`) VALUES ('CLIENT', NULL, 'adrClient3', 'client3@email', 'client3', 'client', 'Lorent', '0600000103', 'Catherine', NULL, NULL, 'A002', NULL, NULL);
INSERT INTO `gestibank`.`utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `matriculeAgent`, `nbEnfants`, `situation`) VALUES ('CLIENT', NULL, 'adrClient4', 'client4@email', 'client4', 'client', 'Hernandez', '0600000104', 'Antoine', NULL, NULL, 'A002', NULL, NULL);
INSERT INTO `gestibank`.`utilisateur` (`TYPE_ENTITE`, `id`, `adresse`, `email`, `identifiant`, `mdp`, `nom`, `numTel`, `prenom`, `dateDebutContrat`, `matricule`, `matriculeAgent`, `nbEnfants`, `situation`) VALUES ('CLIENT', NULL, 'adrClient4', 'client4@email', 'client4', 'client', 'Hernandez', '0600000104', 'Antoine', NULL, NULL, NULL, NULL, NULL);

-- creation des comptes
INSERT INTO `gestibank`.`compte` (`TYPE_COMPTE`, `IBAN`, `dateCreation`, `solde`, `agios`, `decouvertAutorise`, `interets`, `idClient`) VALUES ('COMPTE_COURANT', '12340001', '2018-02-22 00:00:00', '9814.31', 0, '250', NULL, '3');
INSERT INTO `gestibank`.`compte` (`TYPE_COMPTE`, `IBAN`, `dateCreation`, `solde`, `agios`, `decouvertAutorise`, `interets`, `idClient`) VALUES ('COMPTE_REMUNERE', '12340102', '2018-02-22 00:00:00', '2000', 0, '0', NULL, '3');
INSERT INTO `gestibank`.`compte` (`TYPE_COMPTE`, `IBAN`, `dateCreation`, `solde`, `agios`, `decouvertAutorise`, `interets`, `idClient`) VALUES ('COMPTE_COURANT', '12340003', '2018-02-22 00:00:00', '1984', 0, '100', NULL, '4');
INSERT INTO `gestibank`.`compte` (`TYPE_COMPTE`, `IBAN`, `dateCreation`, `solde`, `agios`, `decouvertAutorise`, `interets`, `idClient`) VALUES ('COMPTE_REMUNERE', '12340104', '2018-02-22 00:00:00', '10000', 0, '0', NULL, '4');

-- creation des operations
INSERT INTO `gestibank`.`operation` (`id`, `date`, `libelle`, `montant`, `type`, `iBAN`) VALUES (NULL, '2018-02-09 00:00:00', 'Facture téléphone', '10.00', 'debit', '12340001');
INSERT INTO `gestibank`.`operation` (`id`, `date`, `libelle`, `montant`, `type`, `iBAN`) VALUES (NULL, '2018-02-09 00:00:00', 'Facture téléphone', '10.00', 'debit', '12340001');
INSERT INTO `gestibank`.`operation` (`id`, `date`, `libelle`, `montant`, `type`, `iBAN`) VALUES (NULL, '2018-02-09 00:00:00', 'Facture téléphone', '10.00', 'debit', '12340001');

-- creation des demandes
INSERT INTO `gestibank`.`demande` (`TYPE_DEMANDE`, `idDemande`, `dateDemande`, `idClient`, `status`, `iban`) VALUES ('CHEQUIER', NULL, '2018-02-22 09:25:23', '3', b'0001', '12340001');
INSERT INTO `gestibank`.`demande` (`TYPE_DEMANDE`, `idDemande`, `dateDemande`, `idClient`, `status`, `iban`) VALUES ('CHEQUIER', NULL, '2018-02-22 09:25:23', '3', b'0001', '12340001');
INSERT INTO `gestibank`.`demande` (`TYPE_DEMANDE`, `idDemande`, `dateDemande`, `idClient`, `status`, `iban`) VALUES ('CHEQUIER', NULL, '2018-02-22 09:25:23', '3', b'0000', '12340001');
INSERT INTO `gestibank`.`demande` (`TYPE_DEMANDE`, `idDemande`, `dateDemande`, `idClient`, `status`, `iban`) VALUES ('CHEQUIER', NULL, '2018-02-22 09:25:23', '4', b'0001', '12340003');
INSERT INTO `gestibank`.`demande` (`TYPE_DEMANDE`, `idDemande`, `dateDemande`, `idClient`, `status`, `iban`) VALUES ('INSCRIPTION', NULL, '2018-02-22 09:25:23', '7', b'0001', NULL);
