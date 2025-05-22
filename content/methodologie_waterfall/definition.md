
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

Dans cette section nous allons revenir sur le fonctionnement de la méthode Waterfall au travers de l'affirmation suivante.

> [!affirmation] Affirmation
>  Waterfall est itératif

## Pourquoi cela est surprenant ?
Premièrement définissons ce que signifie *Itératif*

> Avec le développement itératif, nous réservons du temps pour améliorer ce que nous avons. ⇒ On refait. (voir [Cycle de vie - itératif]({{< relref "cycles_de_vie.md" >}}))

Cela devrait pour surprendre car traditionnellement on présente le modèle en cascade comme une méthodologie de travail avec un enchaînement de tâche successive, ce qui conduit à un effet tunnel; **Chaque phase ne commence qu'une fois les résultats de la phase précédente validés**.

Et on ne se rend compte uniquement lors de la livraison que le travail réalisé n'est pas forcément en adéquation avec les spécifications du client.

![Waterfall incomplet](waterfall1.png)

Juste avant cette figure 2 nous pouvons lire
> [!bug] Note importante
> Figure 3 portrays the iterative relationship between successive development phases for this scheme. The ordering of steps is based on the following concept: that as each step progresses and the design is further detailed, **there is an iteration with the preceding and succeeding steps** but rarely with the more remote steps in the sequence. The virtue of all of this is that as the design proceeds **the change process is scoped down to manageable limits**.


Et juste en dessous de cette figure 2, nous pouvons lire

> [!bug] Note importante
> I believe in this concept, **but the implementation described above is risky and invites failure**.


## Mais revenons au document de référence
> [!ressource] Ressource
> - [🚩 The Myth of the 'Waterfall' SDLC --> The Many Misconceptions of Waterfall](http://www.bawiki.com/wiki/Waterfall.html)

L'étude du modèle en Cascade s'arrête souvent à la conclusion du paragraphe précédent. Néanmoins si nous lisons le document d'origine nous nous rendons vite compte que le modèle en Cascade n'est pas celui souvent décrit.

Dans son article fondateur, W.W. Royce critique le modèle en cascade. Il remarque que chaque phase doit pouvoir nécessairement renvoyer à la phase précédente en cas de défauts constatés en aval. En effet, les exigences et besoins peuvent se montrer incomplets ou de qualité insuffisante (ambiguïté, incohérence, etc.). De plus, le client peut ne pas être pleinement conscient de ses exigences avant d'avoir vu le logiciel fonctionner.

![Waterfall itératif](waterfall2.png)

Mais n'impacter que la phase du dessus n'est pas forcément le plus efficace. Il illustre ces propos avec l'exemple suivant :  
> La phase de test qui a lieu à la fin du cycle de développement est le premier événement pour lequel par exemple la synchronisation, le stockage, les transferts d'entrée/sortie, etc. sont **expérimentés et *non analysés***.  Pourtant, si ces phénomènes ne parviennent pas à satisfaire les diverses contraintes externes, une refonte majeure est invariablement nécessaire. Un correctif uniquement du code (phase précédente) n'est pas suffisante, les changements de conception requis risquent d'être si perturbants que les exigences logicielles sur lesquelles la conception est basée et qui justifient tout seront violées.

Nous avons donc des impacts forts entre le test --> le code --> l'analyse. **Les itérations ne sont donc pas cantonnées uniquement à la phase précédente.**

![Waterfall itératif 2](waterfall3.png)

Mais cette boucle de feedback peut conduire à une refonte complète de l'ensemble du système et à un dépassement total des délais et du budget. Pour éviter une nouvelle conception, Royce introduit une étape supplémentaire, la *conception préliminaire du programme*, avant l'analyse. Le concepteur du programme travaille alors avec les analystes pour détecter toute conséquence des choix de conception du programme.

![Waterfall itératif 3](waterfall4.png)

Durant cette phase, on va se concentrer sur la création d'une petite partie du système. 
- Si nous souhaitons faire une refonte vers une architecture microservices nous allons essayé d'en faire un avant de tout basculer.
- Si nous souhaitons mettre en place des API REST, nous allons faire de même essayer sur une petite partie du système de réaliser les étapes

![Waterfall itératif 3bis](waterfall4bis.png)


## Conclusion

Finalement, on peut résumer l'ensemble de modèle en Cascade avec le schéma suivant
![Waterfall final schema](waterfall_final.png)

**Waterfall est itératif** :  
Et nous pouvons donc bien dire que **Waterfall est itératif** car nous revenons sur les phases précédentes pour améliorer notre logiciel (avant qu'il soit trop tard et trop coûteux).
