import { useState, useEffect } from "react";
import "./App.css";

const APP_KEY = "test";

function App() {
  const getData = () => {
    const data = localStorage.getItem("test");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

    const onClickDelete = (index) => {
       setData(data.splice(index+1,1));
    };

  // 登録されるデータを保持するuseState
  const [data, setData] = useState(getData);

  // タイトル入力欄のテキスト情報を保持するuseState
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");

  // 送信を押したら登録
  const handleAddSubmit = (e) => {
    // フォームタグは送信の際に画面がリロードされるのでそれをさせないおまじないが以下
    e.preventDefault();

    // データを登録するための「塊＝オブジェクト」を作る
    let pushData = {
      title,
      title2,
    };
    // スプレッド演算子 ES6
    setData([...data, pushData]);
    // 以下でフォームをまっさらにする。
    setTitle("");
    setTitle2("");
  };

  // point! useStateの[data]に変更があったらlocalStrageを更新する
  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <h1>localStrage</h1>

      <form onSubmit={handleAddSubmit}>
        {/* title */}
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {/* title2 */}
        <input
          type="text"
          required
          onChange={(e) => setTitle2(e.target.value)}
          value={title2}
        />

        {/* 送信ボタン */}
        <button type="submit">送信</button>
      </form>

      {data.map((item, index) => (
        <div key={index}>
          <p>{index}</p>
          <p>
            {item.title}
            {item.title2}
            <button onClick={() => onClickDelete(index)}>削除</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
