import styled from '@emotion/styled';
import PlaySvg from './Svg/PlaySvg';

export const StPlaySvg = styled(PlaySvg)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export const Video = styled.img`
width: 1230px;
border-radius: 4px;
`
export const VideoWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
margin-top: 60px;
`
export const Overlay = styled.div`
position: absolute;
  width: 1230px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;