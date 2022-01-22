import React, { useState } from 'react';

function App() {
  //count это состояние объекта setCount функция которая это состояние меняет useState(0) где 0 это начальное значение
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('TEXT');
  
  function funcPlus() {
    {/*Мы не изменяем likes на прямую а вызфваем для этого специальную функцию и передаём туда значение которое на еденицу больше наших лайков*/}
    setLikes(likes + 1)
  }

  function funcMinus() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">

      {/*{likes} встаивает переменную в нутрь тега , что то вроде консоль лога*/}
      <h1>{likes}</h1>
      <h1>{value}</h1>

      <input
        type='text'
        value={value}
        //Вешаем слушатель события onChange, коллбэки
        //для событий первым параметром принимают event
        //у которого есть поле target и поле value,
        //target это сам DOM элемент а value это 
        //значение которое в нём находится
        onChange={e => setValue(e.target.value)}
      />

      {/*onClick это слушатель события нажатие где функцию не вызываем () а передаём как ссылку*/}
      <button onClick={funcPlus}>plus</button>
      <button onClick={funcMinus}>minus</button>

      <p>{value}</p>

    </div>
  );
}

export default App;
