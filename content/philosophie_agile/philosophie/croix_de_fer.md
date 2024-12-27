+++
title = "Dilemme de la Croix de Fer"
weight = 40
+++

Les projets logiciels sont régies par le dilemme de le *Croix de Fer*. Faire un produit : 
- Bon (bonne qualité)
- Rapide (dans les délais)
- Bon marché
- Complet (toutes les attentes sont satisfaites)

Mais vous ne pouvez choisir que trois de ces quatre caractéristiques. Vous pouvez faire en sorte que votre projet soit Complet, Bon marché et Rapide mais sa Qualité ne sera pas alors suffisante. Un bon responsable de projet doit donc jouer avec des coefficients sur ces quatre points.

![croix de fer](croixdefer.png)

## Quels ajustements faire ?
### La calendrier
La date de fin n'est généralement pas négociable, et si elle l'est, les retards coûtent généralement cher à l'entreprise.

Nous ne pouvons donc pas effectuer des ajustement sur ce point, si le calendrier ne peut être bouger alors essayons de le respecter en ajoutant des ressources.

### Le personnel
En général, l'entreprise n'est tout simplement pas disposée à modifier le calendrier. La date a été choisie pour de bonnes raisons commerciales, et ces raisons sont toujours valables. Pour tenir les délais elle décide d'augmenter la masse salariale. Tout le monde sait que l'on peut aller deux fois plus vite en doublant le personnel.

> En réalité, c'est exactement le contraire. La loi de Brooks stipule qu'*ajouter de la main d'œuvre à un projet en retard le rend plus tardif*.

![Loi de Brooke](loidebrooke.png)

1. L'équipe travaille avec un certain niveau de productivité
2. De nouvelles ressources arrivent, la productivité s'effondre car il faut former les nouveaux entrants
3. AU bout d'un moment on espère que les nouveaux embauchés montent suffisaient en compétence pour contribuer effectivement au projet

Ainsi comme renforcer l'équipe est souvent compliqué, la prochaine victime est la Qualité

### La qualité
Pour respecter les délais avec un nombre de ressource limité, nous pouvons rogner sur la Qualité du produit. 
Avec cette approche vous augmentez votre dette technique et vous vous retrouvez quelques années après avec un logiciel difficilement maintenable et évolutif.


> La seule façon d'aller vite, c'est d'avancer proprement

Il nous reste qu'un seul facteur d'ajustement, le périmètre

### Le périmètre
Le dernier levier est la quantité de fonction à livrer. Les parties prenantes peuvent souvent être convaincues de limiter leurs demandes aux fonctionnalités qui sont absolument nécessaires.

{{% notice style="note" title=" " icon=" " %}}
Avec une approche Agile nous avons donc un Délais et des Coût fixe mais un périmètre variable (triangle de fer)
{{% /notice %}}
