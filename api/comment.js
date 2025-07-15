const twikoo = require("twikoo");

module.exports = async (req, res) => {
  // CORS config
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://by-dhengghuring.vercel.app/en/"
  ); // Ganti * dengan domain kamu di production
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return twikoo.init({
    envId: "twikoo-blog-ridho", // Bebas, hanya sebagai label
    secretId: "", // Kosongkan jika tidak pakai Tencent Cloud
    secretKey: "",
    context: { req, res },
  });
};
