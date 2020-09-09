import React, { memo, useRef, useEffect } from 'react';
// import { debounce } from "lodash";
import { TweenMax } from 'gsap';

export interface RefTextEx2Props {}
const RefTextEx2: React.FC<RefTextEx2Props> = () => {
  console.log('RefTextEx2 is rendered!');

  const circle = useRef(null);

  useEffect(() => {
    TweenMax.fromTo([circle.current], 0.5, { y: 18 }, { y: -18, yoyo: true, repeat: -1 });
    TweenMax.fromTo([circle.current], 0.5, { x: 0 }, { x: 10, yoyo: true, repeat: -1 });
  }, []);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <svg viewBox="0 0 180 75" width="90" height="75">
        <circle ref={circle} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
      </svg>
    </div>
  );
};

export default memo(RefTextEx2);
