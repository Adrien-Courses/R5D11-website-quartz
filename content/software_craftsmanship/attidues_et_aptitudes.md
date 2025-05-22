+++
title = "Aptitudes et Attitudes"
weight = 40
+++

> [!ressource] Ressources
> - Software Craft - 14.1 Attitudes et aptitudes

> L'attitude parle de la façon dont nous faisons les choses, tandis que l'aptitude (ou les aptitudes) indique les choses que nous sommes capables de faire

Il est utile, pour analyser l’essence du craft, de distinguer entre attitudes et aptitudes.

- Les **aptitudes** sont les capacités à produire un travail; par exemple, savoir écrire 
est une aptitude, en général apprise à l’école.

- les **attitudes** en revanche sont *la façon dont on se comporte* lorsqu’on utilise 
ses aptitudes. Avec la même aptitude de savoir écrire, vous pouvez écrire avec des 
attitudes différentes :
   - «écrire de façon concise», avec comme attitude de chercher l’efﬁcacité
   - «écrire de façon pompeuse», avec cette fois l’attitude de chercher à impressionner.

{{% notice style="warning" title=" " icon=" " %}}
En logiciel, les aptitudes représente la capacité à programmer, la familiarité avec des technologies, outils ou frameworks.

Par-dessus ces aptitudes, le craft est un ensemble d’attitudes adaptées aux enjeux des logiciels actuels.
{{% /notice %}}

## Les attitudes-clés du craft
- Commencer par le but à atteindre, ce qui se retrouve de façon évidente dans le développement dirigé par les tests, avec l’impératif d’écrire le test avant d’écrire le code, où le test est considéré comme le but à atteindre.

- Collaborer en continu dès le début, une idée au cœur du développement dirigé par le comportement (BDD) avec la pratique des ateliers de spécifications entre les 3 amigos.

- Collaborer au travers d’artefacts expressifs, une injonction au cœur du Clean Code avec l’importance accordée à rendre le code lisible, notamment par le nommage du code et des tests, entre autres principes.

- Limiter la taille des artefacts, à petite échelle avec la décomposition en méthodes courtes et les règles des objets callisthéniques, à l’échelle des classes, ou à grande échelle avec les modules ou microservices de taille limitée.

- Des façons de faire contextuelles, et donc différentes selon les contextes. Par exemple, une technique de test telle que le Record-Playback, réputée peu maintenable, est contre-indiquée pour une utilisation pérenne, mais se révèle pourtant nécessaire comme une étape temporaire de mise sous test initiale de code legacy.

- Avancer par petits pas, les baby steps propres au développement dirigé par les tests (TDD) ou à la planification agile en itérations (Scrum).

- Chercher le feedback rapide (prouver la valeur en priorité, ou identifier les problèmes), avec l’impératif de faire passer les tests (ou les garder passants) au plus vite avant tout refactoring en développement dirigé par les tests (TDD).

- Rechercher la simplicité, comme illustré à merveille par les quatre règles de design simple de Kent Beck et l’injonction Keep It Simple and Stupid! (KISS).
