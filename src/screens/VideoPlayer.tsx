import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Block} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
const VideoPlayer = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  return (
    <Block marginHorizontal={sizes.sm}>
      <YoutubePlayer height={225} play={false} videoId={'UHQPdP8qgrk'} />
    </Block>
  );
};

export default VideoPlayer;
