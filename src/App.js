import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "전경민",
    content: "안녕",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김철수",
    content: "안녕1",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김짱구",
    content: "안녕2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "김유리",
    content: "안녕3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
