import styled from '@emotion/styled';

export const HeroBg = styled.div`
height: 100vh;
  width: 100%;
  background: linear-gradient(0deg, rgba(30, 33, 44, 0.60) 0%, rgba(30, 33, 44, 0.60) 100%), 
              url('https://s3-alpha-sig.figma.com/img/d30c/d090/9244cd6a3be94089053b70a898e7e451?Expires=1704067200&Signature=VY7kI9U3MbEuEUwORwjZnhPfvJLBCZVe-qC6SxM2i~EyL5UI4w7luaFoWkRq~rdERSh0IlUdYQRiCsHwnzu2oIu2XJeTxqDKg5C6rmjnKY84NQks9OyGp7WXqkYE1Fc4S8bdSsvxisycmDp3ZgoBTo2BwT8oEKX14TeMphq-FMRUPVIbr-R6Zy83byraBZaWVdVDDRWjHsZIkGMLYAyNTAlKQ24fEItDCTCR0qFl99KO6~KF8vOKHedN0V9Bzi64iptucsbfyVj3BU3X4GO8EBbze0fKR4Em8qnW5Hy-jWSbqe789W0JkiBQYnnmnw9C8eyhJnvn5Ke5BuGwBKfNJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
  background-size: cover;
  background-position: center;
`;

export const HeroTextWrap = styled.div`

text-align: center;
color: white;
max-width: 600px;`

export const HeroTitle = styled.h1`
font-size: 72px;
font-weight: 700;
line-height: 93.6px;
letter-spacing: 1px;`

export const Span = styled.span`
color: #FF5A30;
font-size: 72px;
font-weight: 700;
line-height: 130%;
letter-spacing: 1px;`

export const HeroText = styled.p`
font-size: 20px;
font-weight: 400;
line-height: 30px;`

export const ButtonsList = styled.ul`
display: flex;
gap: 24px;`

export const Button = styled.button`
display: flex;
padding: 0px 40px;
flex-direction: column;
align-items: center;
gap: 10px;
border-radius: 4px;
background-color: inherit;
height: 52px;
justify-content: center;

border: 1px solid #FFF;

color: #FFF;
font-size: 16px;
font-weight: 700;
line-height: 52px; 
letter-spacing: 0.5px;
text-transform: uppercase;

&:hover {
    background-color: #FF5A30;
    border: 1px solid #FF5A30;
    cursor: pointer;
  }`

  export const DividerHero = styled.div`
  width: 178px;
  height: 1px;
  background: #FFF; 
`
export const SliderList = styled.ul`
display:flex;
gap: 4px;
`

export const SliderItem = styled.li`
display:flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
opacity: 0.3;

&:hover {
    opacity: 1;
  }`

export const Div = styled.div`
display: flex;`





