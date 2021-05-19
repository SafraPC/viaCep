
const helloWorld = async (_, res) => {
  try {
    res.json({message:"Hello World!"});
  } catch (error) {
    res.json({error: error.message,message: "Something Happened!" });
  }
};

module.exports = { helloWorld };
