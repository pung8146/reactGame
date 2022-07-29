# 리액트란 프론트 엔드 개발을 위한 Javascript 오픈소스 라이브러리
사용하는 이유 3가지
- 선언형 : 코드를 자세히분석하지 않고도 코드의 의도를 쉽게 이해할 수 있습니다. (명시적 / 직관적)
- 컴포넌트 기반 : 하나의 기능 구현을 위해 여러종류의 코드묶음입니다.
                  또한 컴포넌트로 분리하면서 서로 독립적이고 재사용이 가능합니다.
                  (독립성 / 재사용성 => 기능작동 집중하여 개발 가능 , 유지보수 / 유닛 테스트)
- 범용성 : 리액트는 javascript 프로젝트 어디에든 유연하게 적용 될 수 있으며, 리액트 Native 로 모바일 개발도 가능합니다.

# react 17 / react 18 의차이로
ReactDOM.render (<LikeButton / > , document.querySelector("#root")); // React 17 버전 코드입니다. 
ReactDOM.createRoot(document.querySelector("#root")).render(<LikeButton / > ); // React 18 버전 코드입니다.
### 18버전은 17버전을 인식하지만 18버전 기능을 지원하지 않습니다. 

# JSX 는 {자바 스크립트 표현식}
React에서 UI를 구성할 때 사용하는 문법으로 JavaScript를 확장한 문법입니다. 이 문법을 이용해서 우리는 React 엘리먼트를 만들 수 있습니다.
html 에선 태그는 <button> 소문자로 시작해야 됩니다 .(XML 이 엄격하기때문입니다.)


# Babel
 Babel은 JSX를 브라우저가 이해할 수 있는 JavaScript로 컴파일합니다. 컴파일 후, JavaScript를 브라우저가 읽고 화면에 렌더링할 수 있습니다.
 ```javascript
 <script type="text/bable"> // 바벨 사용코드
 </script>
```

# 객체를 함부로 변경해서 안됩니다
그렇기에 immutable 태그를 사용하는것을 추천합니다.

# 함수 컴포넌트
```javascript
function LikeButton () => { // 함수형 컴포넌트 X 
    const [liked, setLiked] = React.useState(false); //  구조 분해 문법입니다.
    // 뭔짓을 하든 , 결국 return 한게 화면입니다.
   if(liked) {
        return 'You liked this.';
    }

    return (
        <button onClick={() => {setLiked(true)}}> Like </button>
    )
}
```
- 코드가 간략하게 작성이 가능합니다.
- this 쓸 일이 없어집니다.

# 구조 분해 문법 (javascript 문법)
```javascript
    const [liked, setLiked] = React.useState(false); //  구조 분해 문법입니다.
    const liked = result[0]; // 배열에 꺼내서 변수를 대입한 문법 (기존 문법)
    const setLiked = result[1];

    const {liked, setLiked} ! 객체 , 배열일경우 다르므로 절대 주의해야됩니다.
```