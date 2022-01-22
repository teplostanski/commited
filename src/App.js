import React, {useState} from 'react';
import './styles/App.css';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ]);

  return (
    <div className="App">
      
      <form>
        <input type='text' placeholder='Название поста'/>
        <input type='text' placeholder='Описание'/>
        <MyButton disabled>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title={'42:30 ➝ Создание UI библиотеки. Первые компоненты. CSS модули. Пропс children'}/>
    </div>
  )
}

export default App;
