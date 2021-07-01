declare module 'ink-progress-bar' {
  import { FC } from 'react';
  interface ProgressBarProps {
    character?: string;
    percent?: number;
    left?: number;
    right?: number;
  }
  const ProgressBar: FC<ProgressBarProps>;
  export default ProgressBar;
}