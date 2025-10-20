import './Subheading.css';

function Subheading({ children }) {
  return (
    <div className="subheading">
      <p>{children}</p>
    </div>
  );
}

export default Subheading;
