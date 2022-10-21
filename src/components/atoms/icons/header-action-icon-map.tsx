import { PlusIcon } from '~/components/atoms/icons/plus';
import { IconProps } from '~/components/atoms/icons/icon-props';

export const HeaderActionIconName = {
  plus: 'plus',
};

export const HeaderActionIconMap = {
  [HeaderActionIconName.plus]: (props: IconProps) => <PlusIcon {...props} />,
};
