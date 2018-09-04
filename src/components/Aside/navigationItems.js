const navigationItems = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    to: '/',
    className: 'dropdown-trigger collapsible-header waves-effect waves-light',
    subNavigationItems: [
      {
        label: 'Assignments',
        icon: 'assignment',
        to: '/assignments',
      },
      {
        label: 'Study-Sync',
        icon: 'school',
        to: '/studySync',
      },
      {
        label: 'Events',
        icon: 'event',
        to: '/events',
      },
      {
        label: 'Attendance',
        icon: 'date_range',
        to: '/attendance',
      },
    ],
  },
  {
    label: 'Profile',
    icon: 'account_box',
    to: '/profile',
    className: 'dropdown-trigger collapsible-header waves-effect waves-light',
    subNavigationItems: [
      {
        label: 'CV',
        icon: 'insert_drive_file',
        to: '/cv',
      },
      {
        label: 'Projects',
        icon: 'developer_mode',
        to: '/projects',
      },
      {
        label: 'Skills',
        icon: 'folder_special',
        to: '/skills',
      },
    ],
  },
];
export default navigationItems;
