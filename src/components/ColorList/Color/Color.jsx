import { useEffect, useRef } from 'react';
import s from './Color.module.scss';
import cn from 'classnames';

export const Color = ({ color, check }) => {
  // const colorRef = useRef(null);
  // useEffect(() => {
  //   colorRef.current.style.setProperty('--data-color', color)
  // }, [color])
  // ref={colorRef}
  return (
    <li style={{'--data-color': color}} className={cn(s.color, check ? s.colorCheck : '')}></li>
  );
};
