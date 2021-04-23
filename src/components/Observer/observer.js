let prokladka = () => {};

const someFunc = () => {
  return <div>subscribe</div>;
};

const subdcribe = (observer) => {
  prokladka = observer();
};

subdcribe(someFunc);

const Component = () => {
  return <dvi>{prokladka}</dvi>;
};

export default Component;
