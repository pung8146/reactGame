# react 17 / react 18 의차이로
ReactDOM.render (<LikeButton / > , document.querySelector("#root")); // React 17 버전 코드입니다. 
ReactDOM.createRoot(document.querySelector("#root")).render(<LikeButton / > ); // React 18 버전 코드입니다.
### 18버전은 17버전을 인식하지만 18버전 기능을 지원하지 않습니다. 

# JSX 
html 에선 태그는 <button> 소문자로 시작해야 됩니다 .(XML 이 엄격하기때문입니다.)

# 객체를 함부로 변경해서 안됩니다
그렇기에 immutable 태그를 사용하는것을 추천합니다.