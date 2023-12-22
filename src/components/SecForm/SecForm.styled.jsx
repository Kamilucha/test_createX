import styled from '@emotion/styled';

export const FormTitle = styled.h2`
color: #1E212C;
text-align: center;

font-size: 28px;
font-weight: 700;
line-height: 42px;`

export const Form = styled.form`
display: flex;
justify-content: center;
gap: 24px;
margin-top: 32px;
align-items: flex-end;
margin-bottom: 48px;
`

export const Label = styled.label`
display: flex;
flex-direction: column;

color: #424551;

font-size: 14px;
font-weight: 400;
line-height: 21px;
`

export const Input = styled.input`
display: flex;
padding: 11px 176px 12px 16px;
align-items: center;
border-radius: 4px;
border: 1px solid #D7DADD;
background: #F4F5F6;`

export const Button = styled.button`
display: inline-flex;
padding: 0px 32px;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 4px;
border: none;
height: 44px;
background: #FF5A30;

color: #FFF;
text-align: center;
font-size: 14px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0.5px;
text-transform: uppercase;`

export const FormWrapper = styled.div`
border-radius: 4px;
background: #FFF;
box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);
padding-bottom: 48px;
`