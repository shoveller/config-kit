# 사용법

### 패키지를 추가하려면?
`eslint-config` 라는 이름의 모듈을 추가하려면, 아래의 명령어를 사용하세요.
```
npx lerna create eslint-config
```
이때 필요하지 않은 파일도 많이 만들어지니 수동으로 추가해도 됩니다.

### 모든 하위 모듈의 node_modules 디렉토리를 삭제하려면?
```
npm run clean
```

### 모든 하위 패키지에 라이브러리를 설치하려면?
```shell
npm run clean:i
```


