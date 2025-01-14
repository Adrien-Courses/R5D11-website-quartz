+++
title = "Coût du changement"
weight = 30
+++

> [!ressource] Ressources
> - Modern Software Engineering - Chapitre 4
> - exTreme Programming embrace the change - First edition - Chapitre 5
> - L'eXtreme Programming avec deux études de cas - pages 6 et 7
> - [The Real Cost of Change](https://lizkeogh.com/2012/01/30/the-real-cost-of-change/)
> - [Examining the Agile Cost of Change Curve](https://agilemodeling.com/essays/costofchange.htm#Figure2)

## Approche classique
![Cout du changement](cout_changement_trad.png)

Dans une approche classique, plus nous avançons dans le projet plus le coût d'un changement est élevé. 
- **Dans un tel contexte, il est tout a fait justifiable de chercher à définir complètement le logiciel avant d'entamer sa construction. Partant de cela, une approche comme [Waterfall]({{< relref "methodologie_waterfall/index" >}}) ou le Cycle en V finissent par s'imposer**

- Mais, la difficulté réside dans le fait qu'au début de la vie d'un projet, nous en savons le moins possible.
- => Nous prenons donc des décisions cruciales sur la base d'informations mal connues.

## Approche Agile
Or, les auteurs de [XP]({{< relref "framework_xp/index" >}}) on découvert qu'en appliquant certains principes de conception et de programmation, il devenait possible de garder l'application suffisamment souple pour que les changement restent aisés tout au long du projet.

![Cout du changement](cout_changement_agile.png)

Que faudrait-il donc faire pour obtenir une courbe de coût du changement plate ?
- Nous ne pouvons pas nous permettre de consacrer beaucoup de temps à l'analyse et à la conception sans créer quoi que ce soit, car cela signifie que nous perdons du temps à ne pas apprendre ce qui fonctionne vraiment.
- Les décisions ne doivent plus être prises sur la base d'analyses et de supposition abstraites, mais à partir d'informations concrètes, disponibles au moment même où elles doivent être appliqués

=> Il nous faut donc comprimer les choses. Nous devons travailler de manière itérative ! Nous devons faire juste suffisamment d'analyse, de conception, de code et de tests pour que nos idées soient dans les mains de nos clients et utilisateurs afin que nous puissions obtenir du feedback

![Cout du changement](cout_changement.png)

> Iteration is an important idea and a foundation of our ability to move toward a
more controlled approach to learning, discovery, and so better software and
software products. However, as ever, there is no free lunch. If we want to work
iteratively, we must change the way that we work in many ways to facilitate it.
> 
> **Working iteratively has an impact on the design of the systems that we build, how
we organize our work, and how we structure the organizations** in which we work.
The idea of iteration is woven deeply into the thinking behind this book and the
model for software engineering that I present here. All the ideas are deeply
interlinked, and sometimes, it may be tricky to figure out where iteration ends and
feedback begins.

### Pourquoi ceci fonctionnerait ?
Fondamentalement, comme le montre la figure ci-dessous, la raison pour laquelle la courbe du coût du changement agile s'est aplatie est que nous suivons des techniques qui réduisent le cycle de feedback d'information. Les techniques agiles, représentées en vert, ont des cycles de retour d'information courts et se situent donc à l'extrémité plate de la courbe. Les techniques traditionnelles, représentées en rouge, ont des cycles de rétroaction plus longs et se situent donc à l'extrémité la plus coûteuse de la courbe.

![Cout du changement](cost_of_change_why_working.png)

## Réalité 
Néanmoins, la courbe ne peut pas rester indignement plate, l'article [Examining the Agile Cost of Change Curve](https://agilemodeling.com/essays/costofchange.htm#Figure2) identifie plusieurs facteurs :
- Croissance du code et des tests : les bases de code métier et de test s'étendent, augmentant le risque que chaque changement touche davantage d'éléments à mesure que le projet avance.
- Rigidité des artefacts non codés : Outre le code, les documents tels que manuels utilisateur, guides opérationnels et modèles architecturaux doivent être mis à jour.
- Coûts accrus de déploiement : Si la mise en production est coûteuse (par exemple, distribution sur CD au lieu de serveurs partagés), des procédures plus conservatrices, comme des revues supplémentaires, augmentent les coûts.
- Agile imparfait : malgré qu'une équipe soit Agile, au fur est à mesure de sa croissance elle standardise ses process créant des environnements plus rigides

![Cout du changement réalité](cost_of_change_reality.png)

### Coût de la maintenance
On notera également l'affirmation du suivante du livre *Designing Data-Intensive Applications*

> It is well known that the majority of **the cost of software is not in its initial development, but in its ongoing maintenance**; fixing bugs, keeping its systems operational, investigating failures, adapting it to new platforms, modifying it for new use cases, repaying technical debt, and adding new features. (p 18)