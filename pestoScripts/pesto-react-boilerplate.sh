InstallEnzyme() {
  echo "\033[33m Install Enzyme \033[0m";
  yarn add -D enzyme enzyme-adapter-react-16 &&
  echo "import { configure } from 'enzyme';
        import Adapter from 'enzyme-adapter-react-16';
        configure({ adapter: new Adapter() });
" > src/setupTests.js
}

InstallRedux() {
  echo "\033[33m Install Redux \033[0m";
  yarn add redux react-redux

  if test "$1" = "y"
  then
    echo "\033[33m Install Redux DevTools \033[0m";
    yarn add -D redux-devtools-extension
  fi
}

InstallReactRouter() {
  echo "\033[33m Install React Router \033[0m";
  yarn add react-router
}

InstallEslint() {
  echo "\033[33m Install eslint \033[0m";
  yarn add eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react &&
  cp scripts/.eslintrc .eslintrc
}

read -p "Do you want to set up testing with enzyme?: [y/n]" enzyme;

read -p "Do you want to add Redux?: [y/n]" redux;

if test "$redux" = "y"
then
  read -p "Do you want to add redux devtools?: [y/n]" reduxDev;
fi

read -p "Do you want to add [React Router]?: [y/n]" router;

if test "$enzyme" = "y"
then
  InstallEnzyme
fi

if test "$redux" = "y"
then
  InstallRedux $reduxDev
fi

InstallEslint
