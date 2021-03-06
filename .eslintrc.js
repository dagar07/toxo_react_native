module.exports = {
  root: true,
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
  parser: "babel-eslint",
  rules: {
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "no-case-declarations": "off",
    "global-require": "off",
    "no-underscore-dangle": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "off"
  }
};
