import { Box, Text, useApp, useInput } from 'ink';
import React, { FC, useState } from 'react';


const validOptions = ['q', 'n', 'd'];

export const App: FC = () => {
  const { exit } = useApp();
  const [option, setOption] = useState<string>();
  const [inputStatus, setInputStatus] = useState<'valid' | 'invalid'>('valid');

  useInput((input, keys) => {
    if (input === 'q') {
      return exit();
    }

    if (keys.backspace || keys.return || keys.tab) {
      return;
    }

    if (!validOptions.includes(input)) setInputStatus('invalid');
    else setInputStatus('valid');

    setOption(input);
  });

  return (
    <>
      <Box
        flexDirection='column'
        borderStyle='single'
        padding={3}>

        <Text
          bold={true} color={inputStatus === 'invalid' ? 'red' : 'green'}
          underline={true}>
          Current input is {inputStatus}
        </Text>
        <Text>
          <Text bold={true} color='gray'>[Option]</Text> &gt;&gt; {option}
        </Text>
      </Box>
      <Text wrap='middle'>Valid inputs: q (quit), n, d</Text>
    </>
  );
}