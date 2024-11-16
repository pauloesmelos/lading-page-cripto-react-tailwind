import React from 'react';
const hooks = {
    email: {
        message: "*Invalid e-mail",
        regexp: /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }
}
const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState("");

  const verify = (text) => {
    if(!hooks[type].regexp.test(text)) {
        setErro(hooks[type].message);
    }
    else if(text.length === 0) {
        setErro("*Ops, empty e-mail");
    }
    else setErro("");
  }
  const onChange = ({ target }) => {
    setValue(target.value);
    if(erro) {
        verify(value);
    }
  }
  const onBlur = () => {
    if(value.length === 0) {
        setErro("*Ops, empty e-mail");
    }
    else if(!hooks[type].regexp.test(value)) {
        setErro(hooks[type].message);
    }
    else {
        setErro("");
    }
  }

  return { value, setValue, erro, setErro, onChange, onBlur }
}

export default useForm;