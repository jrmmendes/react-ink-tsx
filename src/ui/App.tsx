import { Box, Text, useApp, useInput } from "ink";
import React, { FC, useState } from "react";
import Spinner from "ink-spinner";
import { getProfile, Actor } from "../data/get-profile";
import { useEffect } from "react";
import { useCallback } from "react";
import { Newline } from "ink";

export const App: FC = () => {
  const { exit } = useApp();

  const [profile, setProfile] = useState<Actor | void>();
  const [isLoading, setLoading] = useState(true);

  const getProfileCallback = useCallback(
    async () =>
      getProfile()
        .then((response) => {
          setProfile(response);
          setLoading(false);
        })
        .catch((e) => setLoading(false)),
    [getProfile],
  );

  useEffect(() => {
    getProfileCallback();
  }, []);

  useEffect(() => {
    if (isLoading === false) return exit();
  }, [isLoading]);

  return (
    <Box flexDirection="column" padding={1}>
      {isLoading && (
        <Text>
          <Spinner type="dots" /> <Text> fetching profile from bsky </Text>
        </Text>
      )}
      {profile && (
        <Text>
          {[
            ["Name", profile.displayName],
            ["Handle", "@" + profile.handle],
            ["Followers", profile.followersCount],
            ["Following", profile.followsCount],
          ].map(([label, value]) => (
            <Text key={label}>
              <Text bold>{label}: </Text>
              <Text color="blue"> {value} </Text>
              <Newline />
            </Text>
          ))}
        </Text>
      )}
    </Box>
  );
};
