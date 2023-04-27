import { MigrationInterface, QueryRunner } from "typeorm";

export class GameEntity1682590314346 implements MigrationInterface {
    name = 'GameEntity1682590314346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`game\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nb_players\` int NOT NULL, \`date_begin\` datetime NOT NULL, \`duration\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`game_round\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nb_players\` int NOT NULL, \`date_begin\` datetime NOT NULL, \`duration\` timestamp NOT NULL, \`gameId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`game_round\` ADD CONSTRAINT \`FK_58b63ead7c02313a716929963cf\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`game_round\` DROP FOREIGN KEY \`FK_58b63ead7c02313a716929963cf\``);
        await queryRunner.query(`DROP TABLE \`game_round\``);
        await queryRunner.query(`DROP TABLE \`game\``);
    }

}
