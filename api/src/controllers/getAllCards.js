const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { page } = req.query;
    const rawCards = (await axios.get(`https://api.magicthegathering.io/v1/cards?gameFormat=standard&page=${page}`)).data.cards;
    const allCards = rawCards.filter(card => card.imageUrl).map(card => {
      const { type, multiverseid, variations, rulings, foreignNames, originalText, originalType, legalities, printings, ...rest } = card;
      return {
        ...rest,
        legality: card.legalities.find(lg => lg.format === 'Standard').legality
      };
    });
    res.status(200).json(allCards);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
};
