import { useState } from 'react';
import { FormTitle, Form, Label, Section, Input, Button, FormWrapper, Container } from './SecForm.styled';

const SecForm = ()=>{
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
      };

    
return(
    <Container>
    <Section>
        <FormWrapper>
        <FormTitle>Want to know more? Ask us a question:</FormTitle>
            <Form onSubmit={handleSubmit}>
            <Label>
        Name
        <Input
        placeholder="Your name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Label>
      <br />

      <Label>
        Phone
        <Input
        placeholder="Your phone"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </Label>
      <br />

      <Label>
        Message
        <Input
        placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Label>
      <br />

      <Button type="submit">Send</Button>
            </Form>
        </FormWrapper>
    </Section>
    </Container>
)
}

export default SecForm