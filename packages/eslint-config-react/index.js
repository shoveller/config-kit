/**
 * @typedef {import('eslint').Linter.RulesRecord} Rules
 */

/**
 *
 * @type {Rules}
 */
const reactHookRules = {
  // hook은 반드시 react 함수 안에서 호출해야 한다
  "react-hooks/rules-of-hooks": ["error"], // Checks rules of Hooks
  // hook의 dep array는 반드시 지켜야 한다
  "react-hooks/exhaustive-deps": ["error"], // Checks effect dependencies
};

/**
 *
 * @type {Rules}
 */
const reactRules = {
  // boolean 값을 props로 넘길 때는 우변을 생략한다
  "react/jsx-boolean-value": ["error"],
  // jsx의 닫는 꺽쇠는 정렬해야 한다
  "react/jsx-closing-bracket-location": ["error"],
  // jsx의 닫는 태그는 정렬해야 한다
  "react/jsx-closing-tag-location": ["error"],
  // jsx의 props는 2칸을 띄워야 한다
  "react/jsx-indent-props": [2, {indentMode: 2, ignoreTernaryOperator: true}],
  // javascript url은 사용할 수 없다
  "react/jsx-no-script-url": ["error"],
  // 불필요한 플래그먼트 금지
  "react/jsx-no-useless-fragment": ["error"],
  // props의 스프레딩 금지
  "react/jsx-props-no-spreading": ["error"],
  // jsx의 중복 공백열 금지
  "react/jsx-props-no-multi-spaces": ["error"],
  // props는 알파벳순서로 정렬이 되어야 한다
  "react/jsx-sort-props": ["error"],
  // dangerouslySetInnerHTML는 사용할 수 없다
  "react/no-danger": ["error"],
  // deprecated 된 속성은 사용할 수 없다
  "react/no-deprecated": ["error"],
  // children을 props으로 넘길 수 없다
  "react/no-children-prop": ["error"],
  // children이 없는 컴퍼넌트는 스스로 닫혀야 한다
  "react/self-closing-comp": ["error"],
  // findDOMNode 메소드는 사용할 수 없다
  "react/no-find-dom-node": ["error"],
  // ref로 string을 넘길 수 없다
  "react/no-string-refs": ["error"],
};

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @type {Config}
 */
module.exports = {
  // eslint 파서를 지정
  parser: "@typescript-eslint/parser",
  // 기반이 되는 rule
  extends: [
    'plugin:prettier/recommended',
    // react17 이상에 내장된 jsx-runtime의 사용을 react플러그인을 사용해 명시함
    "plugin:react/jsx-runtime",
  ],
  // 플러그인 목록
  plugins: [
    "react",
    "react-hooks"
  ],
  // 허용하는 전역 변수 목록을 명시한다
  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    es6: true,
    es2021: true,
    browser: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        ...reactRules,
        ...reactHookRules,
      },
    },
  ],
};
