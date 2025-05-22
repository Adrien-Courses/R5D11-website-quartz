+++
title = "Éliminer le gaspillage"
weight = 10
+++

Dans le livre Implementing Lean Software Development: From Concept to Cash, Mary et Tom Poppendieck décrivent **le gaspillage et les difficultés dans le processus de développement logiciel comme tout ce qui peut provoquer un retard pour le client, telles que les activités pouvant être supprimées sans affecter le résultat final.**


## Causes de gaspillage
Mary et Tom Poppendieck ont identifié les sept catégories suivantes de gaspillage et de difficultés dans le développement logiciel 

- **Travail partiellement terminé**: Cela inclut tout travail dans la chaîne de valeur qui n’a pas été complété (par exemple, des documents de spécifications ou des demandes de changement non encore examinés) ainsi que le travail en attente dans une file (comme l’attente d’une révision QA ou d’un ticket administrateur serveur). Ce travail devient obsolète et perd de la valeur avec le temps ([Definition of Done]({{< relref "framework_scrum/artefact_engagements/definition_of_done" >}})) 

- **Processus superflus (extra processes)** : Tout travail additionnel dans un processus qui n’apporte pas de valeur au client. Cela peut inclure une documentation inutile pour les étapes suivantes, ou des revues/approbations qui n’ajoutent rien au résultat. Ces processus ajoutent de l’effort et allongent les délais. De plus, en informatique on a tendance à passer trop de temps pour trouver la bonne approche. Il faut passer du temps mais la valeur n'existe que s'il y a la création du produit. Au début partez simple, pas besoin d'avoir un système scalable, chaque chose en son temps.

- **Fonctionnalités inutiles** : Des fonctionnalités intégrées au produit ou service qui ne sont pas nécessaires pour l’organisation ou le client (ex. : « dorure »). Elles augmentent la complexité et le coût en tests et en gestion.

- **Changement de tâche** : Lorsque les personnes sont affectées à plusieurs projets ou chaînes de valeur, elles doivent sans cesse changer de contexte et gérer les dépendances, ce qui ajoute du travail et du temps supplémentaire.

- **Temps d’attente** : Tout délai entre les tâches, lorsque les ressources doivent patienter pour poursuivre leur travail. Cela augmente le temps de cycle et retarde la livraison de valeur au client.

- **Mouvement** : L’effort nécessaire pour déplacer des informations ou du matériel entre différents centres de travail. Cela peut survenir quand les personnes qui doivent collaborer ne sont pas situées au même endroit. Les transmissions créent aussi ce type de gaspillage, car elles nécessitent souvent des communications supplémentaires pour lever les ambiguïtés.

- **Travail manuel** ou non standardisé : Dépendance à des tâches non automatisées ou irrégulières (comme l’usage de serveurs non reconstruits, d’environnements de test instables ou de configurations manuelles). Idéalement, tout travail manuel pouvant être automatisé ou accessible à la demande devrait l’être. Cependant, certains types de travail manuel resteront toujours nécessaires.

- **Actes héroïques** : Pour atteindre les objectifs, des individus ou des équipes sont souvent contraints de fournir des efforts excessifs (par exemple, intervenir à 2 h du matin pour résoudre un problème en production, ou créer des centaines de tickets à chaque déploiement). Ces pratiques deviennent parfois la norme quotidienne.

> [!affirmation] Affirmation
> Identifiez les sources de gaspillage dans l'organisation et essayer de trouver des solutions pour les réduire et/ou les éliminer.