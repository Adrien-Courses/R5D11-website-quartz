+++
title = "Accelerate"
weight = 20
+++

<img src="https://m.media-amazon.com/images/I/71XVAllesPL._UF1000,1000_QL80_.jpg" width="300">
<br>

> [!ressource] Ressources complémentaires
> - [Accelerate par Scrum Life](https://youtu.be/c1LopX1rmYs)
> - [Section sur DORA Report]({{< relref "dora/index" >}})

Accelerate est un livre qui a fortement impacté ma pensé sur le monde du Génie Logiciel et de la gestion Agile des équipes. Il apporte des éléments de réflexions reposant sur des études scientifiques. Dans ce livre vous apprendrez :
- Que signifie la *performance* et comment la mesurer ?
- L'importance de la culture
- Les pratiques techniques qui peuvent augmenter la performance

Les résumés suivant identifie les points-clés du livre et les rattache à des informations vues précédemment

## Mesurer la performance
Nous l'avons souligné dans des sections précédentes, les principales erreurs lorsqu'on parle de performance sont :
- mesurer les [outputs au lieu des outcomes]({{< relref "output_vs_outcome" >}})
- se concentrer sur [l'individu au lieu de l'équipe]({{< relref "equipe_individu" >}})
  
### 4 mesures
Les auteurs proposent quatre métrique pour mesurer *Software Delivery Performance* (SDP) :
- Delivery Lead Time
- Deployment Frequency
- Mean Time to Restore
- Change Fail Percentage

Les deux premières mesures vont nous donner le **débit** du système et les deux suivantes la **stabilité** du système. Et l'augmentation du débit et de la stabilité conduit à une meilleur *SDP*.

### Les impacts de la SDP
On peut se demander si impacter SDP à de l'importance, et bien oui !
-  x2 des objectifs atteints
-  x2 de la satisfaction des clients
-  x2 de la qualité produite
  
=> Impacte la performance de l'organisation en plus d'enjeux non fonctionnelle

![alt text](fig24.png)

## Changer la culture
Avant de déployer une approche pour augmenter les performances, nous devons comprendre les [impacts de la culture d'entreprise]({{< relref "importance_culture" >}}) et comment celle-ci doit évoluer. Les travaux de Westrum nous apprennent qu'il existe plusieurs type d'organisation et nous devons viser la *Generative*

> Generative (performance-oriented) organizations focus on the mission. How do we accomplish our goal? Everything is subordinated to good performance, to doing what we are supposed to do.

Et nous décrit les caractéristique d'une telle organisation (colonne 3)

![alt text](fig31.png)

### Les impacts de la culture
> We hypothesized that culture would predict both software delivery performance and organizational performance. [...]. Both of these hypotheses proved to be true. (p36)

![alt text](fig32.png)

### Comment changer la culture ?
La question suivante est donc de savoir quels éléments peuvent impacter la culture organisationnelle.

> Thus we hypothesize that, following the theory developed by the Lean and Agile movements, implementing the practices of these movements can have an effect on culture. [...] Our research shows that [Lean management]({{< relref "philosophie_lean/index" >}}),
along with a set of other technical practices known collectively as continuous delivery (Humble and Farley 2010), do in fact impact culture (p39)

![alt text](fig33.png)

J'aimerai compléter en ajoutant que le changement de culture peut être amené par des [Innovators and Early Adopters]({{< relref "agile/developpeur_executant/innovators_early_adapoter" >}}) si on leur laisse la liberté de proposer des idées.

## Pratiques techniques
Tout comme le livre *Scrum: The Art of Doing Twice the Work in Half the Time* ou encore *Clean Agile*, les auteurs du livre nous re-informe de l'importance de [l'excellence technique]({{< relref "viser_excellence" >}}) et que celle-ci fait partie de la philosophie Agile

> Many Agile adoptions have treated technical practices as secondary compared to the management and team practices that some Agile frameworks emphasize. (Accelerate p41)

La pratique mise en avant dans l'ouvrage est la *Continuous Integration* et les auteurs affirment que celle-ci a un fort impact sur les *outcomes* suivants :
- Meilleure SDP
- Taux de d'échec du au changement bas (fail rates)
- Une culture orienté *Generative*
- Renforce l'identité

![alt text](fig42.png)

### CD influence culture
> If you want to improve your culture, implementing CD practices will help. By giving developers :
> - the tools to detect problems when they occur, 
> - the time and resources to invest in their development,
> - and the authority to fix problems straight away, we create an environment where developers accept responsibility for global outcomes such as quality and stability.
> 
>  This has a positive influence on the group interactions and activities of team members ’ organizational environment and culture.

### Qu'est-ce qui influence la CD

![alt text](fig41.png)


En plus des pratiques classique (versionnage, test automatique, monitoring) les éléments d'architectures se révèlent avoir un fort impact sur la CD :
- couplage faible (lié aux notions de modularité)

## Architecture
Les décisions architecturale auront un impact sur les performances de lu logiciel et de l'organisation. En effet de mauvais choix pourront devenir un frein au débit et à la stabilité du logiciel. 

Un principe clé est d'avoir une architecture dite *Faiblement couplée* (Loosely coupled) car chaque module est facilement testable et déployable; Ceci conduit à une augmentation du débit et de la stabilité du système.

### Changer l'architecture == changer l'organisation
> organizations which design systems . . . are constrained to produce designs which are copies of the communication structures of these organizations (Conway 1968)

Ainsi pour avoir une architecture modulaire (qui sera *Faiblement couplée*) notre organisation doit se restructurer :
- nécessite des équipes [pluridisciplinaires]({{< relref "framework_scrum/caracteristique" >}})
- définir les *[Bounded Context](https://martinfowler.com/bliki/BoundedContext.html)* et API de façon à découper uyn large domaine d'activité en plus petits domaines indépendants
  - => Une équipe ou un groupe de développeur par module (travail isolé et qui n'impacte pas les autres équipes)
- permettre de déployer indépendant chaque module

## Pratique managériales pour le logiciel
En plus des pratiques techniques, le management aura un impact sur la culture de l'organisation et par conséquence sur la SDP.

![alt text](fig33.png)

### Lean Software Development
Mary et Tom Poppendieck propose une approche novatrice avec le *Lean Software Development*. S'inspirant des principes du Lean Manufacturing, initialement popularisés par Toyota, ils ont su adapter ces concepts à l'univers complexe du développement de logiciels.

![alt text](fig71.png)

Nous avons dédié un chapitre au [Lean]({{< relref "philosophie_lean" >}}), ici nous revenons seulement sur les points clés :
- Limiter le [WIP]({{< relref "framework_kanban/principes" >}}) => éviter la surcharge et le multi-tâches
- [Management visuel]({{< relref "agile/management_visuel" >}})
- Obtenir des feedback après la mise en production
- Utiliser des données rationnelles pour les *business décisions*

> The use of WIP limits and visual displays is well known in the Lean community. They are used to ensure that teams don’t become overburdened. [...] It’s only when they’re combined with the use of visual displays and have a feedback loop from production monitoring tools back to delivery teams or the business that we see a strong effect. When teams use these tools together, we see a much stronger positive effect on software delivery performance.

En effet WIP + Management visuel rend les obstacles visibles; ce qui encourage à les éliminer.

### Lean Product Management

![alt text](fig81.png)

L'autonomie de l'équipe est très importante pour la performance :
- elle soit avoir la capacité de l'équipe à essayer de nouvelles idées sans avoir l'autorisation des personnes en dehors de l'équipe

En combinant Team Experiment + Small Batches + Work Visible :
- l'équipe aura la capacité de prendre des décisions rationnelles sur le design le développement et le déploiement
- que le changement sera basé sur le feedback
- et finalement que les décisions soient communiqué à l'ensemble de l'organisation

## Satisfaction des employés, identité et engagement
Je m'attendais à ce que ce chapitre soit le plus ennuyeux, avec un fort préjugé sur le discours souvent flou autour de la notion d'identité. Pourtant, le chapitre 10, consacré à ce sujet, s'est révélé être particulièrement instructif.

> With market pressures to deliver technology and solutions ever faster, **the importance of hiring, retaining, and engaging our workforce** is greater than ever.

Cette première affirmation me fait penser au sujet de [Comment manager la genZ]({{< relref "manager_genz" >}}) et notamment un sujet très sensible qu'est la fidélisation de la GenZ en entreprise. Je suis intimement convaincu que recruter une personne est beaucoup plus simple que la fidéliser afin qu'elle reste dans l'entreprise.

Les études rapportés dans le livre indique que :
- l'engagement et la satisfaction de l'employé
- est révélateur de la loyauté et de l'identité; ce qui peut conduire soit au burnout soit à une productivité forte 

### Les choses importantes
- Comment l'entreprise collecte la satisfaction et l'utilise
- La capacité de l'équipe à visualiser le flux de production 
- Avoir les bons outils et les bonnes ressource pour accomplir le travail
- Le fait que chaque employé s'identifie aux valeurs et objectifs de l'entreprise 

### Conséquences
> When leaders invest in their people and enable them to do their best work, employees identify more strongly with the organization and are willing to go the extra mile to help it be successful

Ainsi en combinant les pratiques managériale et les pratiques technique nous impacterons à la fois la performance mais également la culture organisationnelle

![alt text](fig101.png)

## Leader et Manager
Le livre identifie cinq caractéristiques que les bons leader doivent avoir :
- **Vision** : savoir où l'organisation souhaite aller
- **Communication** : communiquer de façon à inspirer et motiver
- **Stimulant** : être capable d'accompagner les personnes à penser différemment`
- **Supporteur** : capable de "prendre soin" de ses équipes
- **Reconnaissant** : complimenter le travail de qualité

Et se leadership va impacter les équipes techniques et l'adaptation du Lean

> In summary, we found that leadership helps build great teams, great technology and great organization

![leadership impact](fig111.png)

### Investir dans son équipe
- Budget dédié à la formation
- Conférences techniques
- Travailler sur la dette technique (*[yak day](https://phinze.com/writing/useful-tech-terms)*)
- Dédié du temps pour les expérimentations

### Tips pour améliorer la culture
- Construire de la confiance
  - entre les équipes et dans les équipes
  - *safe to fail* si l'échec est puni, alors les personnes nous voudrons plus entreprendre
  - Communication ouverte, devenir prévisible même dans les situation stressante
  - > Within an organization building and running software systems, it is therefore important to consciously limit the size of team groupings to Dunbar’s number to help achieve predictable behavior and interactions from those teams [...] Furthermore, behavioral studies suggest that humans work best with others when we can predict their behavior. (Team Topologie)<br>
<br>

- Encourager à changer de département
  - acquérir de nouvelle compétences et pouvoir transmettre celle accumulées => bénéfique pour les deux équipes <br>
<br>

- Espace pour explorer des idées
  - Les grosses entreprises dédie 15 à 20% de leur temps pour du *free-thinking* et les side-project
  - Encourager les gens à partager leur innovation