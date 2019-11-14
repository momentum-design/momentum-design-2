const fs = require('fs');
const path = require('path');
const Axios = require('axios');

const createFiles = data => {
  data.map(component => {
    const file = path.resolve(
      __dirname,
      `./src/content/components/${component.name}.mdx`
    );

    const url = component.thumbnailImage;

    const content = `---
slug: ${component.name}
title: ${component.displayName}
thumbnail: components/${component.name}-thumbnail.png
---`;

    const image = path.resolve(
      __dirname,
      './src/images/components',
      `${component.name}-thumbnail.png`
    );
    const writer = fs.createWriteStream(image);

    if (url) {
      Axios({
        url,
        method: 'GET',
        responseType: 'stream',
      }).then(response => response.data.pipe(writer));
    }

    fs.writeFileSync(file, content);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  });
};

const data = [
  {
    id: 1318,
    name: 'accordion',
    displayName: 'Accordions',
    thumbnailImage: 'https://wp.collab-ui.com/media/Accordion_thumbnail.png',
    path: '/components/accordion',
    description: 'Accordions are useful.',
  },
  {
    id: 492,
    name: 'activity-button',
    displayName: 'Activity Buttons',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Activity-Button-thumbnail.png',
    path: '/components/activity-button',
    description:
      'Each of Webex’s features has its own activity. They help users understand the most common tools at a glance and are accessible anywhere in the app.',
  },
  {
    id: 1485,
    name: 'alert-banner',
    displayName: 'Alert Banner',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Alert-Banners_thumbnail.png',
    path: '/components/alert-banner',
    description:
      'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
  },
  {
    id: 1320,
    name: 'alert',
    displayName: 'Alerts',
    thumbnailImage: 'https://wp.collab-ui.com/media/Alerts_thumbnail.png',
    path: '/components/alert',
    description:
      'Alerts can notify the user about information, an event, an action, an error or a warning.',
  },
  {
    id: 1563,
    name: 'avatar',
    displayName: 'Avatars',
    thumbnailImage: 'https://wp.collab-ui.com/media/Avatars_thumbnail.png',
    path: '/components/avatar',
    description: 'Avatars represent the user behind them.',
  },
  {
    id: 1466,
    name: 'badge',
    displayName: 'Badges',
    thumbnailImage: 'https://wp.collab-ui.com/media/Badges_thumbnail.png',
    path: '/components/badge',
    description:
      'Badges notify users when there is a pending notification that they have not yet acted upon.',
  },
  {
    id: 1493,
    name: 'breadcrumbs',
    displayName: 'Breadcrumbs',
    thumbnailImage: 'https://wp.collab-ui.com/media/Breadcrumb_thumbnail.png',
    path: '/components/breadcrumbs',
    description:
      "Breadcrumbs represent the user's location within the site informational architecture.",
  },
  {
    id: 1614,
    name: 'button-group',
    displayName: 'Button Group',
    thumbnailImage: 'https://wp.collab-ui.com/media/Button-Group_thumbnail.png',
    path: '/components/button-group',
    description: '',
  },
  {
    id: 299,
    name: 'button',
    displayName: 'Buttons',
    thumbnailImage: 'https://wp.collab-ui.com/media/Buttons_thumbnail.png',
    path: '/components/button',
    description:
      'Buttons communicate the action that will occur when users interact with them. ',
  },
  {
    id: 1325,
    name: 'alert-call',
    displayName: 'Call Alerts',
    thumbnailImage: 'https://wp.collab-ui.com/media/Call-Alerts_thumbnail.png',
    path: '/components/alert-call',
    description: '',
  },
  {
    id: 494,
    name: 'call-control',
    displayName: 'Call Control Buttons',
    thumbnailImage: 'https://wp.collab-ui.com/media/Call-Control_thumbnail.png',
    path: '/components/call-control',
    description: 'Navigate easily inside the call.',
  },
  {
    id: 2825,
    name: 'cards',
    displayName: 'Cards',
    thumbnailImage: false,
    path: '/components/cards',
    description:
      'Cards are containers with a slight elevation that display information like statistical data or product descriptions. Cards are extremely versatile and vary greatly depending on their content. ',
  },
  {
    id: 1479,
    name: 'checkbox',
    displayName: 'Checkbox',
    thumbnailImage: 'https://wp.collab-ui.com/media/Checkbox_thumbnail.png',
    path: '/components/checkbox',
    description:
      'Checkboxes allow the user to select multiple options from a set or list.',
  },
  {
    id: 1700,
    name: 'coachmark',
    displayName: 'Coachmark',
    thumbnailImage: 'https://wp.collab-ui.com/media/Coachmark_thumbnail.png',
    path: '/components/coachmark',
    description:
      'Coachmarks provide visual direction pointing at exact steps on how to navigate a user through a website, application, or a new design feature. ',
  },
  {
    id: 1551,
    name: 'combo-box',
    displayName: 'Combo Box',
    thumbnailImage: 'https://wp.collab-ui.com/media/Combo-Box_thumbnail.png',
    path: '/components/combo-box',
    description:
      'Combo boxes (type-aheads) allow users to type in their input and select the result(s) from the dropdown list.',
  },
  {
    id: 3376,
    name: 'content-filter',
    displayName: 'Content Filter',
    thumbnailImage: false,
    path: '/components/content-filter',
    description:
      'Enables users to filter through information to get what they need quickly.',
  },
  {
    id: 1622,
    name: 'data-table',
    displayName: 'Data Tables',
    thumbnailImage: 'https://wp.collab-ui.com/media/table-featured1a.png',
    path: '/components/data-table',
    description:
      'Used to coherently display data in order to facilitate quick analysis and pattern recognition among multiple variables.',
  },
  {
    id: 1997,
    name: 'date-time-picker',
    displayName: 'Date and Time Picker',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Date-Time-Picker_thumbnail-1.png',
    path: '/components/date-time-picker',
    description:
      'Date time pickers allow users to select a start and end time.',
  },
  {
    id: 1314,
    name: 'date-picker',
    displayName: 'Date Picker',
    thumbnailImage: 'https://wp.collab-ui.com/media/Date-Picker_thumbnail.png',
    path: '/components/date-picker',
    description:
      'Date pickers allow users to choose a date from a dropdown-style calendar.',
  },
  {
    id: 1625,
    name: 'date-range-picker',
    displayName: 'Date Range Picker',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Date-Range-Picker_thumbnail.png',
    path: '/components/date-range-picker',
    description:
      'Date range pickers allow users to select a start and end date. ',
  },
  {
    id: 1522,
    name: 'dialog',
    displayName: 'Dialog',
    thumbnailImage: 'https://wp.collab-ui.com/media/Dialog_thumbnail.png',
    path: '/components/dialog',
    description:
      'Dialogs require a response from a user. They’re mostly platform specific and vary in style and type.',
  },
  {
    id: 1603,
    name: 'drawer',
    displayName: 'Drawers',
    thumbnailImage: false,
    path: '/components/drawer',
    description: '',
  },
  {
    id: 1316,
    name: 'editable-textfield',
    displayName: 'Editable Textfield',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Editable-Textfield_thumbnail.png',
    path: '/components/editable-textfield',
    description: '',
  },
  {
    id: 1560,
    name: 'input-phone-number',
    displayName: 'Input (Phone Numbers)',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Input-Phone-Numbers_thumbnail-1.png',
    path: '/components/input-phone-number',
    description:
      'Phone number inputs contain area codes and specific sets of numbers representing users of any country.',
  },
  {
    id: 1400,
    name: 'input',
    displayName: 'Inputs',
    thumbnailImage: 'https://wp.collab-ui.com/media/Input_thumbnail.png',
    path: '/components/input',
    description:
      'Text inputs allow people to enter any combination of letters, numbers or symbols of their choosing (unless otherwise restricted).',
  },
  {
    id: 1630,
    name: 'layout-grid',
    displayName: 'Layouts',
    thumbnailImage: 'https://wp.collab-ui.com/media/Layout-Grid_thumbnail.png',
    path: '/components/layout-grid',
    description:
      'A general overview of the purposes and capabilities of our most used design patterns.',
  },
  {
    id: 1632,
    name: 'lightbox',
    displayName: 'Lightbox',
    thumbnailImage: 'https://wp.collab-ui.com/media/Lightbox_thumbnail.png',
    path: '/components/lightbox',
    description: '',
  },
  {
    id: 500,
    name: 'link',
    displayName: 'Links',
    thumbnailImage: 'https://wp.collab-ui.com/media/Links_thumbnail.png',
    path: '/components/link',
    description:
      'Links are a means to navigate between pages or page anchors within a website or application.',
  },
  {
    id: 1655,
    name: 'list',
    displayName: 'Lists',
    thumbnailImage: 'https://wp.collab-ui.com/media/Lists_thumbnail.png',
    path: '/components/list',
    description: 'A collection of items or options for users to select from.',
  },
  {
    id: 1567,
    name: 'loader',
    displayName: 'Loader',
    thumbnailImage: 'https://wp.collab-ui.com/media/Loader_thumbnail.png',
    path: '/components/loader',
    description:
      'Loaders are used when retrieving data or performing slow computations, and help to notify users that loading is underway.',
  },
  {
    id: 1323,
    name: 'alert-meeting',
    displayName: 'Meeting Alerts',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Alert-Meetings_thumbnail.png',
    path: '/components/alert-meeting',
    description:
      'Meeting alerts notify users of an upcoming meeting. These can be dismissed, snoozed or sometimes allow the user to join a meeting directly.',
  },
  {
    id: 1439,
    name: 'menu',
    displayName: 'Menu',
    thumbnailImage: 'https://wp.collab-ui.com/media/Menu_thumbnail-1.png',
    path: '/components/menu',
    description:
      'Menus are shown when a dropdown box is clicked to display more options. Only one option may be selected at a time. ',
  },
  {
    id: 1379,
    name: 'modal',
    displayName: 'Modal',
    thumbnailImage: 'https://wp.collab-ui.com/media/Modal_thumbnail.png',
    path: '/components/modal',
    description:
      'Modals communicate information through an interactive secondary window.',
  },
  {
    id: 2617,
    name: 'page-header',
    displayName: 'Page Header',
    thumbnailImage: false,
    path: '/components/page-header',
    description: '',
  },
  {
    id: 1434,
    name: 'pagination',
    displayName: 'Pagination',
    thumbnailImage: 'https://wp.collab-ui.com/media/Pagination_thumbnail.png',
    path: '/components/pagination',
    description:
      'Pagination is used to toggle between several pages of listed content. ',
  },
  {
    id: 2334,
    name: 'panels',
    displayName: 'Panels',
    thumbnailImage: false,
    path: '/components/panels',
    description: '',
  },
  {
    id: 1513,
    name: 'popover',
    displayName: 'Popover',
    thumbnailImage: 'https://wp.collab-ui.com/media/Popover_thumbnail.png',
    path: '/components/popover',
    description:
      'Popovers are used to provide contextual information about the clicked component.',
  },
  {
    id: 1665,
    name: 'progress',
    displayName: 'Progress Bar',
    thumbnailImage: 'https://wp.collab-ui.com/media/Progress_thumbnail.png',
    path: '/components/progress',
    description:
      'A visual indicator to show progress of a determinate action/process.',
  },
  {
    id: 1444,
    name: 'radio',
    displayName: 'Radio Button',
    thumbnailImage: 'https://wp.collab-ui.com/media/Radio_thumbnail.png',
    path: '/components/radio',
    description:
      'Radio buttons allow the user to choose one option from a set.',
  },
  {
    id: 2322,
    name: 'right-rail',
    displayName: 'Right Rail',
    thumbnailImage: 'https://wp.collab-ui.com/media/Right-Rail_thumbnail.png',
    path: '/components/right-rail',
    description: '',
  },
  {
    id: 1670,
    name: 'input-search',
    displayName: 'Search Input',
    thumbnailImage: false,
    path: '/components/input-search',
    description: '',
  },
  {
    id: 1672,
    name: 'select',
    displayName: 'Select',
    thumbnailImage: 'https://wp.collab-ui.com/media/Selects_thumbnail-1.png',
    path: '/components/select',
    description:
      'Selects allow users to select result(s) from the dropdown list. Sometimes users can type in their input in the dropdown box to further specify the results.',
  },
  {
    id: 1676,
    name: 'sidebar',
    displayName: 'Sidebar',
    thumbnailImage: 'https://wp.collab-ui.com/media/Side-Nav_thumbnail.png',
    path: '/components/sidebar',
    description: '',
  },
  {
    id: 1674,
    name: 'slider',
    displayName: 'Slider',
    thumbnailImage: 'https://wp.collab-ui.com/media/Slider_thumbnail.png',
    path: '/components/slider',
    description: 'Sliders allow users to select option(s) within a range.',
  },
  {
    id: 1679,
    name: 'social-list',
    displayName: 'Social-List',
    thumbnailImage: 'https://wp.collab-ui.com/media/Social-List_thumbnail.png',
    path: '/components/social-list',
    description: '',
  },
  {
    id: 1681,
    name: 'tabs',
    displayName: 'Tabs',
    thumbnailImage: 'https://wp.collab-ui.com/media/Tabs_thumbnail.png',
    path: '/components/tabs',
    description: '',
  },
  {
    id: 1683,
    name: 'time-picker',
    displayName: 'Time Picker',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Time-Picker_thumbnail-1.png',
    path: '/components/time-picker',
    description:
      'Time pickers allow users to select a single or a range of dates and times.',
  },
  {
    id: 1449,
    name: 'toggle-switch',
    displayName: 'Toggle Switch',
    thumbnailImage:
      'https://wp.collab-ui.com/media/Toggle-Switch_thumbnail.png',
    path: '/components/toggle-switch',
    description:
      'Toggle-switches allow the user to change a state from off to on (or vice-versa).',
  },
  {
    id: 1418,
    name: 'tooltip',
    displayName: 'Tooltips',
    thumbnailImage: 'https://wp.collab-ui.com/media/Tooltip_thumbnail.png',
    path: '/components/tooltip',
    description:
      'Tooltips provide concise and helpful supplemental information to users when needed. They are often used with icons and controls that don’t have a label.',
  },
  {
    id: 1687,
    name: 'top-bar',
    displayName: 'Top-Bar',
    thumbnailImage: 'https://wp.collab-ui.com/media/Top-Bar_thumbnail.png',
    path: '/components/top-bar',
    description: '',
  },
];

createFiles(data);
