import './App.css';
import Menu from './Menu.js';
import Title from './Title.js';
import Content from './Content.js';
import Section from './Section.js';
import Subheading from './Subheading.js';

  let TITLE = "Charles & Grace"

  let LOCATION_SECTION = "Location & Schedule"
  let DRESS_CODE_SECTION = "Dress Code"
  let RSVP_SECTION = "RSVP"
  let QNA_SECTION = "Q&A with Grace & Charles"

function App() {
  return (
    <div className="App">
      <Menu items={[LOCATION_SECTION, DRESS_CODE_SECTION, RSVP_SECTION, QNA_SECTION]}/>
      <Title title={TITLE}/>
      <Content>
        <Subheading>We're so excited to celebrate our special day with you!</Subheading>
        <Section title={LOCATION_SECTION}>
          <p>Join us at the beautiful Hycroft Manor for our special day. The ceremony will begin at 4:00 PM, followed by a reception with dinner and dancing. Please arrive by 3:45 PM to find your seats.</p>
        </Section>
        <Section title={DRESS_CODE_SECTION}>
          <p>We invite you to dress in formal attire for our celebration. The dress code is black tie optional. We encourage elegant evening wear and look forward to celebrating in style with you.</p>
        </Section>
        <Section title={RSVP_SECTION}>
          <p>Please let us know if you can join us by responding to your invitation. We kindly request that you RSVP by January 15th, 2025. Your timely response helps us plan the perfect celebration.</p>
        </Section>
        <Section title={QNA_SECTION}>
          <p>Have questions about the wedding? Feel free to reach out to us directly. We're happy to provide more information about accommodations, transportation, the venue, or anything else you'd like to know.</p>
        </Section>
      </Content>
    </div>
  );
}

export default App;
