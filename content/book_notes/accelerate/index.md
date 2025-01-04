+++
title = "Accelerate"
weight = 20
+++

<img src="https://m.media-amazon.com/images/I/71XVAllesPL._UF1000,1000_QL80_.jpg" width="300">
<br>

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