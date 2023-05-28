const pixabayService = require("../services/pixabayService");

exports.getImages = async (req, res, next) => {
  try {
    const { sortBy, page, perPage } = req.query;
    const images = await pixabayService.getSortedAndPaginatedImages(
      sortBy,
      page,
      perPage
    );
    res.json(images);
  } catch (error) {
    next(error);
  }
};
