const axios = require("axios");

exports.getSortedAndPaginatedImages = async (
  sortBy = "id",
  page = 1,
  perPage = 10
) => {
  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: "YOUR_PIXABAY_API_KEY",
        order: sortBy,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
