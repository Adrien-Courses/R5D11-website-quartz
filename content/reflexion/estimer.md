+++
title="A-t-on besoin d'estimer ?"
weight=10
+++

> [!ressource] Ressources
> - [Estimation liste d'articles - Ron Jeffries](https://ronjeffries.com/articles/estimation-articles/)

L'estimation est une activé principale et prenante dans la gestion de projet classique. Mais quand est-il lorsqu'on parle d'agilité et qu'on utilise un framework comme Scrum ?

## Pourquoi estime-t-on ?
Avant d’entamer la discussion si oui ou non nous devrions continuer d'estimer, regardons, en premier *pourquoi?* nous estimions. Nous pouvons résumer la réponse avec l'affirmation suivante 

> Maximiser le bénéfice pour un coût minimum

Derrière les bénéfices se cachent les partie prenantes, notre principale raison d'estimer est la satisfaction des parties prenantes qui ont une vision plus claire de l'avancement du projet et des dates potentielles d'achèvement, ce qui favorise la confiance et la transparence.


## Pourquoi devrait-on estimer ?
### Partage de la compréhension
https://www.leadingagile.com/2011/09/the-real-reason-we-estimate/
> Estimating is about creating a shared understanding of the requirements, and a shared understanding of the solution. [...] It’s my opinion that creating shared understanding is the main reason we estimate.

En discutant autour d'une US pour l'estimer nous allons identifier des points bloquants, des solutions, etc ... Ainsi la phase d'estimation permet une Conversation (3C) de l'US.
L'objectif est donc de réduire les découvertes durant le Sprint en cours en anticipant le travail.

**L'effort fourni durant l'estimation est utile**

### Déterminer la quantité d'une itération
> Too often, their Product Owner, or a member of management, expresses disappointment with the amount they pick, and encourages them, urges them, or demands that they take on more work.

En détenant la vélocité de l'équipe nous pouvons déterminer la quantité de travail qui pourra être accomplit durant l'itération. 


## Pourquoi ne pas estimer ?
### Vision Agile
https://www.scrumexpert.com/knowledge/why-estimating-is-not-part-of-scrum/
>  In a contrary, the Agile world is focusing on dealing with complexity and fast changes. We start realizing our plans are failing and that we are often learning too late that something else should have been done instead. In such unpredictable world, all we can do is to change our way of working and be more reactive to the changes and more responsive to the feedback

Agile a été conçu pour évoluer dans un monde incertain, et pour rappel, le Manifeste Agile nous dit **La réponse au changement, de préférence au respect d’un plan.**. Ainsi, il devient inutile de passer du temps à estimer quelque chose qui ne sera peut-être plus d'actualité au moment où nous souhaitions le réaliser. 

> Estimating the whole product is not really useful either, as the Product Backlog will change based on the feedback anyway
Tout comme une planification à long terme, une estimation en long terme est donc inutile.

#### Oublier la valeur
> Traditionally teams were estimating what needs to be done and they were using those estimates on answering what can be done in a week, two or three

Agile se concentre sur apporter de la valeur au client. Et si on n'y fait pas attention les estimations vont nous conduire à réaliser des US qui respecte uniquement un Coût/Délais mais sans se poser la question si ces US sont celles qui apportent de la valeur au client.
*On va mettre cette US dans le Sprint car elle rentre et non car elle apporte de la valeur*. Par exemple si la vélocité est de 30, je vais prioriser pour prendre des US qui vont me donner 30 sans regarder le valeur réelle.

### Estimer c'est compliqué et long
> We aren’t good at estimating and most of us never will be

### Une estimation est imprécise
https://ronjeffries.com/articles/021-01ff/estimation-is-evil/

> Then we demand that the developers “estimate” when they’ll be done with all this stuff. They, too, know less about this product than they ever will again, and they don’t understand most of these requirements very well

Premièrement, avant d'estimer la complexité de nombreuses tâches, il est nécessaire de réaliser une analyse technique et d'élaborer un design technique. Il faut également avoir une idée générale de la manière dont elles seront mises en œuvre. On ne peut pas simplement attribuer des chiffres au hasard sans une analyse approfondie.

Ensuite, 

### Une estimation compris comme engage
Souvent une estimation est considérée comme un engagement, ainsi la partie commerciale vs s'engage auprès du client en annonçant que la feature sera fini dans 1 mois (en suivant nos estimations), mais que se passera-t-il si nous n'y arrivons pas à temps ? 

> [!danger] Estimation != Engagement
> **Les estimations ne sont que des estimations et non un engagement** [Quand estimation rime avec engagement - Scrum Life 66](https://youtu.be/tPndNtnOrxY)

### Privé l'équipe d'autonomie 
> La plupart du temps, cette estimation sert à permettre à un tiers d’organiser le travail. C’est donc le moyen numéro un pour priver l’équipe d’autonomie

Le développement permet donc d’apprendre des choses au fur et à mesure, et cela remet en permanence en question, non seulement les estimations, mais aussi potentiellement la solution à implémenter.

Également, en estimant on va créer indirectement une planification qui sert de Roadmap, l'objectif va donc de coller la Roadmap et par conséquent s'interdire des opportunités (e.g. cette fonctionnalité serait incroyable mais comme pas dans la Roadmap ...). La Roadmap nous bloque à livrer les features qu'on a promise.

### Conclusion
Les estimations implique une manière de travailler qui peut se révéler toxique :
- on ne se concentre pas sur les choses qui apportent le plus de valeur
- on pense que les estimations sont des engagements
- on bride l'équipe à faire uniquement se qui a été prévu dans la Roadmap


## Le mouvement NoEstimate

Le principal avantage des estimations c'est la discussion qu'il y a autour :
- comprendre le besoin en profondeur
- découper si trop l'US est trop grosse

En NoEstimate on va garder cette dynamique mais on ne va pas y associer des US Points.

![estimate_slow_down.png](estimate_slow_down.png)

## Mais il faut bien s'engager ?
[Comment s'engager tout en restant Agile ? - Scrum Life 43](https://youtu.be/VfCCsavI2D8)

Il est tout à fait normal d'avoir des contraintes dur à notre projet (e.g. un budget, une date car un évènement présent à cette date). *Agile Estimating and Planning* fait le tour de cette question.

Scrum nous apporte également un élément de réponse, l'équipe s'engage *à produire un Incrément qui respecte le Sprint Goal et la qualité définie par la Definition of Done*. Ainsi en ayant une vision d'un objectif orienté sur la valeur, l'équipe aura choisi les US les plus propices pour atteindre le Sprint Goal. L'équipe ne s'est donc pas engagé sur un nombre d'US à finir ou d'une vélocité à maintenir mais sur la valeur à produire.

> [!affirmation] Affirmation
> L'une des principales raisons de l'estimation réside dans les conversations qui découlent pour déterminer la taille des US.  
> Pourquoi quelqu'un pense que cet objet est grand ou petit.
