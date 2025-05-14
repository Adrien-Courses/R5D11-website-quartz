+++
title = "Spotify Model"
weight = 30
+++

> [!ressource] Ressource
> - https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf
> - [Le modèle Spotify : présentation par Rachel Dubois, ex-Spotify et experte Agile@Scale !](https://www.youtube.com/watch?v=7tFC7zn715A)
> - Team Topologie page 63
> [Beyond the Spotify Model: using Team Topologies for fast Flow and Organisation Evolution](https://teamtopologies.com/videos-slides/2019/08/28/beyond-the-spotify-model-using-team-topologies-for-fast-flow-and-organisation-evolution)

> [!affirmation] Attention
> Dans l'article d'origine nous retrouvons l'avertissement suivant
> We didn’t invent this model. Spotify is (like any good agile company) evolving fast. This article is only a snapshot of our current way of working a journey in progress, not a journey completed. By the
> time you read this, things have already changed.

![Spotify Model](model.png)

- Les équipes technique de Spotify sont organisées en petites **Squad** autonomes et cross-fonctionnelle, chacune ayant une mission à long terme et comprenant environ cinq à neuf personnes. <br><br>
- Plusieurs équipes qui travaillent sur des domaines similaires sont rassemblées dans une **Tribe**. Les équipes d'une tribu connaissent le travail des autres équipes et se coordonnent au sein de la tribu.  <br><br>
- Les ingénieurs d'une tribu ayant des aptitudes et des compétences similaires partagent leurs pratiques par l'intermédiaire d'un **Chapter**. Ainsi, par exemple, tous les testeurs des *n* Squad d'une tribu pourraient faire partie d'un *Chapter* de testeurs.

## Quels objectifs avec ce model ?
### Casser les silos technique 
En organisant les équipes par domaine métier, nous permettons d'avoir une équipe autonome responsable d'un pôle métier 

### Limiter la communication
En employant le mot *limiter* au lieu de *faciliter*, je souhaite mettre en avant une section du livre Team Topologie nommée *Restrict Unnecessary Communication* qui nous dit

>  One key implication of Conway’s law is that not all communication and collaboration is good. Thus it is important to define “team interfaces” to set expectations around what kind of work requires strong collaboration and what doesn’t. Many organizations assume that more communication is always better, but this is not really the case.

Si on prend la construction de microservices deux équipes ne devraient pas avoir besoin de communiquer,si elle le font alors quelque chose ne va pas si les équipes communiquent. L'API n'est-elle pas correcte ? La plateforme n'est-elle pas adaptée ? Manque-t-il un composant ? 
=> S'il est possible de mettre en place une communication à faible bande passante - voire à bande passante nulle - entre les équipes tout en construisant et en publiant des logiciels de manière sûre, efficace et rapide, il faut le faire

Ainsi en organisant les équipes en *Squad* et *Tribu*, c'est-à-dire en facilitant la communication entre les équipes traitant d'un même domaine métier et en "gênant" la communication entre deux domaines métiers différents incitant à formaliser les interactions via des API bien définies et des contrats clairs plutôt que des échanges informels et fréquents.

Cette approche rejoint également le concept de "Cognitive Load" développé dans Team Topologies : en limitant les interactions nécessaires, on réduit la charge cognitive des équipes qui peuvent ainsi se concentrer sur leur domaine d'expertise.