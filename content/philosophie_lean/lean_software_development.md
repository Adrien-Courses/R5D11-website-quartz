
+++
title = "Lean Software Development"
weight = 20
+++

> [!ressource] Ressources
> - [8 Wastes of Lean (for Software Developers)](https://www.youtube.com/watch?v=hnR03T9Hujw&t=243s)

Le lean software development est l’application du lean au développement logiciel pour une
gestion au plus juste. Cette méthode est conceptualisée par Tom et Mary Poppendieck dans
leur ouvrage Lean software development : an agile toolkit publié en 2003.

> [!affirmation] Affirmation
>  Obtenir pour l’activité du développement logiciel des résultats équivalents à ceux obtenus
>  par les diverses applications du lean (production industrielle, services, ingénierie, santé).


## 7 principes
Les sept principes Lean sont les suivants :
- Éliminer le gaspillage
- Créer des connaissances
- Intégrer la qualité dès la conception
- Retarder l’engagement
- Livrer aussi vite que possible
- Respecter les autres
- Optimiser l’ensemble

## Une vision
Le développement Lean est basé sur ce concept : élaborer une solution simple, la présenter
aux clients et l’améliorer progressivement en fonction du feedback des clients. Cette approche
est importante, en particulier dans le domaine des logiciels, car la rapidité de mise sur le
marché représente un avantage concurrentiel incroyable. Ainsi lorsqu’on parle de *Livrer rapidement* on évoque la création d’un MVP et non le fait de travailler tard, le weekend, etc

## Causes de gaspillage
Lorsqu'on parle Lean, on parle gaspillage. En informatique les principales sources de gaspillage sont les suivantes :

![8 wastes](waste.png)

- Overproduction : construire ce que le client veut; ni plus ni moins. Ne construisez pas les fonctionnalités que le client ne veut pas **encore**. 

- Extraprocessing : le client s'en moque du framework, du langage, de l'architecture, etc ... En informatique on a tendance à passer trop de temps pour trouver la bonne approche. Il faut passer du temps mais la valeur n'existe que s'il y a la création du produit. Au début partez simple, pas besoin d'avoir un système scalable, chaque chose en son temps.

- Defects : prendre du temps pour bien comprendre le besoin du client.

- Inventory : en informatique l'inventaire va être notre tableau Kanban par exemple. Si on a trop d'item encours on va faire du multitâches et donc réduire l'efficacité de l'équipe. *Pull* au lieu de *Push* et comprendre les goulots d'étranglement.

- Transportation : les mouvements du code (Pipeline, CI/CD), essayer d'automatiser l'ensemble pour délivrer et récupérer du feedback rapidement.

- Motion : mouvement des personnes. Nous sommes souvent interrompu : réunion, switch de projet, être sur plusieurs projets, réorganisation des équipes, etc ... 

- Waiting : on peut vite se retrouver dépendant des autres (du code de d'autres développeurs, des user-stories, des clients,  de la DSI, ...). Il faut trouver des moyens de réduire au minimum les temps d'attente.

- Unused Talent : l'objectif est de *sentir* les compétences des personnes, car même si aujourd'hui elles ne sont peut-être pas nécessaire d'ici quelques mois elles pourraient intéresser l'entreprise. E.g. :
   - quelqu'un qui aime faire de UI/UX 
   - quelqu'un qui aime rédiger 


{{% notice style="grey" title=" " icon=" " %}}
Identifiez les sources de gaspillage dans l'organisation et essayer de trouver des solutions pour les réduire et/ou les éliminer.
{{% /notice %}}
