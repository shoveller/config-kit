/**
 * @typedef {import('eslint').Linter.RulesRecord} Rules
 */

/**
 *
 * @type {Rules}
 */
const functionalRules = {
  // let은 사용할 수 없다
  "functional/no-let": ["error"],
  // 객체와 배열은 immutable이다.
  "functional/immutable-data": ["error"],
  // 반복문은 사용할 수 없다
  "functional/no-loop-statement": ["error"],
  // rest parameter 사용을 제한한다
  "functional/functional-parameters": [
    "error",
    {
      allowRestParameter: false,
      allowArgumentsKeyword: false,
      enforceParameterCount: false,
    },
  ],
};

/**
 *
 * @type {Rules}
 */
const eslintRules = {
  // var는 사용할 수 없다
  "no-var": ["error"],
  // 띄워쓰기는 스페이스문자 2개
  indent: ["error", 2],
  // Function.prototype.apply() 를 사용할 때는 spread 연산자를 사용해야 한다
  "prefer-spread": ["error"],
  // 선언한 표현식은 반드시 사용해야 한다
  "no-unused-expressions": ["error"],
  // Function 객체에 new 연산자를 사용할 수 없다
  "no-new-func": ["error"],
  // goto 구문의 label을 사용할 수 없다
  "no-labels": ["error"],
  // 프로토타입을 동적으로 확장할 수 없다
  "no-extend-native": ["error"],
  // eval을 사용할 수 없다
  "no-eval": ["error"],
  // 생성자 함수는 return을 할 수 없다
  "no-constructor-return": ["error"],
  // if 문에서 return을 하면 else 문에서 return을 할 수 없다
  "no-else-return": ["error"],
  // 안전하지 못한 옵셔널 체이닝을 할 수 없다
  "no-unsafe-optional-chaining": ["error"],
  // 불필요한 반복문은 사용할 수 없다
  "no-unreachable-loop": ["error"],
  // 도달하지 못하는 코드는 사용할 수 없다
  "no-unreachable": ["error"],
  // import한 심볼은 읽기 전용이다
  "no-import-assign": ["error"],
  // 파라미터는 읽기 전용이다
  "no-param-reassign": ["error"],
  // 호이스팅을 허용하지 않는다
  "no-use-before-define": ["error"],
  // if ~ else 중첩은 허용하지 않는다
  "max-depth": [
    "error",
    {
      max: 1,
    },
  ],
  // return 문 이전에는 반드시 빈 줄이 있어야 한다
  "padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      prev: "*",
      next: "return",
    },
  ],
  // 삼항연산자를 허용하지 않는다
  "no-unneeded-ternary": [
    "error",
    {
      defaultAssignment: false,
    },
  ],
  // 문자열 선언에는 홑따옴표를 사용한다
  quotes: [
    "error",
    "single",
    {
      avoidEscape: true,
    },
  ],
  // computed property 앞뒤에는 공백이 있어야 한다.
  "computed-property-spacing": [
    "error",
    "never",
    {
      enforceForClassMembers: true,
    },
  ],
  // 중첩된 object 앞뒤에는 공백이 있어야 한다.
  "object-curly-spacing": ["error", "always"],
  // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
  "array-bracket-spacing": ["error", "never"],
  // 세미콜론 사용금지
  // prettiier를 사용할 것이므로 명시적으로 끔
  semi: ["off"],
  // import문은 정렬되어 있어야 한다
  // eslint-plugin-import의 룰을 사용할 것이므로 명시적으로 끔
  "sort-imports": ["off"],
  // 중괄호의 스타일을 통일
  "brace-style": ["error"],
  // statemnet는 반드시 중괄호로 감싸야 하고 1줄 이상으로 작성해야 한다
  curly: ["error", "multi-line", "consistent"],
  // debugger 는 사용을 권장하지 않는다
  "no-debugger": ["warn"],
  // no-alert 룰과 충돌하므로 끔
  "no-restricted-globals": ["off"],
  // alert, confirm, prompt 는 사용을 권장하지 않는다
  "no-alert": ["warn"],
  // console.log 는 사용할 수 없다
  "no-console": [
    "warn",
    {
      allow: ["warn", "error"],
    },
  ],
  // jsx에는 쌍 따옴표를 사용해야 한다.
  "jsx-quotes": ["error", "prefer-double"],
  // 문자열 연결에는 템플릿 문자열을 사용해야 한다
  "prefer-template": ["error"],
  // 객체의 프로퍼티 이름은 필요할 때만 따옴표로 감싸야 한다
  "quote-props": ["error", "as-needed"]
};

/**
 *
 * @type {Rules}
 */
