+++
title = "Conway's Law"
weight = 40
+++

> [!ressource] Ressource
> - [Conway's Law](https://martinfowler.com/bliki/ConwaysLaw.html)
> - [Conway’s Law in Team Topologies: Did you really get it?](https://medium.com/@fwynyk/conways-law-in-team-topolgies-did-you-really-get-it-69c1a4d702af)
> - [Youtube -  The Only Unbreakable Law  (Brooks, Conway)](https://youtu.be/5IUj1EZwpJY)

> [!definition] Conway's Law
> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure. 

Autrement dit, la structure des équipes est bien plus dictée par la forme du système de communication en place dans l'entreprise que parce qui serait nécessaire ou optimal. En pratique, cela signifie que la répartition des équipes est souvent hérité d'un historique organisationnel.

Souvent expliqué avec le cas suivant, si une seule équipe écrit un compilateur, il s'agira d'un compilateur à une passe, mais que si l'équipe est divisée en deux, il s'agira d'un compilateur à deux passes. **La communication des équipes impactera l'architecture du système.**

![Conway Law](philosophie_agile/comment/gestion_equipe_et_individus/images/conwaylaw.png)

### Problème de coordination
> When technologists break down problem into smaller chunks to delegate, we introduce coordinations problems. In many organization, format communication structure or rigid hierarchy appear to solve this coordination problem[^1]

Et peut donc se demander pourquoi de nombreuses entreprise découpe en silo technique (*frontend*, *backend* et *database*)

> Teams typically optimize for efficiency for their immediate tasks rather than the more abstract, strategic goals of the business, particularly when under schedule pressure. Instead of delivering an end-to-end feature value, teams often
focus on delivering components that may or may not work well with each other. [^1]

Néanmoins à long terme lorsqu'on voudra livrer une feature qui nécessite de toucher aux trois parties nous devrons coordonner les planning, ce qui augmentera le temps d'implémentation de la feature (e.i le Lead Time)

## Inverse Conway's Law
> Change the communication patterns of the designers to encourage the desired software architecture.

L'architecture de notre logiciel émergera de notre organisation (Conway's Law), ainsi si nous souhaitons faire émerger une architecture nous devons d'abord changer la structure de notre organisation

=> **En structurant les équipes pour qu'elle ressemblent à votre architecture cible, elle sera plus simple à atteindre**

[^1]: Building Evolutionary Architecture p11-12