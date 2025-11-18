+++
title = "Pourquoi est-ce nécessaire ?"
weight = 20
+++

> [!affirmation] Affirmation
> On réalise vraiment l’importance de l’Architecture d’Entreprise quand on mesure les contraintes qu’impose son absence.

Dans une entreprise de taille moyenne ou grande, on trouve généralement :
- des dizaines d’applications (ERP, CRM, outils métier, SaaS, outils internes, etc.)
- des flux de données dans tous les sens
- des équipes métier qui veulent aller vite
- de la [réglementation]({{< relref "urbanisation/reglementation/index" >}}) (RGPD, ISO 27001, etc.)
- des contraintes budgétaires et de ressources

Sans Architecture d’Entreprise, chacun optimise son périmètre : chaque département lance “son” projet, choisit “sa” solution, crée “sa” base de données.
Petit à petit, on obtient un SI Frankenstein :
- doublons applicatifs et fonctionnels
- dépendances cachées et couplages forts
- coûts de maintenance qui explosent
- changements lents, risqués et coûteux

![sans_architecture](sans_architecture.png)

Puis à terme, au bout de quelques années on se rend compte que :
- la sécurité est bancale,
- la maintenance coûtera cher

**=> L’EA sert à éviter ça : c’est la discipline qui vise à relier la stratégie de l’entreprise à ses systèmes d’information et à ses projets, pour que l’IT soit un levier du business et non un frein.**

## Rôle de l’EA : ce que ça apporte concrètement
> [!ressource] Ressource
> - [En complément, dans la FAQ "Qu’apporte  l’Architecture d’Entreprise ?"](https://www.urba-ea.org/larchitecture-entreprise/)

Une pratique d’EA bien installée permet notamment de :

- **Mieux décider**
    - choisir quels projets lancer ou arrêter
    - décider quand remplacer / retirer une application
    - trancher sur les technologies à adopter, interdire ou standardiser

- **Réduire les coûts**
    - limiter les doublons d’applications et de fonctionnalités
    - réduire la prolifération de solutions “one shot” non réutilisables
    - mutualiser les solutions et les plateformes

- **Gérer la complexité**
    - disposer d’une vue globale sur les applications, les données, les flux et les technologies
    - évaluer les impacts d’un changement avant de le lancer
    - contrôler la dette technique au lieu de la subir

- **Réduire les risques**
  - améliorer la conformité (RGPD, ISO 27001, réglementations sectorielles, etc.)
  - gérer l’obsolescence technologique
  - renforcer la sécurité, la résilience et la continuité d’activité

- **Accélérer les transformations**
  - des principes et standards partagés → moins de débats stériles à chaque projet
  - des patterns et architectures de référence → livraison plus rapide et plus sûre
  - des roadmaps structurées → on ne subit pas la transformation, on la pilote

## ... mais on a rien implémenté encore
Dire *l’EA aligne le business et l’IT*, c’est joli ... mais ça ne dit pas ce que les architectes produisent réellement. C’est exactement ce que vient adresser [CSVLOD]({{< relref "urbanisation/csvlod/index" >}}) :
- c’est un modèle qui décrit les types d’artefacts d’EA (Considerations, Standards, Visions, Landscapes, Outlines, Designs) et à quoi ils servent dans la vie réelle. 