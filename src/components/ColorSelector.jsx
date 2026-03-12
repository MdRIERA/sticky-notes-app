import { useColor } from "../context/ColorContext";

function ColorSelector() {
  const { defaultColor, setDefaultColor } = useColor();

  return (
    <div className="color-selector">
      <label htmlFor="colorPicker">Color por defecto: </label>
      <input
        id="colorPicker"
        type="color"
        value={defaultColor}
        onChange={(e) => setDefaultColor(e.target.value)}
      />
    </div>
  );
}

export default ColorSelector;