+++
title = "Pas de documentation ?"
weight = 60
+++

{{% notice style="tip" title="A lire également" icon="book" %}}
- [La documentation dans les méthodes Agiles](https://blog.myagilepartner.fr/index.php/2017/10/26/documentation-methodes-agiles/)
{{% /notice %}}

## Documentation inutile ?

- Une des valeurs du manifeste agile est *Des logiciels opérationnels plus qu’une documentation exhaustive*
- Puis dans le livre User Story Mapping, Jeff Patton écrit *Shared documents aren't shared understanding*. Ce sont les *conversations* qui vont nous amenées à nous comprendre
- Et dans les références au TDD, on lit souvent que les tests sont les meilleures des documentations

Alors, on peut se demander si dans un contexte Agile la documentation est toujours nécessaire ?

### Retour sur la valeur Agile
L'affirmation « Working Software over Comprehensive Documentation » **était destiné à éviter** un problème spécifique. Dans le cas d'un projet en cascade, les phases de *Spécification*, d'*Analyse*» et de *Conception* aboutissent à **des documents de spécification, d'analyse et de conception**.   
Il arrivait souvent qu'un projet dépense beaucoup de temps, d'argent et de ressources pour n'aboutir qu'à des documents. Aucun code n'a été écrit. Vous vous retrouviez donc avec la moitié de votre temps et de votre budget perdus, avec seulement un tas de papier imprimé et aucun logiciel. 

De plus dans [l'histoire du manifeste agile](https://agilemanifesto.org/history.html) nous pouvons lire 
> The Agile movement is not anti-methodology, in fact, many of us want to restore credibility to the word methodology. We want to restore a balance. We embrace modeling, but not in order to file some diagram in a dusty corporate repository. We embrace documentation, but not hundreds of pages of never-maintained and rarely-used tomes. 

C'est ce que la phrase du manifeste essaie de nous dire d'éviter. Elle ne parle pas de produire une documentation décrivant le système tel qu'il est créé, ou les décisions prises dans le cadre de sa création. 

### Les User Stories
Les récits d'utilisateurs est souvent un outil efficace pour saisir ce que les utilisateurs finaux doivent pouvoir réaliser avec le système, en soi, un bon support pour les conversations entre l'équipe et les parties prenantes et au sein de l'équipe. Mais les US ne sont pas adaptés pour documenter l'état du système à long terme.


## Approches en matière de documentation
Nous avons donc besoin de documenter notre produit, mais comment?, il existe plusieurs approche pour créer une documentation et la tenir à jour ([source](https://pm.stackexchange.com/a/35084/55523))
### Executable documentation
Cela est particulièrement vrai dans les projets logiciels, où les tests doivent être conçus pour communiquer la fonctionnalité et l'intention. Les cadres de développement axé sur le comportement (BDD) tels que Cucumber utilisent Gherkin pour définir une documentation vivante dans une grammaire de haut niveau, adaptée aux besoins de l'entreprise.

### Documentation-oriented comments.
Encore une fois, il s'agit d'une approche plus orientée vers les logiciels, mais les commentaires sont importants. Une partie de votre Definition of Done devrait inclure l'ajout d'une documentation utile à votre base de code, au changelog et aux fichiers README, ou à d'autres artefacts.

### Documentation dans le DoD
La documentation doit faire partie de la Définition of Done pour chaque incrément. En faisant partie de la DoD, la documentation devient un ensemble de tâches pérennes pour chaque fonctionnalité ou changement au cours du développement, au lieu d'être un élément qui doit être suivi séparément ou conservé comme données historiques. On évite ainsi qu'elle devienne non-maintenue et donc obsolète.

> Vous pouvez avoir besoin d’avoir une documentation technique du socle technique de l’application, d’une documentation utilisateur et d’une documentation fonctionnelle. Ne vous en privez pas, ce serait une erreur.
