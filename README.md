# APP_BLACKJACK

## ExpressJS

#### Architecture des dossiers :

/config : Les fichiers de configuration (cors, socket...)

/public : Fichiers statiques

/routes : Le dossier du routeur Express

/src/controllers : Tous les contrôleurs du projet

/src/entity : Entités TypeORM

/src/migration : Migrations TypeORM

/src/services : Toute la logique des traitements WS

server.ts : Serveur web -> port 80

server.api.ts : Serveur API -> port 3333

## DATABASE MODULE

### Installation TypeORM

```
npm install -g typescript

npm install typeorm --save
npm install reflect-metadata --save
npm install @types/node --save-dev
npm install mysql2 --save
npm install @types/es6-shim
npm install typeorm-extension

npm install ts-node --save
npm install ts-node -g
```

### Init Database

+ Créer l'utilisateur 'blackjack_user' utilisé par la database

```
CREATE USER 'blackjack_user' IDENTIFIED BY 'blackjack_pass';
GRANT ALL PRIVILEGES ON blackjack . * TO 'blackjack_user'@'%';
FLUSH PRIVILEGES;
```

+ Créer la database 'blackjack'

```
typeorm-extension db:create OR ts-node ./node_modules/typeorm-extension/dist/cli/index.js db:create -d dist/data-source.js 
```

### Commandes TypeORM

+ Générer une migration
```
npm run typeorm:generate name 
```
+ Lancer les migrations
```
npm run typeorm:run
```

### How to use

### TypeORM
    
Il utilise TypeScript, ce qui offre une vérification statique du type de données et une compilation en temps réel.
Il offre une syntaxe simple et intuitive pour la définition des entités et des relations.
Il prend en charge les migrations de schéma et la synchronisation de base de données.
Il dispose d'une communauté active et d'une documentation complète.

### NPM commands

+ Lancer le serveur en mode dev
```
npm run dev 
```

+ Lancer le serveur rest en mode dev
```
npm run dev:rest
```
## Ressources

- [Type ORM](https://typeorm.io/)

## Authors

## License
=======
# APP_BLACKJACK

=======
## Règle d'écriture : 

  -> Il conviendra de coder en anglais (exception faite pour les commentaires)