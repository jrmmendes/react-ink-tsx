import toml from "toml";
import path from "path";
import fs from "fs";

export const config = (): { user: { did: string; authorization: string } } => {
  
  const fallback = { user: { did: "", authorization: "" } };
  
  try {
    const configPath = path.join(process.cwd(), "config.toml");
    console.log(`[CONFIG] Reading config from ${configPath}`);

    const rawConfig = fs.readFileSync(configPath);
    const parsedConfig = toml.parse(rawConfig.toString());
    return parsedConfig;
  } catch (e) {
    console.error("[CONFIG] could not load configuration", e);
    return fallback;
  }
};
