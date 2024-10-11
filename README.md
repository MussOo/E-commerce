# E-Commerce Website


## Technologie

- Back-end : Node.js (Express.js / Mongoose)
- Front-end : React.js (Vite.js)
- Base de donnée : MongoDB

## Description

Ce projet est une application web e-commerce complète développée avec **Node.js** et **Express.js** pour le back-end,**MongoDB** pour la base de données et React JS (vite js) pour le front. L'objectif de cette application est de fournir une plateforme de commerce en ligne où les utilisateurs peuvent parcourir des produits, les ajouter à un panier, finaliser leurs achats, et suivre l'état de leurs commandes. Ce projet a été conçu pour démontrer mes compétences en développement web full-stack, avec un accent sur la gestion des utilisateurs, la sécurité des transactions, et l'interactivité du site.

## Fonctionnalités

### Utilisateurs

- **Inscription et connexion** : Les utilisateurs peuvent créer un compte, se connecter et se déconnecter de manière sécurisée.
- **Historique des commandes** : Les utilisateurs peuvent consulter leurs commandes passées avec les détails des produits achetés.

### Catalogue de Produits

- **Affichage des produits** : Les utilisateurs peuvent voir une liste de produits disponibles avec images, descriptions et prix.
- **Recherche et filtres** : Les produits peuvent être recherchés par nom ou filtrés par catégories et prix.
- **Page produit** : Chaque produit dispose d'une page dédiée avec plus de détails, des images supplémentaires, et la possibilité de l'ajouter au panier.

### Panier d'Achat

- **Gestion du panier** : Les utilisateurs peuvent ajouter des produits au panier, modifier les quantités ou retirer des articles.
- **Gestion du Stock** : Vérification dynamique du stock disponible pour mettre en rupture ou non un produit
- **Mise à jour du total** : Le prix total du panier se met à jour dynamiquement en fonction des articles ajoutés.

### Commandes et Paiement

- **Finalisation de la commande** : Les utilisateurs peuvent passer commande avec leurs articles choisis et une adresse de livraison.
- **Intégration de paiement sécurisé** : Paiement via une API (comme Stripe ou PayPal) pour assurer la sécurité des transactions.
- **Suivi des commandes** : Les utilisateurs peuvent voir l'état de leurs commandes (en attente, expédiée, livrée).

### Administration

- **Gestion des produits** : Les administrateurs peuvent ajouter, modifier ou supprimer des produits via une interface d'administration dédiée.

## Technologies Utilisées

### Front-End

- **React.js** : Pour une interface utilisateur dynamique et réactive (à personnaliser selon ce que tu utilises).
- **Tailwind CSS** : Pour le design réactif et moderne de l'interface utilisateur.

### Back-End

- **Node.js** et **Express.js** : Pour la création de l'API RESTful qui gère la logique métier, l'authentification, les transactions, et les opérations sur la base de données.
- **MongoDB** : Base de données NoSQL pour stocker les utilisateurs, produits, commandes et paniers.
- **Mongoose** : ORM pour interagir avec MongoDB.

### Authentification et Sécurité

- **JWT (JSON Web Tokens)** : Pour gérer l'authentification et la protection des routes sécurisées.
- **BCrypt** : Pour le hashage des mots de passe utilisateurs.

## Installation et Configuration

### Pré-requis

- **Node.js** et **npm** installés sur votre machine.
- **MongoDB** (local ou MongoDB Atlas).
