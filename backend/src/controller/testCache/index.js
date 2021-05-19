const cacheTest = async (req, res) => {
  try {
    const cached = await cache.get({ test: req.body.test });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
    console.log(error);
  }
};

module.exports = { cacheTest };
