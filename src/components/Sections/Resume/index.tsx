import {FC, memo} from 'react';
import Section from '../../../components/Layout/Section';
import {certifications, education, experience, SectionId, skills} from '../../../data/data';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineCertifications from './TimelineCertifications';
import TimelineItem from './TimelineItem';
import TimelineItemEducation from './TimelineItemEducation';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItemEducation item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Certifications">
          {certifications.map((item, index) => (
            <TimelineCertifications item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
