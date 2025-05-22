+++
title = "Pourquoi USP et pas heures ?"
weight = 10
+++

> [!ressource] Ressources
> - [Don’t Equate Story Points to Hours](https://www.mountaingoatsoftware.com/blog/dont-equate-story-points-to-hours)
> - [Estimating with Story Points](https://www.mountaingoatsoftware.com/agile/agile-estimation-estimating-with-story-points)
> - [Story Points: Why are they better than hours?](https://www.scruminc.com/story-points-why-are-they-better-than/)
> - [https://www.scrum.org/resources/blog/why-do-we-use-story-points-estimating](https://www.scrum.org/resources/blog/why-do-we-use-story-points-estimating)

## Pourquoi ne pas utiliser des heures ?

Il est légitime de se poser la question suivante, "pourquoi utiliser des *User Story Points* (USP) alors que nous avons les heures ?". Cette question en plus d'être légitime permettra de conclure que la valeur n'est pas dans l'estimation mais dans la discussion qu'il y a eu pour la construire.

- Développeur Senior estime à 5 heures
- Développeur Junior estime à 13 heures

est-il équivalent à ?

- Développeur Senior estime à 5 USP
- Développeur Junior estime à 13 USP

Non :
- Premièrement, les USP représentent une indication de la quantité de travail que **l'équipe dans son ensemble** peut accomplir. Les Stories doivent être **estimées en collaboration** par l'équipe et jamais par un seul développeur. Nous devons différencier :
  - l'effort que représente d'une US
  - et l'attribution de la tâche à une personne (décision de l'équipe pendant le sprint).
- Ensuite, en utilisant des heures vous ne faite pas émerger de discussions. Le Senior estime à 5h, très bien, moi Junior à 13h, point, on s'arrête ici.
- Tandis que si nous utilisons des USP notre objectif est de comprendre la différence entre les deux valeurs; s'il y a une différence cela signifie qu'il y a une incompréhension (e.g. technique, fonctionnelle) et qui doit être levée.

> [!affirmation] Affirmation
> L'activité d'estimation et les discussions qui en découlent sont plus importante que l'estimation (son nombre).


D'autres arguments viennent compléter les points précédents

### Estimer est difficile
Si je vous demande l'age de quelqu'un dans la rue vous aurez du mal à me donner son age précis. Néanmoins vous pouvez plus facilement le comparer avec l'age de quelqu'un d'autres.
Il est 2x plus vieux, ou 3x plus vieux sans donner d'age précis.

Les estimations en USP vont dans ce sans, l'humain n'est pas très fort pour estimer précisément la durée qu'il va mettre. Néanmoins, il est capable de **donner une taille relative à une US par rapport à une autre US** (comme pour l'âge). Ainsi lorsqu'on estime une US on l'estime par rapport à une autre US.

### La pression
Adopter les USP peut s'apparenter à mettre une couche d'abstraction afin d'éviter une pression et un engagement sur des heures.

Si en tant que développeur j'ai estimer une US pour qu'elle soit réalisée en 5 jours alors je vais avoir une pression indirect qui se traduit par un engagement à faire cette US dans les jours. Et ceci peut se faire au détriment de la qualité, ou d'une remise en question du fonctionnelle si on se rend compte que la fonctionnalité est plus complexe qu'initialement estimée.

### Estimer même si US incomplète

Dans son livre, Mike Cohn nous encourage à estimer même si l'US est encore incomplète. En effet, durant un Release Planning nous n'avons pas tout les détails de l'US ni savoir comment nous allons l'implémenter techniquement. Il est donc difficile de s'accorder sur une durée.

Cependant, il sera plus simple (pas forcément précise) de s'accorder ensemble sur un nombre d'USP en comparaison à une autre US à faire ou une US déjà réalisée.

## Conversion en temps ?
Néanmoins, nous devons bien à un moment répondre à la question "Quand cela sera-t-il fini ?". Cette question amène donc de la durée et du temps.
Pour passer de notre estimation en USP (e.g. 250 USP) en durée nous utilisons la vélocité. Si l'équipe à une vélocité moyenne de 25 alors nous pouvons envisager de livrer la fonctionnalité dans 10 itérations.

**La durée d'un projet n'est pas estimée mais dérivée du nombre total d'USP divisé par la vélocité de l'équipe.**

> The important metric is the number of story points the team can deliver per unit of calendar time. The points per sprint is the velocity. Therefore we estimate everything in points for the Product Owner so that he create a release roadmap based on team velocity and adjust the plan if velocity changes. 

PS : si vous prenez les 3h evoquées précédement vous allez retomber sur 10 :
- 250 USP * 3USP/h = 750h
- 750h / 80h (2x40h) = +-10

MAIS ceci n'est possible que théorique, car nous transformons des nombres. Aurions-nous était capable au début de prédire 750h (sans passer par les USP). Ceci aurait forcément était plus compliqué. En passant par les USP nous simplifions le process d'estimation en le rendant abstrait => on se concentrera plus sur la discussion autour que la valeur de l'estimation (i.e. comprendre pourquoi A dit 3 USP et B dit 8 USP)
