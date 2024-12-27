+++
title = "Stories INVEST"
weight = 30
+++

Il arrive souvent que la story soit mal exprimée, ce qui mène à une mauvaise compréhension généralement suivie par une implémentation insatisfaisante. Les caractéristiques d’une story peuvent se
résumer avec l’acronyme INVEST

## Indépendante
{{% notice style="warning" title="Définition" icon="pen" %}}
L'indépendance signifie qu'une User Story peut être développée, testée et éventuellement livrée seule. Par conséquent, elle apporte de la valeur de manière indépendante.
{{% /notice %}}

### Dépendance
- *En tant qu'administrateur, je peux définir les règles de sécurité des mots de passe du consommateur afin que les utilisateurs soient tenus de créer et conserver des mots de passe sûrs.*
- *En tant que consommateur, je suis tenu de respecter les règles de sécurité des mots de passe définies par l'administrateur afin de maintenir un niveau de sécurité élevé pour mon compte.*

Dans les deux stories précédentes, nous avons une dépendance. Pour pouvoir réaliser la story consommatrice, nous devons d'abord implémenter les règles de sécurité définies par l'administrateur.

### Indépendance
- *En tant qu'administrateur, je peux définir le délai d'expiration du mot de passe de manière à ce que les utilisateurs soient obligés de changer leur mot de passe périodiquement.*
- *En tant qu'administrateur, je peux définir les caractéristiques de force du mot de passe afin que les utilisateurs soient obligés de créer des mots de passe difficiles à pirater.*

Désormais, chaque story est autonome et peut être développée, testée et déployée de manière indépendante. Chaque story apporte sa propre valeur et elles ne sont pas obligées d'être implémentées dans une même itération.

## Négociable
{{% notice style="warning" title="Définition" icon="pen" %}}
Une user story n'est pas un contrat, mais une discussion sur les exigences à développer, tester et déployer.
{{% /notice %}}

Avec l'agilité, on privilégie une approche où l'équipe va résoudre un problème. On va donc avoir une collaboration entre la partie business et l'équipe pour définir le *quoi* faire.

## Valuable
{{% notice style="warning" title="Définition" icon="pen" %}}
L'objectif de l'agilité est de délivrer un produit de haute qualité dans une contrainte de temps et de ressources.
{{% /notice %}}

Chaque User Story doit apporter de la valeur à l'utilisateur, au client ou aux parties prenantes. 

### Exemple
- *Refactorer le système de log des erreurs*  
 
Devient  

- *En tant que consommateur, je peux recevoir un message d'erreur clair et cohérent à n'importe quel endroit du produit, de sorte que je puisse savoir comment résoudre le problème.*

## Estimable
{{% notice style="warning" title="Définition" icon="pen" %}}
L'user story contient le nécessaire pour que l'équipe de développement puisse l'estimer.
{{% /notice %}}

Si l'équipe n'est pas capable de donner une estimation, cela signifie qu'elle est trop grosse et doit être redécoupée.

## Small
{{% notice style="warning" title="Définition" icon="pen" %}}
Une story doit être assez petite pour être développée en une itération.
{{% /notice %}}

- facilite l'estimation
- apporte de la valeur à la fin du sprint
- permet d'avoir un feedback spécifique
- si on s'est planté alors ça ne sera que sur une petite partie.

## Testable
{{% notice style="warning" title="Définition" icon="pen" %}}
Tester permet de vérifier le travail réalisé.
{{% /notice %}}

Si une story n'est pas testable, cela signifie :
- qu'elle est trop grosse ou trop complexe
- qu'elle dépend d'une autre story dans le backlog
