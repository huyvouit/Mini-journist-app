import { useState } from 'react';

export default () => {
  const [value, setValue] = useState({name:"",description:""});

  return {
    value,
    onChangeOne: event => {
      setValue({...value,name: event.target.value});
    },
    onChangeTwo: event => {
        setValue({...value,description: event.target.value});
    },
    reset: () => setValue({name:"",description:""})
  };
};
