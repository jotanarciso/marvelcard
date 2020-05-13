import crypto from "crypto";

/* Marvel APIConfig Default */
const PRIV_KEY = "b97b275f00c65061c1c548114ece8c741cf8a27f";
const API_KEY = "dbb258f56cf0e85ba0a3bcf608741b2c";
const ts = new Date().getTime();
const hash = crypto
  .createHash("md5")
  .update(ts + PRIV_KEY + API_KEY)
  .digest("hex");

export const authenticationData = {
  apikey: API_KEY,
  ts: ts,
  hash: hash,
};
