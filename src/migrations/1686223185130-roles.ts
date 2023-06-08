import { MigrationInterface, QueryRunner } from "typeorm";

export class Roles1686223185130 implements MigrationInterface {
    name = 'Roles1686223185130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`game_round\` DROP FOREIGN KEY \`FK_58b63ead7c02313a716929963cf\``);
        await queryRunner.query(`ALTER TABLE \`game_round\` CHANGE \`gameId\` \`gameId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` DROP FOREIGN KEY \`FK_71d6061e4a231deb7c4a24a77f8\``);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` CHANGE \`gameRoundId\` \`gameRoundId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` DROP FOREIGN KEY \`FK_67bfb893f3412b3c7d5876ab6a7\``);
        await queryRunner.query(`ALTER TABLE \`player_stack\` DROP FOREIGN KEY \`FK_a1ddc9572081ca35e90ac7f5a83\``);
        await queryRunner.query(`ALTER TABLE \`player_stack\` CHANGE \`gameId\` \`gameId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` DROP FOREIGN KEY \`FK_527929565f55014be9b74554356\``);
        await queryRunner.query(`ALTER TABLE \`hand_player\` DROP FOREIGN KEY \`FK_b65dde0106e7520f345bbb5c69a\``);
        await queryRunner.query(`ALTER TABLE \`hand_player\` CHANGE \`playerStackId\` \`playerStackId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` CHANGE \`gameRoundId\` \`gameRoundId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`hand_split\` DROP FOREIGN KEY \`FK_759aa5d1c742e522b014139942a\``);
        await queryRunner.query(`ALTER TABLE \`hand_split\` CHANGE \`handPlayerId\` \`handPlayerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`game_round\` ADD CONSTRAINT \`FK_58b63ead7c02313a716929963cf\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` ADD CONSTRAINT \`FK_71d6061e4a231deb7c4a24a77f8\` FOREIGN KEY (\`gameRoundId\`) REFERENCES \`game_round\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` ADD CONSTRAINT \`FK_67bfb893f3412b3c7d5876ab6a7\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` ADD CONSTRAINT \`FK_a1ddc9572081ca35e90ac7f5a83\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` ADD CONSTRAINT \`FK_527929565f55014be9b74554356\` FOREIGN KEY (\`playerStackId\`) REFERENCES \`player_stack\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` ADD CONSTRAINT \`FK_b65dde0106e7520f345bbb5c69a\` FOREIGN KEY (\`gameRoundId\`) REFERENCES \`game_round\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_split\` ADD CONSTRAINT \`FK_759aa5d1c742e522b014139942a\` FOREIGN KEY (\`handPlayerId\`) REFERENCES \`hand_player\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hand_split\` DROP FOREIGN KEY \`FK_759aa5d1c742e522b014139942a\``);
        await queryRunner.query(`ALTER TABLE \`hand_player\` DROP FOREIGN KEY \`FK_b65dde0106e7520f345bbb5c69a\``);
        await queryRunner.query(`ALTER TABLE \`hand_player\` DROP FOREIGN KEY \`FK_527929565f55014be9b74554356\``);
        await queryRunner.query(`ALTER TABLE \`player_stack\` DROP FOREIGN KEY \`FK_a1ddc9572081ca35e90ac7f5a83\``);
        await queryRunner.query(`ALTER TABLE \`player_stack\` DROP FOREIGN KEY \`FK_67bfb893f3412b3c7d5876ab6a7\``);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` DROP FOREIGN KEY \`FK_71d6061e4a231deb7c4a24a77f8\``);
        await queryRunner.query(`ALTER TABLE \`game_round\` DROP FOREIGN KEY \`FK_58b63ead7c02313a716929963cf\``);
        await queryRunner.query(`ALTER TABLE \`hand_split\` CHANGE \`handPlayerId\` \`handPlayerId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`hand_split\` ADD CONSTRAINT \`FK_759aa5d1c742e522b014139942a\` FOREIGN KEY (\`handPlayerId\`) REFERENCES \`hand_player\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` CHANGE \`gameRoundId\` \`gameRoundId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` CHANGE \`playerStackId\` \`playerStackId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` ADD CONSTRAINT \`FK_b65dde0106e7520f345bbb5c69a\` FOREIGN KEY (\`gameRoundId\`) REFERENCES \`game_round\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_player\` ADD CONSTRAINT \`FK_527929565f55014be9b74554356\` FOREIGN KEY (\`playerStackId\`) REFERENCES \`player_stack\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` CHANGE \`gameId\` \`gameId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` ADD CONSTRAINT \`FK_a1ddc9572081ca35e90ac7f5a83\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`player_stack\` ADD CONSTRAINT \`FK_67bfb893f3412b3c7d5876ab6a7\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` CHANGE \`gameRoundId\` \`gameRoundId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`hand_dealer\` ADD CONSTRAINT \`FK_71d6061e4a231deb7c4a24a77f8\` FOREIGN KEY (\`gameRoundId\`) REFERENCES \`game_round\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`game_round\` CHANGE \`gameId\` \`gameId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`game_round\` ADD CONSTRAINT \`FK_58b63ead7c02313a716929963cf\` FOREIGN KEY (\`gameId\`) REFERENCES \`game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