const tslintRules = {
  // 명시적으로 any를 사용할 수 없다
  "@typescript-eslint/no-explicit-any": ["error"],
  // 선언한 변수는 반드시 사용해야 한다
  // eslint-plugin-unused-imports 플로그인과 충돌하므로 끔
  "@typescript-eslint/no-unused-vars": ["off"],
  // 숫자와 문자열에 + 연산자를 사용할 수 없다
  // tsconfig 설정을 요구하므로 삭제함
  // '@typescript-eslint/restrict-plus-operands': ['error'],
  // 대괄호 연산자를 연속해서 호출할 수 없다
  // tsconfig 설정을 요구하므로 삭제함
  // '@typescript-eslint/no-unsafe-member-access': ['error'],
  // this의 참조를 변수에 할당할 수 없다
  "@typescript-eslint/no-this-alias": ["error"],
  // 빈 인터페이스는 선언할 수 없다
  "@typescript-eslint/no-empty-interface": ["error"],
  // 선언 후에 사용해야 한다
  "@typescript-eslint/no-use-before-define": ["error"],
};

/**
 *
 * @type {Rules}
 */
const unusedImportRules = {
  // 사용하지 않는 import 구문은 삭제한다
  "unused-imports/no-unused-imports": ["error"],
  // 사용하지 않는 변수는 삭제한다
  "unused-imports/no-unused-vars": ["error"],
};

/**
 *
 * @type {Rules}
 */
const importRules = {
  // 스스로를 import 할 수 없다
  "import/no-self-import": ["error"],
  // dynamic import에는 반드시 chunk name이 있어야 한다
  "import/dynamic-import-chunkname": ["error"],
  // 익명으로 default export는 할 수 없다
  "import/no-anonymous-default-export": ["error"],
  // import문 다음 1줄은 공백이어야 한다
  "import/newline-after-import": ["error", {count: 1}],
  // import문은 정렬되어 있어야 한다
  "import/order": [
    "error",
    {
      groups: ["builtin", "external", ["parent", "sibling"], "index"],
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
      "newlines-between": "always",
    },
  ],
  // 출처가 같은 곳에서 중복 import를 할 수 없다
  "import/no-duplicates": ["error"],
  // commonjs 문법을 사용할 수 없다
  "import/no-commonjs": ["error"],
  // 불필요한 path segment를 사용할 수 없다
  "import/no-useless-path-segments": ["error"],
};

/**.
 * Eslint-plugin-jsdoc의 룰 모음
 *
 * @type {Rules}
 */
const jsdocRules = {
  "jsdoc/check-alignment": ["error"],
  "jsdoc/check-indentation": ["error"],
  "jsdoc/check-line-alignment": ["error"],
  "jsdoc/check-param-names": ["error"],
  "jsdoc/check-property-names": ["error"],
  "jsdoc/check-syntax": ["error"],
  "jsdoc/check-tag-names": ["error"],
  "jsdoc/check-types": ["error"],
  "jsdoc/check-values": ["error"],
  "jsdoc/empty-tags": ["error"],
  "jsdoc/implements-on-classes": ["error"],
  "jsdoc/multiline-blocks": ["error"],
  "jsdoc/no-bad-blocks": ["warn"],
  "jsdoc/no-defaults": ["warn"],
  "jsdoc/no-missing-syntax": ["off"],
  "jsdoc/no-multi-asterisks": ["error"],
  "jsdoc/no-restricted-syntax": ["warn"],
  "jsdoc/no-types": ["warn"],
  "jsdoc/no-undefined-types": ["error"],
  "jsdoc/require-asterisk-prefix": ["warn"],
  "jsdoc/require-example": ["off"],
  "jsdoc/require-file-overview": ["off"],
  "jsdoc/require-jsdoc": ["error"],
  "jsdoc/require-param": ["error"],
  "jsdoc/require-param-name": ["error"],
  "jsdoc/require-param-type": ["error"],
  "jsdoc/require-property": ["error"],
  "jsdoc/require-property-name": ["error"],
  "jsdoc/require-property-type": ["error"],
  "jsdoc/require-returns": ["error"],
  "jsdoc/require-returns-check": ["error"],
  "jsdoc/require-returns-type": ["error"],
  "jsdoc/require-throws": ["warn"],
  "jsdoc/require-yields": ["error"],
  "jsdoc/require-yields-check": ["error"],
  "jsdoc/tag-lines": ["error"],
  "jsdoc/valid-types": ["error"],
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
    // import 플러그인을 활성화함
    "plugin:import/typescript",
  ],
  // 플러그인 목록
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "functional",
    "unused-imports",
    "eslint-plugin-import",
    "jsdoc",
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
      files: ["**/*.ts?(x)", "**/*.vue"],
      rules: {
        ...eslintRules,
        ...tslintRules,
        ...functionalRules,
        ...importRules,
        ...unusedImportRules,
      },
    },
    {
      files: ["**/*.js?(x)", "**/*.mjs", "**/*.cjs"],
      rules: {
        ...jsdocRules,
      },
    },
  ],
};
