import './App.css';
import DiaryList from './DiaryList';
import DiaryEditor from './DirayEditor';

const  dummyList = [
  {
    id:1,
    author: "박상훈",
    content:'하이 1',
    emotion: 3,
    created_date : new Date().getTime(),
  },
  {
    id:2,
    author: "아무개",
    content:'하이 2',
    emotion: 4,
    created_date : new Date().getTime(),
  },
  {
    id:3,
    author: "거북이 ",
    content:'하이 3',
    emotion: 5,
    created_date : new Date().getTime(),
    
  }
]

function App() {
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
