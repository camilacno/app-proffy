import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('last_name');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.boolean('is_proffy').notNullable();
    table.string('avatar');
    table.string('whatsapp');
    table.string('bio');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
