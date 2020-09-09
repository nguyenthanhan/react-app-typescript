import React, { FC, memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { RefTextEx, Line, Form, Counter, RefTextEx2 } from 'app/components';
import { FormType } from 'app/constants/Type';

export interface MainProps {
  title: string;
}

const StyledH2 = styled.h2`
  text-align: center;
`;

const Main: FC<MainProps> = ({ title }) => {
  console.log('Main is rendered!');
  const [value, setValue] = useState<FormType>({ name: '', flavor: '', age: 1, isGoing: false });

  const handleChange = useCallback((data: FormType) => {
    setValue(data);
  }, []);

  const handleSubmit = useCallback((data: React.FormEvent<HTMLFormElement>) => {
    console.log('You submitted', data);
  }, []);

  return (
    <main>
      <StyledH2>{title}</StyledH2>
      <Line horizontal />
      <Counter></Counter>

      <Line horizontal />
      <RefTextEx></RefTextEx>
      <br />

      <Line horizontal />
      <RefTextEx2></RefTextEx2>
      <br />
      <Form form={value} handleChange={handleChange} onHandleSubmit={handleSubmit}></Form>
    </main>
  );
};

export default memo(Main);
