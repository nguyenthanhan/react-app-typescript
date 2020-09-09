import React, { memo, useRef, useCallback } from 'react';
import { debounce } from 'lodash';

interface RefTextExProps {}

const RefTextEx: React.FC<RefTextExProps> = () => {
  console.log('RefTextEx is rendered!');

  const myRef = useRef<any>(null);

  const debounceOnChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('debounceOnChange', event.target.value);
    }, 500),
    []
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    debounceOnChange(event);
  };

  const handleClick = useCallback(() => {
    myRef.current.focus();
  }, []);

  return (
    <main>
      <h3>Use refs to focus input (fc)</h3>
      <input name="email" onChange={onChange} ref={myRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </main>
  );
};

export default memo(RefTextEx);
