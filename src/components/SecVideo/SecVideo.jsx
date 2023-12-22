import { Title, Text, Video, VideoWrapper, Overlay} from "./SecVideo.styled";
import { Section } from "components/SecForm/SecForm.styled";
import { Container } from "components/SecForm/SecForm.styled";
import PlaySvg from "./Svg/PlaySvg";
import SoundSvg from "./Svg/SoundSvg";

const SecVideo = () =>{
return(
    <Container>
    <Section>
        <Title>We are Createx Construction Bureau </Title>
        <Text>We are rightfully considered to be the best construction company in the USA.</Text>
        <VideoWrapper>
            <Video src="https://s3-alpha-sig.figma.com/img/8f04/ba49/daf57a9a1ed5a34de19c0db9e25505c6?Expires=1704067200&Signature=GG-wyCIw12nXsF4KnW8r5jfyciol7h43yNlums0zeyf-RGPaVOBw1YfsvT8IOgJhD5FEEEZK2RUcwnw22sFNOZBR0a1zLmmXKr36XabCutcKJ3gqTERHsYczaaXyZPy100iBQdRLYCNztuJqheIYJ4qM0b1426sqb94jH~q8~gvBvM01dxPmG7wxlrjHdfxBc6hMTB5tPm0~02AqZ6qzTSfvfhoy6x1-ZNSRFXgKkNJtJGEZDW9BnmWgIpLgkHJvrlDYkiJr5x~DDoQf~jwBVi3NFXx4MNip7MIQDGLn~MmLoVNWXf9QL8u2mtwI1auDwvH0T64MEBwcMicUZGhc-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="video" />
            <Overlay/>
            <PlaySvg/>
            <SoundSvg/>
        </VideoWrapper>
    </Section>
    </Container>
)
}

export default SecVideo;