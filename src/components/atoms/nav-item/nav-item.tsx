import { component$ } from '@builder.io/qwik';

export type NavItemProps = {
  href: string;
  label: string;
};

export default component$((props: NavItemProps) => (
  <li className="py-3 text-5xl text-white">
    <a href={props.href}>{props.label}</a>
  </li>
));
