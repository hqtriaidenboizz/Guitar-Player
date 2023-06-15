import {User, HelpCircle, LogOut} from 'iconoir-react-native';
import {DARKCOLORS} from './colors';
export const SettingItemData = [
  {
    title: 'Account',
    icon: <User width={30} height={30} color={DARKCOLORS.hightLightColor} />,
  },
  {
    title: 'About',
    icon: (
      <HelpCircle width={30} height={30} color={DARKCOLORS.hightLightColor} />
    ),
  },
  {
    title: 'Logout',
    icon: <LogOut width={30} height={30} color={DARKCOLORS.hightLightColor} />,
  },
];
