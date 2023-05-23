import IconInbox from '@icons/IconInbox.vue';
import IconArchive from '@icons/IconArchive.vue';
const menuData = [
  {
    id: 1,
    name: 'Inbox',
    icon: IconInbox,
    route: '/',
    type: 1,
  },
  {
    id: 2,
    name: 'Archive',
    icon: IconArchive,
    route: '/Archive',
    type: 2,
  },
];
export default menuData;