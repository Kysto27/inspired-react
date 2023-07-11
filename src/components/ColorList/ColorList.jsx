import { useRef } from 'react';
import { Color } from './Color/Color';
import s from './ColorList.module.scss';
import { useSelector } from 'react-redux';

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector((state) => state.colors);
  return (
    <ul className={s.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find((color) => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
};
