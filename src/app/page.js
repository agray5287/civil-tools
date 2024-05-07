import Image from "next/image";

export default function Home() {
  return (
    <div>
      <head>
        <title>Meter/Feet Conversion</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="stylesheet" href="myStyles.css" />
      </head>
      <body>
        <form onsubmit="return runScript()">
          <div>
            <label for="numberInput">Measurement:</label>
            <input type="number" step="0.001" id="numberInput" required />
          </div>
          <div class="input-group">
            <label for="unitSelect">Units:</label>
            <select id="unitSelect">
              <option value="meters">Meters</option>
              <option value="feet">Feet</option>
            </select>
          </div>
          <button type="submit">Calculate</button>
        </form>

        <div id="result" class="result">
          Meter/Feet Conversion
        </div>
        <div class="absolute bottom-1 right-1 text-gray-400">AMG 2024</div>
        <script src="MeterFeetLogic.js"></script>
      </body>
    </div>
  );
}
