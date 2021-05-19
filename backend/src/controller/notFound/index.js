
const notFound = async (_, res) => {
    try {
      res.json({message:"Route not Found!"});
    } catch (error) {
      res.json({error: error.message,message: "Something Happened!" });
    }
  };
  
  module.exports = { notFound };
  