import { $, component$, useStore } from '@builder.io/qwik';
import { MenuIcon } from '~/components/atoms/icons/menu';
import ContextMenu from '~/components/organisms/context-menu/context-menu';
import HeaderActionContainer from '~/components/molecules/header-action-container/header-action-container';

export default component$(() => {
  const store = useStore({ isContextMenuOpen: false });

  const toggleContextMenu = $(
    () => (store.isContextMenuOpen = !store.isContextMenuOpen)
  );

  return (
    <header class="fixed left-0 right-0 p-4 flex flex-row justify-between bg-gradient-to-r from-indigo-500 to-amber-600">
      <div class="flex items-center">
        <a onclick$={toggleContextMenu}>
          <MenuIcon color="white" />
        </a>
      </div>
      <HeaderActionContainer />
      {store.isContextMenuOpen && (
        <ContextMenu toggleContextMenu={toggleContextMenu} />
      )}
    </header>
  );
});
