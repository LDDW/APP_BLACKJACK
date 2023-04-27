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

```
typeorm-extension db:create OR ts-node ./node_modules/typeorm-extension/dist/cli/index.js db:create


typeorm migration:create ./path-to-migrations-dir/PostRefactoring
typeorm migration:run
typeorm migration:generate -n <MigrationName>

npm install -g typescript
tsc
```

### How to use

### TypeORM

Il utilise TypeScript, ce qui offre une vérification statique du type de données et une compilation en temps réel.
Il offre une syntaxe simple et intuitive pour la définition des entités et des relations.
Il prend en charge les migrations de schéma et la synchronisation de base de données.
Il dispose d'une communauté active et d'une documentation complète.

## Ressources

- [Type ORM](https://typeorm.io/)

## Authors

## License