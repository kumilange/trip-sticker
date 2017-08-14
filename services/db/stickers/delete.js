module.exports = (knex, Sticker) => {
  return async (params) => {
    const deleteId = {id: params.id}
    try {
      await knex('stickers')
        .where(deleteId)
        .del()
      const result = await knex('stickers')
        .where(deleteId)
        .select();
      return deleteId;
    } catch (err) {
      throw err;
    }
  };
};