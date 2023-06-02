import { useSearchParams } from 'react-router-dom';

export interface DefaultPlayerWrapperStyle {
  maxWidth?: string;
}
export interface Props {
  defaultPlayerWrapperStyle?: DefaultPlayerWrapperStyle;
  playlistId?: number;
}

const defaultProps: Props = {
  defaultPlayerWrapperStyle: {
    maxWidth: '400x',
  },
};

const SoundCloudPlayer = ({
  defaultPlayerWrapperStyle,
  playlistId,
} = defaultProps) => {
  let [searchParams] = useSearchParams();

  const playlistIdValue = playlistId
    ? playlistId
    : searchParams.get('playlistId');

  return (
    <div style={defaultPlayerWrapperStyle}>
      {playlistIdValue ? (
        <iframe
          title="playerIframe"
          width="100%"
          height="300"
          scrolling="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlistIdValue}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        ></iframe>
      ) : (
        <div>Invalid or missing playlistId</div>
      )}
    </div>
  );
};
export default SoundCloudPlayer;
