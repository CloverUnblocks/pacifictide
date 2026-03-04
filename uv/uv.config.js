self.__uv$config = {
  prefix: "/uv/service/",
  bare: [
    "https://uv.holyubofficial.net/",
    "https://bareserver.dev/",
    "https://bare.needs.rest/"
  ],
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
