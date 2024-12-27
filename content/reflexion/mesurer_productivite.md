+++
title = "Mesurer productivité ?"
weight = 8
+++

> [!ressource] Ressources
> - Modern Software Engineering - Chap 3
> - [Cannot Measure Productivity](https://martinfowler.com/bliki/CannotMeasureProductivity.html)
> - Accelerate: The Science of Lean Software & DevOps

Dans ce sujet de réflexion, nous souhaitons revenir sur la notion de [productivité]({{< relref "productivite" >}}) dans le développement logiciel.

## Modern Software Engineering
> Most metrics applied to software development are either irrelevant (velocity) or sometimes positively harmful (lines of code or test coverage).

Puis l'auteur fait référence à Martin Fowler et son article [Cannot Measure Productivity](https://martinfowler.com/bliki/CannotMeasureProductivity.html) où il soutient que la productivité en développement logiciel est difficile à quantifier en raison de l'impossibilité de mesurer efficacement la production.

> Productivity, of course, is something you determine by looking at the input of an activity and its output. So to measure software productivity you have to measure the output of software development - the reason we can't measure productivity is because we can't measure output.

## Quelles mesures ?
### Valeur commerciale
Martin Fowler nous propose d'utiliser une **métrique commerciale**
- un développeur produit un système de 100 points de fonction en un an, dont seulement 30 sont utiles au client, 
- tandis que l'autre développe un système de 50 points de fonction entièrement utiles.
  
Dans ce cas, le second développeur est plus productif en termes de valeur délivrée. 

Il conclut que, bien que séduisante, la mesure de la productivité logicielle est problématique et que les métriques traditionnelles peuvent conduire à des comportements contre-productifs. Ainsi, il est essentiel de **se concentrer sur la valeur commerciale** réelle délivrée plutôt que sur des indicateurs quantitatifs superficiels.

### Stabilité et Débit
Nicole Fosgren, Jez Humble et Gene Kim auteurs du [State of DevOps reports](https://dora.dev/) et du livre *Accelerate: The Science of Lean Software & DevOps* proposent de **mesurer** non pas la productivité mais **la stabilité et le débit du système**.

> Interestingly, they don’t attempt to measure productivity; rather, they
evaluate the effectiveness of software development teams based on two key
attributes. [...] The measures are stability and throughput. Teams with high stability and
high throughput are classified as “high performers,” while teams with low
scores against these measures are “low performers.”

#### Stabilité
> Measuring stability is important because it is really a measure of the quality
of work done. It doesn’t say anything about whether the team is building the
right things, but it does measure that their effectiveness in delivering
software with measurable quality.

La stabilité est suivie par les éléments suivants :

- **Taux d'échec des changements** :Taux auquel un changement introduit un défaut (bug)
- **Temps de correction** : temps nécessaire pour corriger une défaillance.

#### Débit
> Throughput is a measure of a team’s efficiency at delivering ideas, in the
form of working software.

Le débit est suivi par les éléments suivants :
- **Le délai d'exécution (Lead Time)** : Combien de temps faut-il pour qu'une modification d'une seule ligne passe de l'état "TODO" à celui de "Done" ?
- **Fréquence** : À quelle fréquence les changements sont-ils déployés en production ?

## Conclusion
La notion de productivité en développement logiciel dépasse de loin les métriques quantitatives traditionnelles comme le nombre de lignes de code ou la couverture de tests. Ces approches peuvent être non seulement insuffisantes mais aussi nuisibles, en induisant des comportements contre-productifs.

Au lieu de cela, il est plus pertinent de se concentrer sur des indicateurs axés sur la valeur commerciale délivrée et sur des mesures de stabilité et de débit. Ces dernières permettent d’évaluer non seulement l'efficacité des équipes à produire du logiciel, mais aussi la qualité et l'impact des livraisons.
- Est-ce que nous construisons les bonnes choses, c'est-à-dire celles qui apportent de la valeur ?
- Est-ce que ceci augmente la qualité du logiciel ? (stabilité)
- Est-ce que ceci augmente l'efficience de la création du logiciel ? (débit)

En mettant en oeuvre des [itérations courtes]({{< relref "cycles_de_vie" >}}), un [feedback rapide]({{< relref "review" >}}), une [culture d'amélioration continue]({{< relref "philosophie_agile/philosophie/philosophie" >}}), en valorisant [l'expertise technique]({{< relref "viser_excellence" >}}) et en appliquant les pratiques *DevOps* l'équipe augmentera la valeur de son produit sans négligé sa stabilité et son débit
