import './Timeline.css';

function Timeline({ events }) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-time">{event.time}</div>
          <div className="timeline-event">{event.event}</div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
