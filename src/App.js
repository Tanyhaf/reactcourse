import './App.css';
import {Posts} from "./components/Posts/Posts";
import Launches from "./components/Launches/Launches";

const App = () => {
  return (
      <div>
          {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
          {/*відобразити кожного інформацію (id,title) з кожного поста (компонента Post)*/}
          {/*Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}

            <Posts/>
            <Launches/>

          {/*=====*/}
          {/*є API от SpaceX*/}
          {/*https://api.spacexdata.com/v3/launches/*/}
          {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
          {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}
      </div>
);
}

export  {App};
