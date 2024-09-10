/**
 * @description Get all the books
 * @method GET
 */
export const fetchBlogs = async (request, response) => {
  response.status(200).json({ message: "Fetched blogs" });
};
