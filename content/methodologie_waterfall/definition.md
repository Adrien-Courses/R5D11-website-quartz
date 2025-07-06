
+++
title = "Waterfall est itératif"
weight = 10
+++

> [!ressource] Ressources
> - [Waterfall document d'origine par Royce - Managing the development of large software systems](https://www.praxisframework.org/files/royce1970.pdf)
> - [Explication du Waterfall en se basant sur Royce](http://beza1e1.tuxen.de/waterfall.html)
> - [Erik Moberg - The Waterfall Model Does Not Exist - YouTube](https://youtu.be/L4ElOdbiTqQ)
> - [https://www.youtube.com/watch?v=NP9AIUT9nos](https://www.youtube.com/watch?v=NP9AIUT9nos)
    - Moment marquant 11:53
> - [🚩 The Myth of the 'Waterfall' SDLC --> The Many Misconceptions of Waterfall](http://www.bawiki.com/wiki/Waterfall.html)
> - [Dr. Royce and Waterfall](https://leanagiletraining.com/better-agile/dr-royce-and-waterfall/)
>   - Explication des 5 étapes du document de Royce
> - [Scaling Software Agility - C2 Why the Waterfall Model Doesn't Work](https://res.infoq.com/articles/scaling-software-agility/en/resources/ch02.pdf)

> [!definition] Waterfall mal interprété
> Waterfall est mal interprété, dans cette page nous revenons sur Waterfall en analysant [le document d'origine](https://www.praxisframework.org/files/royce1970.pdf) et en nous aidant de l'article [The Myth of the 'Waterfall' SDLC --> The Many Misconceptions of Waterfall](http://www.bawiki.com/wiki/Waterfall.html)

Lorsqu'on évoque Waterfall on pense tout évidement au modèle ci-dessous avec un enchaînement de tâche successive conduisant à un effet tunnel. Mais si nous lisons attentivement le [papier d'origine](https://www.praxisframework.org/files/royce1970.pdf), nous nous rendons compte que ce modèle n'a jamais existé.

## Activités communes à tout effort de programmation
> There are two essential steps common to all computer program developments, regardless of size or
complexity. There is first an analysis step, followed second by a coding step as depicted in Figure 1.

![waterfall0](waterfall0.png)

Les étapes supplémentaires que Royce estime nécessaires pour un « grand » effort sont ensuite indiquées dans la figure 2 de son document. 

> A more grandiose approach to software development is illustrated in Figure 2. The analysis and coding steps are still in the picture, but they are preceded by two levels of requirements analysis, are separated by a program design step, and followed by a testing step. These additions are treated separately from analysis and coding because they are distinctly different in the way they are executed. They must be planned and staffed differently for best utilization of program resources.

![Waterfall incomplet](waterfall1.png)

Jusqu'à présent, cela ressemble encore aux caractéristiques communément attribuées à la Waterfall.  Mais cette idée ne tient absolument pas compte de la ligne qui suit la citation ci-dessus et de la figure qui l'accompagne.  Le paragraphe qui suit immédiatement la citation ci-dessus est le suivant :

> Figure 3 portrays the iterative relationship between successive development phases for this scheme. The ordering of steps is based on the following concept: that as each step progresses and the design is further detailed, there is an iteration with the preceding and succeeding steps but rarely with the more remote steps in the sequence.

![Waterfall itératif](waterfall2.png)

Puis sur la même page, Royce croît à ce modèle mais emmet néanmoins des critiques

> **I believe in this concept (figure 3), but the implementation described above is risky and invites failure.** The problem is illustrated in Figure 4

La boucle de feedback de la figure 3 ne permet pas d'anticiper les problème :
- La phase de test n'arrivant qu'à la fin du cycle de vie, si des *system requirement* (latence, performance ...) ne sont pas satisfaits une refonte complète du système pourrait être necessaire
  > The testing phase which occurs at the end of the development cycle is the first event for which timing, storage, input/output transfers, etc., are experienced as distinguished from analyzed. These phenomena are not precisely analyzable. They are not the solutions to the standard partial differential equations of mathematical physics for instance. Yet if these phenomena fail to satisfy the various external constraints, then invariably a major redesign is required.

Nous avons donc des impacts forts entre le test --> le code --> l'analyse. **Les itérations ne sont donc pas cantonnées uniquement à la phase précédente.**

![Waterfall itératif 2](waterfall3.png)

A la fin de la page 2, Royce affirme donc que le processus de base qu'il a décrit jusqu'à présent [c'est-à-dire ce qui est illustré à la figure 3, et NON ce qui est illustré à la figure 2] est fondamentalement sain. Mais qu'il peut être amélioré par les étapes supplémentaires qu'il recommande.

> However, I believe the illustrated approach to be fundamentally sound. The remainder of this discussion presents five additional features that must be added to this basic approach to eliminate most of the development risks.

## Les 5 étapes

La suite du papier décrit ces 5 étapes
- Program Design Comes First
- Document the Design
- Do It Twice
- Plan, Control and Monitor Testing
- Involve the Customer

## Proposition finale 

Toutes les recommandations ci-dessus sont reprises dans le diagramme final de l'article de Royce [Figure 10], qui montre un processus beaucoup plus complexe que celui que l'on attribue généralement à la « cascade ». 

![Waterfall final schema](waterfall_final.png)

> [!affirmation] Conclusion
> Waterfall est bien itératif