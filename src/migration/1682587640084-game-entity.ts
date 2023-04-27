import { MigrationInterface, QueryRunner } from "typeorm";

export class GameEntity1682587640084 implements MigrationInterface {
    name = 'GameEntity1682587640084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`game\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nb_players\` int NOT NULL, \`date_begin\` datetime NOT NULL, \`duration\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`game\``);
    }

}
