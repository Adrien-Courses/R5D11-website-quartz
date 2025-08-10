+++
title="The Circle of Life"
weight=20
+++

> [!ressource] Ressources
> - Clean Agile - Chapitre 1 - section "Le cercle de vie"
> - [https://www.gemserk.com/sum/xp/guidances/concepts/xp_practices_36E149F4.html](https://www.gemserk.com/sum/xp/guidances/concepts/xp_practices_36E149F4.html)
> - [The 4 Circles of Extreme Programming](https://jdmeier.com/4-circles-of-extreme-programming/)

 Ce diagramme présente les pratiques fondamentales de l'Extreme Programming d'une manière qui les rend faciles à mémoriser

![Cercle de vie](circleoflife.png)

Le cercle de vie est subdivisé en trois anneaux. 

## Anneau extérieur
> The outer green circle is called the "Circle of Life". It's what keeps an XP project going, producing tested working software. The Whole Team, customer members and development members, work together - preferably physically together - to build the project. Using the Planning Game elements of Release Planning and Iteration Planning, they plan a series of Small Releases of software that demonstrably pass all the Customer Tests. [^1]

L'anneau extérieur représente les pratiques de XP orientées vers l'entreprise. Ces pratiques fournissent un cadre pour la manière dont l'équipe de développement logiciel communique avec l'entreprise et les principes de pilotage du projet

- **Le composant majeur de cet anneau est le jeu de la planification active.** Il consiste à décider comment subdiviser un projet en fonctionnalités, en récits et en tâches. Il détermine aussi comment il faudra les estimer, les arranger selon les priorités, puis les planifier.

- **Le principe des petites livraisons fréquentes** pousse l'équipe à travailler par blocs de taille raisonnable.

- **Les tests d'acceptation** déterminent les critères pour considérer quelque chose comme achevé au niveau des fonctions, des histoires et des tâches. Ils montrent à l'équipe comment établir des critères d'achèvement sans équivoque.

- **La notion d'équipe large** rappelle qu'une équipe de développement de logiciel réunit des talents très différents (programmeurs, testeurs, chefs d'équipe), œuvrant tous vers un objectif commun.

## Anneau intermédiaire
>  The middle blue circle contains the important supporting practices of XP. The software is designed according to a common, shared, evolving Metaphor that helps it all hang together. It is kept continuously integrated with many system builds every day. The team shares ownership of of all the code so that needed changes can be made by any qualified pair. [^1]

L'anneau intermédiaire du cercle correspond aux pratiques de l'équipe dans son ensemble. À ce niveau, il s'agit de définir les conditions dans lesquelles l'équipe communique en interne et assure sa propre gestion :
- **Un rythme soutenable** rappelle que l'équipe de développement doit veiller à progresser à un rythme qui lui évite d'épuiser ses ressources, au risque de ne pas pouvoir franchir la ligne d'arrivée.

- **L'appropriation collective** implique que l'équipe doit rester vigilante pour ne pas laisser le projet se transformer en une batterie de silos cloisonnés.

- **L'intégration continue** permet à l'équipe de rester concentrée, pour ne jamais cesser de collecter les données d'avancement, afin de savoir à tout moment où elle en est.

- **La métaphore** vise à faire prendre conscience de l'importance d'une terminologie rigoureuse adoptée par l'équipe dans ses communications avec ses donneurs d'ordre.

## Anneau interne
> The innermost red circle describes the day to day, moment to moment, work of the XP developers. Each feature is addressed with Simple Design. The programmers work in pairs for all production code development, providing continuous code review and valuable. They build the software using Test-Driven Development,and the design is kept clean by the continuous improvement process of Refactoring. [^1]

Enfin, l'anneau interne du Cercle de vie s'intéresse aux pratiques techniques qui doivent guider les programmeurs et les pousser à toujours chercher le plus haut niveau de qualité technique :
- **Le travail en binôme** invite les équipiers à partager leurs connaissances, à vérifier mutuellement leur travail, et à collaborer à un niveau qui encourage l'innovation et l'exactitude.

- **La conception lisible ou claire** est la pratique qui permet à l'équipe de se garder de tout effort inutile.

- **Le réusinage (refactoring)** invite à l'amélioration et au perfectionnement continus de tous les produits.

- **Le développement dirigé par les tests** concerne la barrière de sécurité qui permet à l'équipe technique de progresser rapidement tout en maintenant une qualité optimale.

> The big difference between Scrum and XP is that Scrum does not contain practices specifically for programming, whereas XP has lots of them (TDD, continuous integration, pair programming). 

## Lien avec Manifeste Agile
Toutes ces pratiques s'articulent très bien avec les objectifs du manifeste Agile, et ce sur de nombreux points.

**Les individus et leurs interactions plus que les processus et les outils**
- Équipe large, Appropriation collective, Rythme soutenable, Métaphore, Travail en binôme.

**Des logiciels opérationnels plus qu'une documentation exhaustive**
- Tests d'acceptation, Développement dirigé par les tests, Réusinage, Conception claire, Intégration continue.

**La collaboration avec les clients plus que la négociation contractuelle**
- Planification active, Petites livraisons fréquentes, Tests d'acceptation, Métaphore.

**L'adaptation au changement plus que le suivi d'un plan**
- Planification active, Petites livraisons fréquentes, Rythme soutenable, Développement dirigé par les tests, Réusinage, Tests d'acceptation.

[^1]: https://www.gemserk.com/sum/xp/guidances/concepts/xp_practices_36E149F4.html