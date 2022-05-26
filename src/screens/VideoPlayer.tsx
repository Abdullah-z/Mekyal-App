import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Block} from '../components';
import {useTheme} from '../hooks/';
const VideoPlayer = (props) => {
  const {sizes} = useTheme();
  return (
    <Block marginHorizontal={sizes.sm}>
      <YoutubePlayer height={225} play={false} videoId={props.link} />
    </Block>
  );
};

export default VideoPlayer;
