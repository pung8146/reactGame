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

# Webpack 
다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모든 번들 라이브러리입니다.
node 는 서버 가아니라 Javascript 실행기입니다.

# Babel

Babel은 JSX를 브라우저가 이해할 수 있는 JavaScript로 컴파일합니다. 컴파일 후, JavaScript를 브라우저가 읽고 화면에 렌더링할 수 있습니다.

```javascript
<script type="text/bable"> // 바벨 사용코드</script>
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

# 함수를 따로 분리해서 사용할경우

render 부분에서 함수 가 있을경우
매번 새롭게 만들어짐으로 함수는 바깥으로 분리시키는게 좋습니다.

```javascript
onSubmit = (e) => {
    화살표 함수에 따라 this가 바뀌게 되므로
    화살표 함수를 권장합니다.
}

onSubmit function(e) {
    this.의 주체가 바뀌게 되므로 render 부분에서는 사용해도 괜찮습니다.
}
```

# setState

setState 는 컴포넌트 안에 무조건 있어야 합니다

# react 에서 못쓰는 속성
class => className
for => htmlFor // label 에 for 속성


# babel
 @babel/core : 기본적인 babel 최신문법으로 바꿔줍니다.
 @babel/preset-env : 사용자 환경에 맞게 알아서 변경해줍니다. 
 @babel/preset-react : JSX으로 변경해줍니다.
 babel-loader : 바벨 웹팩을 연결해줍니다.