import { useEffect, useState } from "react";

function App() {
  const getMode = () => {
    const initialModel = localStorage.getItem("mode");
    if (initialModel == null) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        return true;
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  };

  const [darkMode, setDarkMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
                checked={darkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>
            {darkMode
              ? "دارک مود فعال شده و فضا دارک داریم"
              : " لایت مود فعال شده و فضا روشنه"}
          </h1>
          <p>
            {darkMode
              ? "این دارک مود است و الان صفحه سیاه است"
              : "این لایت مود است و الان صفحه سفید است"}
          </p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <img src="/image/1.jpg"></img>
              <h2>کارت اول </h2>
              <p>کارت اول است</p>
            </div>
            <div className="card-item">
              <img src="/image/2.jpg"></img>
              <h2>کارت دوم </h2>
              <p>کارت دوم است</p>
            </div>
            <div className="card-item">
              <img src="/image/3.jpg"></img>
              <h2>کارت سوم </h2>
              <p>کارت سوم است</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
