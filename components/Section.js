import styled from 'styled-components';

const SectionContainer = styled.section`
  margin-bottom: 2rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

export default Section;