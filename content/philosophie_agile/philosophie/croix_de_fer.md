+++
title = "Croix de Fer et Triangle de fer"
weight = 40
+++

## Triangle de Fer
> [!ressource] Ressource
> - Succeeding with Agile Software Development Using Scrum (Mike Cohn) p293

Le [Triangle de Fer](https://en.wikipedia.org/wiki/Project_management_triangle) a pour but de montrer les relations interdépendantes entre le périmètre, le coût (ressources) et le temps. L'idée est que la modification d'une contrainte aura une incidence sur les autres. Par exemple, si vous voulez être dans les temps il vous faudra soit augmenter les ressources, soit réduire le périmètre.

![alt text](tdf.png)

## Croix de Fer

Les projets logiciels sont régies par le dilemme de le *Croix de Fer*. Faire un produit : 
- Bon (bonne qualité)
- Rapide (dans les délais)
- Bon marché
- Complet (toutes les attentes sont satisfaites)

Mais vous ne pouvez choisir que trois de ces quatre caractéristiques. Vous pouvez faire en sorte que votre projet soit Complet, Bon marché et Rapide mais sa Qualité ne sera pas alors suffisante. Un bon responsable de projet doit donc jouer avec des coefficients sur ces quatre points.

![croix de fer](croixdefer.png)

## Pourquoi ajuster le périmètre et le meilleur choix ?
Dans une approche classique on fixe le périmètre (les choses à faire) et on adaptera les ressources ou le planning en fonction. Nous allons voir, pourquoi changer le périmètre est souvent la meilleur chose à faire

### Changer calendrier
La date de fin n'est généralement pas négociable, et si elle l'est, les retards coûtent généralement cher à l'entreprise.

Nous ne pouvons donc pas effectuer des ajustement sur ce point, si le calendrier ne peut être bouger alors essayons de le respecter en ajoutant des ressources.

### Ajouter des ressources
En général, l'entreprise n'est tout simplement pas disposée à modifier le calendrier. La date a été choisie pour de bonnes raisons commerciales, et ces raisons sont toujours valables. Pour tenir les délais elle décide d'augmenter la masse salariale. Tout le monde sait que l'on peut aller deux fois plus vite en doublant le personnel.

> En réalité, c'est exactement le contraire. La loi de Brooks stipule qu'*ajouter de la main d'œuvre à un projet en retard le rend plus tardif*.

![Loi de Brooke](loidebrooke.png)

1. L'équipe travaille avec un certain niveau de productivité
2. De nouvelles ressources arrivent, la productivité s'effondre car il faut former les nouveaux entrants
3. AU bout d'un moment on espère que les nouveaux embauchés montent suffisaient en compétence pour contribuer effectivement au projet

Ainsi comme renforcer l'équipe est souvent compliqué, la prochaine victime est la Qualité

### Rogner sur la qualité
Pour respecter les délais avec un nombre de ressource limité, nous pouvons rogner sur la Qualité du produit. 
Avec cette approche vous augmentez votre dette technique (voir [La qualité vaut-elle le coût ?]({{< relref "philosophie_agile/pourquoi/qualite_logicielle/index" >}})) et vous vous retrouvez quelques années après avec un logiciel difficilement maintenable et évolutif. 


> La seule façon d'aller vite, c'est d'avancer proprement

Il nous reste qu'un seul facteur d'ajustement, le périmètre

### Ajouter le périmètre
Le dernier levier est la quantité de fonction à livrer. Les parties prenantes peuvent souvent être convaincues de limiter leurs demandes aux fonctionnalités qui sont absolument nécessaires.

> From the business’s perspective, dropping scope is always a bad thing. But what alternatives are there? We’ve established that reducing quality to meet the deadline is not a good thing. We’ve also established that the effect of adding people is unpredictable. That leaves the business with extending the deadline or dropping scope. Because of the likely issues with changing the deadline, reducing scope is often the preferred option, again assuming that features have been worked on in priority order. [^1]

> [!note] Note
> Avec une approche Agile nous avons donc un Délais et des Coût fixe mais un périmètre variable

## Conclusion
C'est pour cette raison qu'on dit qu'Agile a inversé le Triangle de Fer, avec les approches classiques nous avions un périmètre fixe et les ressources/temps variables. Maintenant, nous avons les ressources et le délais fixe mais le périmètre variable.

![Triangle de fer](triangledefer.png)


[^1]: Succeeding with Agile Software Development Using Scrum p295