import React, { Fragment, FC, memo, useReducer, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useDebouncedEffect } from './CustomHook';
import { FormType } from '../../constants/Type';

const StyleH5 = styled.h5`
  color: red;
`;

const schema = yup.object().shape({
  name: yup.string().defined().notOneOf(['']),
  age: yup.number().defined().min(16),
  flavor: yup.mixed().oneOf(['grapefruit', 'lime', 'coconut', 'mango'] as const),
});

interface FormProps {
  form?: FormType;
  onHandleSubmit: (data: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (data: FormType) => void;
}

const Form: FC<FormProps> = ({
  onHandleSubmit,
  handleChange,
  form = { name: '', flavor: '', age: 1, isGoing: false },
}) => {
  console.log('Form is rendered!');

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
  const [multipleData, setMultipleData] = useReducer(
    (state: FormType, newState: FormType) => ({ ...state, ...newState }),
    form
  );

  useDebouncedEffect(
    () => {
      console.log(JSON.stringify(multipleData));
      handleChange(multipleData);
    },
    500,
    [multipleData]
  );

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    event.persist();
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setMultipleData({ [name]: value });
  }, []);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            ref={register({ required: true })}
            onChange={onChange}
            value={multipleData.name}
          ></input>
          <br />
          {errors.name && <StyleH5>{'Name is required! '}</StyleH5>}
        </label>
        <br />
        <label>
          Pick your favorite flavor: {multipleData.flavor}
          <select name="flavor" ref={register} value={multipleData.flavor} onChange={onChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />

        <label>
          Age:
          <input
            name="age"
            type="number"
            ref={register({ required: true })}
            value={multipleData.age}
            onChange={onChange}
          ></input>
          <br />
          {errors.age && multipleData && multipleData.age && multipleData.age < 16 && (
            <StyleH5>{'Age is large than 16!'}</StyleH5>
          )}
        </label>
        <br />
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            ref={register}
            checked={multipleData.isGoing}
            onChange={onChange}
          ></input>
        </label>
        <br />

        <label>
          <input type="file" name="uploadFile" ref={register}></input>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Fragment>
  );
};

export default memo(Form);
