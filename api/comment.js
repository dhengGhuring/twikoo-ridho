const twikoo = require("twikoo/api");

module.exports = async (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://by-dhengghuring.vercel.app"
  ); // sesuaikan
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return twikoo({
    envId: "twikoo-blog-ridho", // bebas, boleh sesuai project
    req,
    res,
  });
};
