+++
title = "Pourquoi Waterfall échoue ?"
weight = 15
+++

> [!ressource] Ressources
> - [Scaling Software Agility - C2 Why the Waterfall Model Doesn’t Work](https://res.infoq.com/articles/scaling-software-agility/en/resources/ch02.pdf)

Dans la [section précédente]({{< relref "methodologie_waterfall/definition" >}}), nous avons vu que Waterfall a été mal interprété. Dans cette page nous expliquons pourquoi Waterfall semblait être une bonne solution et pourquoi son application (dû a sa mauvaise interprétation) amène à l'échec des projets informatiques

> [!note] Note
> Dans cette page lorsqu'on évoque Waterfall on parle de sa mauvaise interprétation, c'est-à-dire la figure 2 du [document de Royce](https://www.praxisframework.org/files/royce1970.pdf)

## Waterfall une solution logique
![waterfall](waterfall1.png)

L'approche Waterfall (figure 2) s'est vue popularisée car elle est très intuitive. En effet le modèle offrait une façon logique d'aborder la construction de systèmes complexes et permettait de consacrer du temps à la découverte du problème, à l'analyse et à la conception des exigences initiales.

## Alors pourquoi un échec ?
Dean Leffingwell dans son livre *Scaling Software Agility* propose quatre suppositions qui rendent Waterfall incorrect

1. Il n'existe qu'un ensemble fini de besoins (*requirement*)
2. Les changements seront petits
3. Nous pouvons raisonnablement prédire l'intégration d'un système sur la base de son architecture et de la planification
4. On peut délivrer dans les temps

### Il n'existe qu'un ensemble fini de besoins
- Même si nous passons une partie important a prévoir les besoins des utilisateurs il est très compliqué d'être exhaustif.
- Par ailleurs, plus l’écart entre le développement de la solution et sa mise en production se creuse, plus nous risquons d’entendre : “Oui, mais ce n’est pas tout à fait ce à quoi nous nous attendions.” »

### Les changements seront petits
En outre, plus le délai entre la définition des besoins et la livraison du système est long, plus le changement sera important. Et si le développement est lent et que les changements sont très fréquents la fidélité entre l'attendu et le réel sera grand

![alt text](fidelity.png)

### Délivrer dans les temps
- Nous avons planifié pour ce que nous savons et nous avons laissé suffisamment de place dans nos plans pour ce que nous ne savons pas.
- Nous avons prévu une marge de manœuvre dans le calendrier pour faire face à des événements imprévisibles
- Nous savons estimer le développement de logiciels en général, et notre prédiction dans ce cas est donc raisonnablement précise.

> In other words, we assumed that we could schedule innovation, and even soft ware research, in a predictable way. We have now proven that this is not the case.
> 
> In my own personal analyses and studies of software projects over the last decade or so, I’ve concluded that teams actually can estimate—just not very well—and that their estimates are typically off by approximately a factor of at least two. In other words, even with a known, fixed set of resources and even when facing a new application in a known domain, teams will typically take twice as long as they estimate to reach the desired result.
> 
> This is partly attributable to the complexity of the planning in waterfall projects being exponentially harder than it seems because different parts of the system (or parts of the team) transition between phases at different times.

![alt text](deadline.png)
![alt text](deadline2.png)

## Comment Agile répond à ses problèmes ?
Voir [Philosophie Agile - Réponse à des problèmes]({{< relref "philosophie_agile/pourquoi/problemes" >}})