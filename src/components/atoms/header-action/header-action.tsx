import { component$ } from '@builder.io/qwik';
import { HeaderActionIconMap } from '~/components/atoms/icons/header-action-icon-map';
import { HeaderAction } from '~/components/templates/main-layout/main-layout';

type HeaderActionProps = HeaderAction;

export default component$((props: HeaderActionProps) => (
  <div class="ml-4">
    <a href={props.href}>
      {HeaderActionIconMap[props.iconName]({ color: 'white' })}
    </a>
  </div>
));
