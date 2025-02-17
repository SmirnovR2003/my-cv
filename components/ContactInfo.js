// components/ContactInfo.js
import styled from 'styled-components';

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactInfo = ({ email, phone, linkedin, github }) => {
  return (
    <ContactList>
      <ContactItem>Email: <a href={`mailto:${email}`}>{email}</a></ContactItem>
      <ContactItem>Телефон: {phone}</ContactItem>
      <ContactItem>LinkedIn: <a href={linkedin}>{linkedin}</a></ContactItem>
      <ContactItem>GitHub: <a href={github}>{github}</a></ContactItem>
    </ContactList>
  );
};

export default ContactInfo;