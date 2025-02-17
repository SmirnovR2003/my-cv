// components/Skill.js
import styled from 'styled-components';

const SkillItem = styled.li`
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const Skill = ({ skill }) => {
  return <SkillItem>{skill}</SkillItem>;
};

export default Skill;