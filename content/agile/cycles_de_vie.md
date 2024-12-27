+++
title = "Cycles de vie"
weight = 10
+++

> [!ressource] Ressources
>
> - [Iterative and Incremental Development: A Brief History - 1930's --> Today](https://www.craiglarman.com/wiki/downloads/misc/history-of-iterative-larman-and-basili-ieee-computer.pdf)
> - [What is Iterative model- advantages, disadvantages and when to use it?](http://tryqa.com/what-is-iterative-model-advantages-disadvantages-and-when-to-use-it/)
> - [What is Incremental model- advantages, disadvantages and when to use it?](http://tryqa.com/what-is-incremental-model-advantages-disadvantages-and-when-to-use-it/)


## Cycle de vie prédictif

{{% notice style="warning" title="Définition" icon="pen" %}}
Cette approche consiste à tirer parti des éléments qui sont connus et prouvés. La réduction
de l’incertitude et de la complexité permet aux équipes de segmenter le travail en une séquence de
groupements prévisibles.


![Cycle de vie predictif](cyclevie_predictif.png)

L’équipe prend le temps de planifier le projet avant le démarrage concret du projet. Les **exigences sont fixes, et le produit sera livré en une seule fois**.

Si un projet prédictif connait des changements ou des désaccords au niveau des exigences, ou si la
solution technologique est plus compliquée que prévu, des **coûts non anticipés seront encourus**.

## Cycle de vie itératif

{{% notice style="warning" title="Définition" icon="pen" %}}
Permets un retour d’information visant à améliorer et à modifier le travail inachevé ou
partiellement achevé.


![Cycle de vie itératif](cyclevieiteratif.png)


Les cycles de vie itératifs améliorent le produit ou le résultat grâce à une succession de prototypes ou de démonstrations de faisabilité. À chaque nouveau prototype, les parties prenantes fournissent du
**feedback** et de nouvelles idées à l’équipe.

Ce cycle permet de mieux gérer les projets complexes, qui sont en constante évolution ou soumis à des perspectives divergentes des parties prenantes sur le produit final.

{{% notice style="grey" title=" " icon=" " %}}
Avec le développement itératif, nous réservons du temps pour améliorer ce que nous
avons. ⇒ On refait.


![Cycle de vie itératif](exemple_iteratif.png)


## Cycle de vie incrémental

{{% notice style="warning" title="Définition" icon="pen" %}}
Des livrables finis et utilisables sont fournis au client régulièrement


![Cycle de vie incremental](cycleincremental.png)

Le développement incrémental vous donne la possibilité d’**améliorer votre processus** de développement, ainsi que d’**ajuster les exigences** à l’évolution de l’environnement. Les équipes planifient
d’abord les premières livraisons puis commencent à travailler sur la première dès que possible.

⇒ Création fréquemment de la valeur. Lorsque les exigences semblent changer régulièrement, il est intéressant de se rapprocher de ce cycle en proposant au client des livraisons régulières afin qu’il valide le travail réalisé.

{{% notice style="grey" title=" " icon=" " %}}
Dans le développement incrémental, nous découpons les tâches en petits morceaux
et les planifions pour être développées au fil du temps et intégrées dès qu’elles sont terminées. On
ajoute.


![Cycle de vie Incrémental](exemple_incremental.png)

## Fusionner cycle itératif et incrémental

Les développements incrémental et itératif s’associent bien. On peut facilement intégrer ce type de
cycle dans un calendrier. Chaque marque *Examiner*, *Intégrer* ou *Livrer* est un jalon dans le planning.
Le chef de projet peut donc facilement prévoir l’avancer du projet.

![Cycle de vie itératif et incremental](cycleincremental1.png)

La figure ci-dessus montre trois phases de développement incrémental, chaque incrément se compose
de différente phase d’examen (itératif) et est intégré une fois terminé. Le tout est ensuite prêt à être
déployé.

A titre d'exemple Scrum combine l'approche Itérative et Incrémentale avec la notion de Sprint :
> - à l'issue du Spring, il y a un *Incrément* qui est réalisé
> - le feedback sollicité sur cet *Incrément* permet d'ajuster la cible dans le prochain Sprint

**Note :**  
Aujourd’hui, par abus de langage lorsqu’on parle de *développement itératif* on évoque à la fois l’aspect itératif et incrémental, sans ne faire aucune différence. C’est malheureusement regrettable pour
l’industrie logicielle puisque chacun a un objectif différent et doit être géré différemment :
> - Le développement incrémental vous donne la possibilité d’améliorer votre processus de développement, ainsi que d’ajuster les exigences à l’évolution de l’environnement.
> - Le développement itératif vous aide à améliorer la qualité de votre produit.

{{< embed-pdf url="/pdf/session1/cycle_de_vie-diapo.pdf" hidePaginator="true" >}}
