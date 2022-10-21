import { component$ } from '@builder.io/qwik';
import NavItem, { NavItemProps } from '~/components/atoms/nav-item/nav-item';

type NavListProps = {
  items: NavItemProps[];
};

export default component$((props: NavListProps) => (
  <ul className="pt-10 flex flex-col">
    {props.items.map((item) => (
      <NavItem href={item.href} label={item.label} />
    ))}
  </ul>
));
