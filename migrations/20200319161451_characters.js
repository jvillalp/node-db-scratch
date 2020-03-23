exports.up = function(knex) {
  return knex.schema.createTable("characters", tbl => {
    tbl.increments();

    tbl
      .string("name", 155)
      .notNullable()
      .unique();

    tbl
      .string("gender", 155)
      .notNullable();

    tbl
      .string("imageUrl", 250)
      .notNullable();
  })
  .createTable('movies', tblShow => {
      tblShow.increments()

      tblShow
        .string('movieName', 255)
        .notNullable()
        .unique()
      
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExist('movies')
        .dropTableIfExist('characters')

};
