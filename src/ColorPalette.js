import './ColorPalette.css';

function ColorPalette({ colors }) {
  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-circle"
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
    </div>
  );
}

export default ColorPalette;
