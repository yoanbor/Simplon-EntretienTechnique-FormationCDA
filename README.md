# Briefs-kekes-voyages
Conception de la modélisation UML d'un système simplifié de réservation de vols pour l'agence de voyage Kékés Voyages.


## Contexte du projet
Kékés Voyages souhaite proposer la possibilité de réserver en ligne des billets d'avion à leurs clients.

Notre mission est de concevoir à l'aide du standard UML la modélisation de la plateforme.

La plateforme devra permettre que :

* Un vol est ouvert à la réservation et refermé sur ordre de la compagnie.
* Un vol peut être annulé par la compagnie
* Un client peut réserver un ou plusieurs vols, pour des passagers différents.
* Une réservation concerne un seul vol et un seul passager.
* Une réservation peut être annulée ou confirmée.
* Un vol a un aéroport de départ et un aéroport d’arrivée.
* Un vol a un jour et une heure de départ, et un jour et une heure d’arrivée.
* Un vol peut comporter des escales dans des aéroports.
* Une escale a une heure d’arrivée et une heure de départ.
* Chaque aéroport dessert une ou plusieurs villes.
* Des compagnies aériennes proposent différents vols.

En tant que Concepteur Développeur D'Applications,

1. **Analyse des besoins du client :**
- Rencontre avec le client pour comprendre ses exigences spécifiques en matière de gestion d'information.
- Identification des acteurs du système, des flux d'information et des fonctionnalités requises.
2. **Recensement des règles de gestion :**
- Énumération des règles de gestion qui régissent le système, comme la validation des données, les autorisations d'accès, etc.
3. **Création du diagramme de cas d'utilisation :**
- Identification des cas d'utilisation principaux du système, tels que "Créer un utilisateur", "Gérer les données clients", etc.
- Définition des relations entre les acteurs et les cas d'utilisation.
4. **Élaboration du diagramme de classes :**
- Identification des classes principales du système, telles que "Utilisateur", "Donnée", "Processus", etc.
- Définition des attributs et des méthodes pour chaque classe.
- Modélisation des associations entre les classes.
5. **Définition des règles de gestion dans le diagramme de classes :**
- Intégration des règles de gestion dans le diagramme de classes, par exemple, les contraintes d'intégrité des données.
6. **Création du diagramme de séquence :**
- Modélisation des interactions entre les différents objets du système lors de scénarios spécifiques tels que la création d'un utilisateur ou la mise à jour des données.
7. **Raffinement du modèle avec les règles de gestion :**
- Intégration des règles de gestion spécifiques dans le diagramme de séquence pour garantir la cohérence du système.
8. **Validation du modèle avec le client :**
- Présentation du modèle UML au client pour validation.
- Réajustement du modèle en fonction des retours du client.
9. **Documentation du modèle :**
- Rédaction d'une documentation détaillée décrivant chaque élément du modèle UML, y compris les règles de gestion intégrées.


## Projet

## 1. **Analyse des besoins du client :**

### Acteurs :

- Client
- Compagnie aérienne
- Utilisateur (Passager)

### Flux d'information :

- Informations sur les vols (disponibilité, horaires, escales)
- Informations sur les réservations (état, passagers)
- Informations sur les compagnies aériennes

### Fonctionnalités requises :

- Ouverture et fermeture des réservations de vol
- Annulation de vol par la compagnie
- Réservation de vols par les clients
- Annulation ou confirmation des réservations
- Gestion des détails des vols (aéroport de départ et d'arrivée, horaires, escales)
- Gestion des passagers et de leurs informations
- Gestion des compagnies aériennes

## **2. Recensement des règles de gestion :**

- Kékés Voyages peut intégrer une compagnie sur sa plateforme
- Un utilisateur peut créer un compte
- Un utilisateur doit avoir créer un compte pour :
    - Un utilisateur peut se connecter et se déconnecter
    - Kékés Voyages peut supprimer un utilisateur de sa plateforme
    - Un utilisateur doit être connecter pour :
        - Un utilisateur peut gérer son compte (modifier et/ou supprimer ses données et/ou supprimer son compte)
        - Un utilisateur peut réserver un vol
        - Un utilisateur doit avoir réserver un vol pour :
            - Un utilisateur peut annuler son vol
            - Un utilisateur peut confirmer son vol
- La compagnie aérienne peut proposer différents vols à la réservation
- La compagnie aérienne doit avoir proposer différents vols à la réservation pour :
    - La compagnie aérienne peut ouvrir un vol à la réservation
    - La compagnie aérienne doit avoir ouvert un vol à la réservation pour :
        - La compagnie aérienne peut refermer un vol à la réservation
        - La compagnie aérienne peut annuler un vol à la réservation
