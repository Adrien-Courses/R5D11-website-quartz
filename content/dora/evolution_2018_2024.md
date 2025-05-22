+++
title = "Evolution 2018-2024"
weight = 20
+++

> [!ressource] Ressources
> - [Framework DORA 2024 : les évolutions depuis le livre Accelerate 2018](https://youtu.be/H8H1cGtzZ4s)

## Evolution du Core DORA


## Evolution des métriques

### Deployments Frequency
> 2018 et 2024 identiques

### Lead Time for Change (LTC)
> 2018 renommé en *Change Lead Time* (CLT) 2024

### Change Failure Rate (CFR)
> 2018 renommé en *Change Fail Percentage* (CLT) 2024

### Mean Time To Restore (MTTR)
> 2018 et devient Failed Deployment Recovery Time (FDRT) 2024

- FDRT se concentre sur la capacité à une équipe a gérer les échecs lors des déploiements et à voir en combien de temps nous revenons dans un état stable (uniquement rollback à une v-1)
- Le MTTR était plus global en incluant toute les causes d'incidents (bugs, problème infrastructure)

### Reliability
> Ajout en 2024

Définir des objectifs de service pour garantir 
- que le système reste performant
- l’alignement avec les attentes des utilisateurs

Les 4 première métriques permettent de mesurer l'efficacité du processus de livraison mais pas réellement la performance du service en question.