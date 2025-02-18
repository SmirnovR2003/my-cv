import Head from 'next/head';
import styled from 'styled-components';
import Section from '../components/Section';
import ContactInfo from '../components/ContactInfo';
import Skill from '../components/Skill';
import data from '../data/resume.json';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: sans-serif;
  padding: 20px;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  line-height: 1.5;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const ExperienceCompany = styled.span`
  font-style: italic;
  color: #777;
`;

const ExperienceDates = styled.span`
  font-size: 0.8rem;
  color: #999;
  margin-left: 1rem;
`;

const EducationItem = styled.div`
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <Head>
        <title>{data.name} - Резюме</title>
        <meta name="description" content="Резюме Джона Доу" />
      </Head>

      <Name>{data.name}</Name>
      <Title>{data.title}</Title>
      <Summary>{data.summary}</Summary>

      <Section title="Контактная информация">
        <ContactInfo {...data.contact} />
      </Section>

      <Section title="Навыки">
        <ul>
          {data.skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </ul>
      </Section>

      <Section title="Опыт работы">
        {data.experience.map((item, index) => (
          <ExperienceItem key={index}>
            <ExperienceTitle>
              {item.title} <ExperienceCompany>{item.company}</ExperienceCompany>
              <ExperienceDates>{item.dates}</ExperienceDates>
            </ExperienceTitle>
            <p>{item.description}</p>
          </ExperienceItem>
        ))}
      </Section>

      <Section title="Образование">
        {data.education.map((item, index) => (
          <EducationItem key={index}>
            <h3>{item.degree}</h3>
            <p>{item.university}, {item.location}</p>
            <p>{item.dates}</p>
          </EducationItem>
        ))}
      </Section>

      <Section title="Проекты">
        {data.projects.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a href={item.url}>{item.url}</a>
          </div>
        ))}
      </Section>
    </Container>
  );
};

export default Home;