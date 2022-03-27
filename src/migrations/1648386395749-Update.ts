import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1648386395749 implements MigrationInterface {
  name = 'Update1648386395749';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` datetime NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`books\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titie\` varchar(255) NOT NULL, \`created_at\` datetime NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`book_statuses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bookId\` int NOT NULL, \`status\` varchar(255) NOT NULL, \`created_at\` datetime NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`rental_statuses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`bookId\` int NOT NULL, \`rentFrom\` datetime NOT NULL, \`rentTo\` datetime NOT NULL, \`returnDate\` datetime NOT NULL, \`created_at\` datetime NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`reservations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`bookId\` int NOT NULL, \`rentFrom\` datetime NOT NULL, \`rentTo\` datetime NOT NULL, \`created_at\` datetime NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`shelves\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`memo\` varchar(255) NOT NULL, \`created_at\` datetime NULL, \`updated_at\` datetime NULL, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`shelves\``);
    await queryRunner.query(`DROP TABLE \`reservations\``);
    await queryRunner.query(`DROP TABLE \`rental_statuses\``);
    await queryRunner.query(`DROP TABLE \`book_statuses\``);
    await queryRunner.query(`DROP TABLE \`books\``);
    await queryRunner.query(`DROP TABLE \`companies\``);
  }
}
