+++
title = "Les échecs de la planification"
weight = 3
+++

> [!ressource] Ressources
> - Chapitre 2 - Why Planning Fails - Agile estimating and planning

Pourquoi la planification d’un projet traditionnel ne marche pas ? Mike Conh dénombre plusieurs raisons

## 1. Planifier par activité au lieu des features
> [!ressource]
> Voir également [Feature > Activities]({{< relref "agile/featured_over_activities" >}})

> Activity-based planning distracts our attention from features, which are the true unit of customer value.

La valeur est sur la fonctionnalité réalisée et pas sur la completion de telle ou telle activité. 

Lorsqu’on élabore une planification par activité (par exemple sous forme de diagramme de Gantt), on se retrouve rapidement confronté à des blocages : de nombreuses activités dépendent en effet de l’avancement d’autres activités.

Ce phénomène est encore plus marqué dans les [organisations en silos]({{< relref "philosophie_agile/comment/gestion_equipe_et_individus/equipe_independante/silo" >}}), où chaque équipe travaille de manière séparée. Dans ce cas, une équipe doit souvent attendre qu’une autre ait terminé son travail avant de pouvoir avancer. La planification devient alors fragile, car elle repose sur des facteurs extérieurs incertains (délais, priorités différentes, imprévus, etc.).

Une première étape est donc de rendre vos [équipes autonome/indépendante]({{< relref "philosophie_agile/comment/gestion_equipe_et_individus/equipe_independante/" >}}) pour réaliser une planification par fonctionnalité et réduire l'incertitude.

## 2. Multi-tâches
Clark et Wheelwright (1993) ont étudié les  effets du multitâche et ont constaté que le temps qu'un individu consacre à un travail à valeur ajoutée  diminue rapidement lorsqu'il travaille sur plus de deux  tâches.

![alt text](multitaches.png)

Pour limiter le multi-tâches vous pouvez mettre en place un [WIP max]({{< relref "framework_kanban/principes#limiter-le-travail-en-cours-wip" >}})

## 3. Feature ne sont pas développées par priorité
Il faut planifier par la valeur. 

## 4. Ignorer l'incertitude
Au début d'un nouveau projet nous avons beaucoup d'incertitudes (utilisateur change d'avis, technique, etc). Par conséquent, notre estimation doit prendre en compte ces incertitudes, puis au fil des itérations nos estimations seront de plus en plus précises.

> [!affirmation] Affirmation
> The best way of dealing with uncertainty is to iterate (short Iteration and Show your work)

## 5. Estimation == Engagement
> [!danger] Estimation != Engagement
> Les estimations ne sont que des estimations et non un engagement - voir [A-t-on besoin d'estimer ?]({{< relref "reflexion/estimer#une-estimation-compris-comme-engage" >}})

Une estimation est une probabilité. Un engagement ne peut pas se être basé sur une probabilité.
