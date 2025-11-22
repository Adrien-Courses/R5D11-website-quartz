+++
title = "Modèle CSVLOD"
weight = 10
+++

> [!ressource] Ressources
> - [The CSVLOD Model of Enterprise Architecture and Its Value for the EA Discipline - Svyatoslav Kotusev](https://www.bcs.org/media/3787/csvlod.pdf)
> - [Six Types of Enterprise Architecture Artifacts - Svyatoslav Kotusev ](https://kotusev.com/Six%20Types%20of%20Enterprise%20Architecture%20Artifacts.pdf)
> - The Practice of Enterprise Architecture - Svyatoslav Kotusev


Le modèle CSVLOD est une approche fondée sur la recherche qui permet de comprendre l'architecture d'entreprise (EA) à travers les artefacts concrets que nous produisons réellement (principes, normes, feuilles de route, conceptions, etc.), plutôt qu'à travers des couches abstraites uniquement. Il a été proposé par Svyatoslav Kotusev après avoir étudié la manière dont l'EA est réellement mise en pratique dans les organisations.

Plutôt que de dire seulement « l’EA ce sont des couches + des états as-is/to-be », CSVLOD définit l’EA comme un système d’artefacts (Considerations, Standards, Visions, Landscapes, Outlines, Designs) inter-reliés, qui soutiennent les décisions autour du SI et de la transformation.

## Lier Business et IT
En distinguant artefacts centrés business (C, V, O) et artefacts centrés IT (S, L, D), le modèle rend explicite comment le métier et l’IT dialoguent :
- les Considerations et Visions expriment ce qui est important pour le business,
- les Standards et Landscapes structurent la réponse IT,
- les Outlines et Designs traduisent cette vision en projets concrets.

## Signification de CSVLOD
CSVLOD est un acronyme qui désigne six grands types d’artefacts d’Architecture d’Entreprise : 
- C – Considerations (considérations)
- S – Standards (standards)
- V – Visions
- L – Landscapes (paysages)
- O – Outlines (esquisses / avant-projets)
- D – Designs (conceptions détaillées)

Ces six types sont organisés selon deux axes :
- Focalisation métier vs IT
- Règles – Structures – Changements

|                   |    Règles     | Structures | Changements |
| :---------------: | :-----------: | :--------: | :---------: |
| **Centré métier** | Consideration |   Vision   |  Outlines   |
|   **Centré IT**   |   Standards   | Landscape  |   Design    |

![artefact](artefacts.png)

![artefact](artefacts2.png)

## Modéliser
Pour chaque artefact nous pouvons utiliser les outils suivants pour la modélisation

![modelisation](modelisation.png)