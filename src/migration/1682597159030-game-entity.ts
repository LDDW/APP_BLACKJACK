import { MigrationInterface, QueryRunner } from "typeorm";

export class GameEntity1682597159030 implements MigrationInterface {
    name = 'GameEntity1682597159030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`channel\` (\`id\` int NOT NULL AUTO_INCREMENT, \`capacity\` varchar(255) NOT NULL, \`message_path\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`game\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nb_players\` int NOT NULL, \`date_begin\` datetime NOT NULL, \`duration\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`avatar\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`game_player\` (\`gameId\` int NOT NULL, \`userId\` int NOT NULL, \`duration\` timestamp NOT NULL, PRIMARY KEY (\`gameId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`game_round\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nb_players\` int NOT NULL, \`date_begin\` datetime NOT NULL, \`duration\` timestamp NOT NULL, \`gameId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hand_dealer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`score\` int NOT NULL, \`gameRoundId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`player_stack\` (\`id\` int NOT NULL AUTO_INCREMENT, \`amount\` int NOT NULL, \`gameId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hand_player\` (\`id\` int NOT NULL AUTO_INCREMENT, \`score\` int NOT NULL, \`bet\` int NOT NULL, \`playerStackId\` int NULL, \`gameRoundId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hand_split\` (\`id\` int NOT NULL AUTO_INCREMENT, \`score\` int NOT NULL, \`bet\` int NOT NULL, \`handPlayerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_channel\` (\`userId\` int NOT NULL, \`channelId\` int NOT NULL, \`status\` varchar(255) NOT NULL, PRIMARY KEY (\`userId\`, \`channelId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`game_player\` ADD CONSTRAINT \`FK_b9cc37cd3e74a0b8ee29a4990c8\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`game_player\` ADD CONSTRAINT \`FK_cf29fd39de7fd565d58673e690f\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`game_round\` ADD CONSTRAINT \`FK_58b63ead7c02313a716929963cf\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` ADD CONSTRAINT \`FK_71d6061e4a231deb7c4a24a77f8\` FOREIGN KEY (\`gameRoundId\`) REFERENCES \`game_round\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` ADD CONSTRAINT \`FK_67bfb893f3412b3c7d5876ab6a7\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` ADD CONSTRAINT \`FK_a1ddc9572081ca35e90ac7f5a83\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` ADD CONSTRAINT \`FK_527929565f55014be9b74554356\` FOREIGN KEY (\`playerStackId\`) REFERENCES \`player_stack\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` ADD CONSTRAINT \`FK_b65dde0106e7520f345bbb5c69a\` FOREIGN KEY (\`gameRoundId\`) REFERENCES \`game_round\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_split\` ADD CONSTRAINT \`FK_759aa5d1c742e522b014139942a\` FOREIGN KEY (\`handPlayerId\`) REFERENCES \`hand_player\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_channel\` ADD CONSTRAINT \`FK_4e2726725e7890ce4bc31e0ed4f\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_channel\` ADD CONSTRAINT \`FK_0a7960363de8a8af7253a934e67\` FOREIGN KEY (\`channelId\`) REFERENCES \`channel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_channel\` DROP FOREIGN KEY \`FK_0a7960363de8a8af7253a934e67\``);
        await queryRunner.query(`ALTER TABLE \`user_channel\` DROP FOREIGN KEY \`FK_4e2726725e7890ce4bc31e0ed4f\``);
        await queryRunner.query(`ALTER TABLE \`hand_split\` DROP FOREIGN KEY \`FK_759aa5d1c742e522b014139942a\``);
        await queryRunner.query(`ALTER TABLE \`hand_player\` DROP FOREIGN KEY \`FK_b65dde0106e7520f345bbb5c69a\``);
        await queryRunner.query(`ALTER TABLE \`hand_player\` DROP FOREIGN KEY \`FK_527929565f55014be9b74554356\``);
        await queryRunner.query(`ALTER TABLE \`player_stack\` DROP FOREIGN KEY \`FK_a1ddc9572081ca35e90ac7f5a83\``);
        await queryRunner.query(`ALTER TABLE \`player_stack\` DROP FOREIGN KEY \`FK_67bfb893f3412b3c7d5876ab6a7\``);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` DROP FOREIGN KEY \`FK_71d6061e4a231deb7c4a24a77f8\``);
        await queryRunner.query(`ALTER TABLE \`game_round\` DROP FOREIGN KEY \`FK_58b63ead7c02313a716929963cf\``);
        await queryRunner.query(`ALTER TABLE \`game_player\` DROP FOREIGN KEY \`FK_cf29fd39de7fd565d58673e690f\``);
        await queryRunner.query(`ALTER TABLE \`game_player\` DROP FOREIGN KEY \`FK_b9cc37cd3e74a0b8ee29a4990c8\``);
        await queryRunner.query(`DROP TABLE \`user_channel\``);
        await queryRunner.query(`DROP TABLE \`hand_split\``);
        await queryRunner.query(`DROP TABLE \`hand_player\``);
        await queryRunner.query(`DROP TABLE \`player_stack\``);
        await queryRunner.query(`DROP TABLE \`hand_dealer\``);
        await queryRunner.query(`DROP TABLE \`game_round\``);
        await queryRunner.query(`DROP TABLE \`game_player\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`game\``);
        await queryRunner.query(`DROP TABLE \`channel\``);
    }

}
