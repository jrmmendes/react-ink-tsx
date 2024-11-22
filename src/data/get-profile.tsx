import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { config } from "../infra/config";


export type Actor = {
  followersCount: number;
  followsCount: number;
  postsCount: number;
  description: string;
  did: `did${string}`;
  handle: string;
  displayName: string;
};

const client = axios.create({
  baseURL: "https://russula.us-west.host.bsky.network/xrpc",
  validateStatus: (status) => status > 199 && status < 499,
});

export const getProfile = async (): Promise<Actor | void> => {
  const { user } = config();
  const response = await client.get("/app.bsky.actor.getProfile", {
    params: {
      actor: user.did,
    },
    headers: {
      authorization: user.authorization,
    },
  });
  
  if (response.status !== 200) {
    console.error(response.data)
    return;
  }
  
  return response.data;
};
