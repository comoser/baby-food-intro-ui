import { component$, Slot } from '@builder.io/qwik';

type TextProps = {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
};

export default component$(function (
  props: TextProps = {
    fontWeight: 'font-medium',
    fontSize: 'text-base',
    color: 'text-gray-800',
  }
) {
  return (
    <p className={`${props.fontWeight} ${props.fontSize} ${props.color}`}>
      <Slot />
    </p>
  );
});
