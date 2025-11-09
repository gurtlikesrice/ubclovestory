import './App.css';
import Menu from './Menu.js';
import Title from './Title.js';
import Content from './Content.js';
import Section from './Section.js';
import Subheading from './Subheading.js';
import Map from './Map.js';
import SideBySide from './SideBySide.js';
import Timeline from './Timeline.js';
import Divider from './Divider.js';
import ColorPalette from './ColorPalette.js';

  let TITLE = "Charles x Grace"

  let LOCATION_SECTION = "Location & Schedule"
  let DRESS_CODE_SECTION = "Dress Code"
  let RSVP_SECTION = "RSVP"
  let QNA_SECTION = "Q&A"

  const scheduleEvents = [
    { time: "3:30 PM", event: "Guest Arrival" },
    { time: "4:00 PM", event: "Wedding Ceremony" },
    { time: "4:30 PM", event: "Cocktail Hour" },
    { time: "6:00 pm", event: "Dinner" },
    { time: "8:00 pm", event: "Party" },
    { time: "10:00 pm", event: "Event Ends" }
  ];

function App() {
  const qnaList = [
            {
              question: "RVSP Deadline?",
              answer: "Please RSVP ASAP preferably but you have until end of April."
            },
            {
              question: "Parking?",
              answer: "There is free parking on McRae Avenue and at The Crescent; Hycroft Manor's parking lot is reserved for club members."
            },
            {
              question: "Indoor or outdoor wedding?",
              answer: "If the weather holds up, we'll have our cocktail hour in the garden, but the majority of the wedding will be indoors or on the terrace which is covered."
            },
            {
              question: "I have food allergies / restrictions.",
              answer: "Please send us your food allergies or restrictions via the google form."
            },
            {
              question: "Can I bring a +1?",
              answer: "Yes, please list any additional guests in the google form. We reserve the right to deny entry."
            },
            {
              question: "Children ok?",
              answer: "Yes, children are welcome to join."
            },
            {
              question: "How many cats do you guys have?",
              answer: "One, but one simpulse decision away from another."
            },
            {
              question: "How many times did Charles have to ask Grace out?",
              answer: "Two, surprisingly."
            },
            {
              question: "Who's better at badminton?",
              answer: "The answer will make Grace upset."
            }
          ];

  return (
    <div className="App">
      <Menu items={[LOCATION_SECTION, DRESS_CODE_SECTION, RSVP_SECTION, QNA_SECTION]}/>
      <Title title={TITLE}/>
      <Divider />
      <Content>
        <Subheading>Eight years ago, two students walked into
          the Forestry Building at the University of British Columbia for their first
          software engineering course together.
          Many adventures and memories later, we're getting married, and we'd like YOU to be there!
        </Subheading>
        <Section title={LOCATION_SECTION}>
          <p>
             Join us for a joyful celebration of the rest of our lives together
             with dear friends and loving family at the beautiful
             <br/>
             <div style={{fontSize: "1.5rem"}}><b>Hycroft Manor</b> on <u>June 28, 2026</u></div>.
          </p>
          <SideBySide>
            <Map  />
            <div>
              <Timeline events={scheduleEvents} />
            </div>
          </SideBySide>
        </Section>
        <Section title={DRESS_CODE_SECTION}>
          <p>
            Cocktail attire kindly requested. <b>For ladies</b>, we invite you to dress in pastel colors.
            <b> For gentlemen</b>, solid color blazers and dress shirts that match with the palette below are encouraged.
            We look forward to seeing you in your best!
          </p>
          <ColorPalette colors={['#d7cdb5ff',  '#d5dbb8', '#b2c47c', '#d3e2f1', '#efd8cd', '#d5d4d4ff']} />
        </Section>
        <Section title={RSVP_SECTION}>
          <p>Please let us know if you can make it by filling out this <a href="https://forms.gle/WGznRCGDHsHWEWyi6">google form</a>!
          <br/>
          <br />
          If you have any questions about how to get there, places to stay, or require any assistance,
          please don't hesitate to reach out to us. We'd be delighted to help you make it to our wedding!
          </p>
        </Section>
        <Section title={QNA_SECTION}>
          <p>
            {qnaList.map((item, idx) => (
              <span key={idx}>
                <b>{item.question}</b><br />
                {item.answer}<br /><br />
              </span>
            ))}
                            <b>Registry?</b><br />
                Your presence is enough of a gift for us, but if you'd like to
                contribute to our honeymoon fund, Charles has a <a href="https://venmo.com/u/ilikerice123">venmo</a>.
          </p>
        </Section>
      </Content>
      <Divider />
    </div>
  );
}

export default App;
