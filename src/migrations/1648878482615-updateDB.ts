import {MigrationInterface, QueryRunner} from "typeorm";

export class updateDB1648878482615 implements MigrationInterface {
    name = 'updateDB1648878482615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`created_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`updated_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD \`deleted_at\` datetime NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`deleted_at\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`created_at\``);
    }

}
