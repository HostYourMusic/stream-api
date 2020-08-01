import * as dotenv from "dotenv-extended";

if (process.env.STAGE == "dev") {
  dotenv.load({
    path: `${__dirname}/.dev.env`,
  });
} else {
  dotenv.load({
    path: `${__dirname}/.env`,
  });
}

