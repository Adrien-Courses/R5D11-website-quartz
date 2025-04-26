+++
title = "Dette technique"
weight = 20
+++

> [!Ressource] Ressource
> - Chapitre 8 - Essential Scrum
> - [Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)
> - [Types of Technical Debt](https://agilemichaeldougherty.wordpress.com/2015/07/24/types-of-technical-debt/)

## Origine du concept
C'est en 1992 que le concept apparaît avec Ward Cunningham

> Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite... The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organizations can be brought to a stand-still under the debt load of an unconsolidated implementation, object-oriented or otherwise.

### 3 types de dettes techniques
L'industrie a identifié 3 types de dettes techniques :
- **naive technical debt** : cette dette est créée quand les bonnes pratiques ne sont pas ou peu respectée
- **unavoidable technical debt** : c'est une dette technique qui était imprévisible et inévitable; par exemple un tier modifie son API et nous ne mettons pas à jour notre système, nous ne pouvions pas être au courant de la modification en amont
- **strategic technical debt** : quand volontairement nous créons de la dette pour achever un objectif à court terme le plus rapide possible

Tout le monde connaît la conséquence. En baissant ou en ignorant un certain [standard de qualité]({{< relref "philosophie_agile/pourquoi/qualite_logicielle/index" >}}) nous affectons directement le [coût de changement]({{< relref "philosophie_agile/pourquoi/cout_changement" >}})

![alt text](philosophie_agile/pourquoi/qualite_logicielle/images/cost_of_change_technical_debt.png)

## Quelles conséquences ?

- **Augmentation du *Lead Time*** : afin de rester compétitives les entreprises doivent réduire le Lead Time au maximum, mais avec une accumulation de la dette technique il devient impossible d'avoir un Lead Time constant
- **Augmentation du coût de développement et de support** : une fonctionnalité qui pourrait être finalisée avec un petit budget aujourd'hui coûte chère et son implémentation peut se voir annulée. Par conséquent, notre produit s'adapte moins dans l'environnement où il évolue
- **Non prédictible** : un des objectifs d'Agile est de réduire l'incertitude. Mais lorsque la dette est trop élevé les estimations (coût et délais) deviennent compliquées à chiffrer ou sont complètement fausse, nous faisant perdre la confiance des parties prenantes.
- **Frustration** : l'accumulation de ces petits problèmes rend le travail sur le produit pénible ([dette de motivation]({{< relref "agile/developpeur_executant/#dette-de-motivation" >}})). L'ensemble des acteurs de la chaîne deviennent frustrés.

## Comment manager la dette technique ?
> By analogy, continuously accruing technical debt is equivalent to continuously borrowing money against our house. At some point we just need to stop and say, “No more!” because the consequences become too severe (Essential Scrum p149)

![manage technical debt](philosophie_agile/pourquoi/qualite_logicielle/images/manage_technical_debt.png)

### La rendre visible
La dette technique doit être visible à la fois pour les personnes gérantes de la partie "business" et également ceux responsables de la partie "technique" (aka Dev).
- Dans de nombreuse entreprise le "business" n'a pas connaissance de cette dette technique ou n'en mesure pas les impacts. L'objectif est de la rendre visible (chiffre), par exemple en l'incluant dans le chiffrage. Un autre façon est de traquer la vélocité et si au fil si elle diminue alors cela peut signifier au augmentation de la dette technique (et du temps/coût de développement).
- Ensuite, pour la rendre visible au "technique" on peut par exemple positionner des User Stories dans le Product Backlog