import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const daikichi =
  "https://3.bp.blogspot.com/-vQSPQf-ytsc/T3K7QM3qaQI/AAAAAAAAE-s/6SB2q7ltxwg/s1600/omikuji_daikichi.png";

const kichi =
  "https://2.bp.blogspot.com/-27IG0CNV-ZE/VKYfn_1-ycI/AAAAAAAAqXw/fr6Y72lOP9s/s800/omikuji_kichi.png";

const chukichi =
  "https://3.bp.blogspot.com/-_z-n-7gO3KA/T3K7MU3MdGI/AAAAAAAAE-k/8qs-jxqS4LE/s1600/omikuji_chuukichi.png";

const shokichi =
  "https://3.bp.blogspot.com/-nZt5pjGWT9E/T3K7TJ4wEZI/AAAAAAAAE_E/c1X2-N54EYo/s1600/omikuji_syoukichi.png";

const kyo =
  "https://4.bp.blogspot.com/-qCfF4H7YOvE/T3K7R5ZjQVI/AAAAAAAAE-4/Hd1u2tzMG3Q/s1600/omikuji_kyou.png";
  
const daikyo =
  "https://2.bp.blogspot.com/-h61ngruj0tE/T3K7RDUWmPI/AAAAAAAAE-0/KXtPY8fDwco/s1600/omikuji_daikyou.png";

function App() {
  const onClickOmikuji = () => {
    var arr = [daikichi, kichi, chukichi, shokichi, kyo, daikyo];
    var index = Math.floor(Math.random() * arr.length);
    setOmikuji(arr[index]);

  };
  const [omikuji, setOmikuji] = useState("");

  return (
    <div className="App">
      <button className="box">
        <img
          src="https://3.bp.blogspot.com/-cPqdLavQBXA/UZNyKhdm8RI/AAAAAAAASiM/NQy6g-muUK0/s800/syougatsu2_omijikuji2.png"
          onClick={onClickOmikuji}
        />
      </button>

      <img src={omikuji} className="result"></img>


      {/*紙吹雪を舞わせたかった
       {(() => {
        if (omikuji == daikichi) {
          return ;
        }
      })()} */}
    </div>
  );
}

export default App;