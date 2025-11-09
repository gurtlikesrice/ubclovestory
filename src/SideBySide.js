import './SideBySide.css';

function SideBySide({ children }) {
  return (
    <div className="side-by-side">
      {children}
    </div>
  );
}

export default SideBySide;
