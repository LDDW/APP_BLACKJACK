import { MigrationInterface, QueryRunner } from "typeorm";

export class GameEntity1682590543915 implements MigrationInterface {
    name = 'GameEntity1682590543915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hand_dealer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`score\` int NOT NULL, \`gameRoundId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`game_round\` DROP FOREIGN KEY \`FK_58b63ead7c02313a716929963cf\``);
        await queryRunner.query(`ALTER TABLE \`game_round\` CHANGE \`gameId\` \`gameId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`game_round\` ADD CONSTRAINT \`FK_58b63ead7c02313a716929963cf\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` ADD CONSTRAINT \`FK_71d6061e4a231deb7c4a24a77f8\` FOREIGN KEY (\`gameRoundId\`) REFERENCES \`game_round\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` DROP FOREIGN KEY \`FK_71d6061e4a231deb7c4a24a77f8\``);
        await queryRunner.query(`ALTER TABLE \`game_round\` DROP FOREIGN KEY \`FK_58b63ead7c02313a716929963cf\``);
        await queryRunner.query(`ALTER TABLE \`game_round\` CHANGE \`gameId\` \`gameId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`game_round\` ADD CONSTRAINT \`FK_58b63ead7c02313a716929963cf\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`hand_dealer\``);
    }

}
