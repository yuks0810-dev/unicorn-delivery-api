import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateDB1651254736119 implements MigrationInterface {
  name = 'updateDB1651254736119';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`unicorns\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`type\` int NOT NULL, \`created_at\` datetime NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`unicorns\``);
  }
}
