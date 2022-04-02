import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateDB1648878418263 implements MigrationInterface {
  name = 'updateDB1648878418263';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`books\` CHANGE \`titie\` \`title\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`title\``);
    await queryRunner.query(
      `ALTER TABLE \`books\` ADD \`title\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`books\` DROP COLUMN \`title\``);
    await queryRunner.query(
      `ALTER TABLE \`books\` ADD \`title\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`books\` CHANGE \`title\` \`titie\` varchar(255) NOT NULL`,
    );
  }
}
