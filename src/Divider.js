import './Divider.css';
import catSvg from './my_cat.svg';

function Divider() {
  return (
    <div className="divider">
      <img src={catSvg} alt="Decorative divider" />
    </div>
  );
}

export default Divider;
