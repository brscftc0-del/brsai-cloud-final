export default function handler(req, res) {
  return res.status(200).json({
    status: "online",
    message: "Hello from BRSAI Cloud API 🌩️",
    version: "1.0.0",
    info: "Bu API BRSAI 1.0 PRO için bulut bağlantısını sağlar."
  });
}
