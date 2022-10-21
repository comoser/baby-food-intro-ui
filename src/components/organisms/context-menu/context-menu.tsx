import { component$, QRL } from '@builder.io/qwik';
import { CrossIcon } from '~/components/atoms/icons/cross';
import NavList from '~/components/molecules/nav-list/nav-list';

type ContextMenuProps = {
  toggleContextMenu: QRL<() => boolean>;
};

export const navItems = [
  {
    href: '/',
    label: 'Dashboard',
  },
  {
    href: 'all-food-intros',
    label: 'All introductions',
  },
  {
    href: 'babies',
    label: 'My babies',
  },
  {
    href: 'profile',
    label: 'My profile',
  },
  {
    href: 'logout',
    label: 'Logout',
  },
];

export default component$((props: ContextMenuProps) => (
  <nav className="p-4 fixed z-10 top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-indigo-500 to-amber-600">
    <div>
      <a onclick$={props.toggleContextMenu}>
        <CrossIcon color="white" class="scale-150" />
      </a>
    </div>
    <NavList items={navItems} />
  </nav>
));
