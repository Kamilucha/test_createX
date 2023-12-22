import { HeroTextWrap, HeroBg, HeroTitle, Span, HeroText, ButtonsList, Button, DividerHero, SliderList, SliderItem, Div } from "./Hero.styled"

const Hero = () =>{

    return(
            <Div>
        <HeroBg>
            <HeroTextWrap>
        <HeroTitle>
            CREATE<Span>X</Span> CONSTRUCTION
        </HeroTitle>
        <HeroText>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. 
        </HeroText>
        <ButtonsList>
            <li>
                <Button>Learn more about us</Button>
            </li>
            <li>
                <Button>Submit request</Button>
            </li>
        </ButtonsList>
            </HeroTextWrap>
            <SliderList>
                <SliderItem>
                <p>01</p>
                <DividerHero/>
                </SliderItem>
                <SliderItem>
                <p>02</p>
                <DividerHero/>
                </SliderItem>
                <SliderItem>
                <p>03</p>
                <DividerHero/>
                </SliderItem>
                <SliderItem>
                <p>04</p>
                <DividerHero/>
                </SliderItem>
            </SliderList>
        </HeroBg>
            </Div>
    )
}

export default Hero;