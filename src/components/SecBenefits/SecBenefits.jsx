import { Text, Title, Section, Container } from "components/App.styled";
import { BenefitsList, BenefitsItem, BenefitsTitle, BenefitsText, Divider } from "./SecBenefits.styled";
import LikeSvg from "./Svg/LikeSvg";
import HandSvg from "./Svg/Hand";
import SlippersSvg from "./Svg/Slippers";

const SecBenefits = ()=>{
    return(
        <Container>
        <Section>
            <Title>Our core values</Title>
            <Text>Our mission is to set the highest standards for construction sphere.</Text>
            <BenefitsList>
                <BenefitsItem>
                    <LikeSvg/>
                    <BenefitsTitle>Quality</BenefitsTitle>
                    <BenefitsText>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</BenefitsText>
                </BenefitsItem>
                <Divider/>
                <BenefitsItem>
                    <HandSvg/>
                    <BenefitsTitle>Safety</BenefitsTitle>
                    <BenefitsText>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</BenefitsText>
                </BenefitsItem>
                <Divider/>
                <BenefitsItem>
                    <SlippersSvg/>
                    <BenefitsTitle>Comfort</BenefitsTitle>
                    <BenefitsText>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</BenefitsText>
                </BenefitsItem>
            </BenefitsList>
        </Section>
        </Container>
    )
}

export default SecBenefits;