import { MigrationInterface, QueryRunner } from "typeorm";

export class Channel1686294491308 implements MigrationInterface {
    name = 'Channel1686294491308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`channel\` DROP COLUMN \`capacity\``);
        await queryRunner.query(`ALTER TABLE \`channel\` ADD \`capacity\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`channel\` DROP COLUMN \`capacity\``);
        await queryRunner.query(`ALTER TABLE \`channel\` ADD \`capacity\` varchar(255) NOT NULL`);
    }

}
