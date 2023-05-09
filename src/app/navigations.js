export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'MASTER DATA', type: 'label' },
  {
    name: 'Industry Master',
    icon: 'storageicon',
    children: [
      { name: 'Airline', path: '/Tabledata', iconText: 'T' },
      { name: 'Country', iconText: 'SU', path: '/session/signup' },
      { name: 'Airport/Station Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Curency', iconText: '404', path: '/session/404' },
      { name: 'Exchange Rates', iconText: '404', path: '/session/404' },

    ],
  },
  {
    name: 'Reference Master',
    icon: 'inbox',
    children: [
      { name: 'Vendor', iconText: 'SI', path: '/session' },
      { name: 'Aircraft', iconText: 'SU', path: '/session' },
      { name: 'Services ', iconText: 'FP', path: '/session' },
      { name: 'Parameters', iconText: '404', path: '/session/' },
      { name: 'Sundry Master', iconText: '404', path: '/session/' },
      { name: 'Flight Type', iconText: '404', path: '/session/' },
      { name: 'Spot Rates', iconText: '404', path: '/session/' },
      { name: 'Tax Master', iconText: '404', path: '/session/' },

    ],
  },
  
 /* { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
    ],
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },*/
  /*{
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/',
  },
*/
  { label: ' TRANSACTION', type: 'label' },
  {
    name: 'Contracts',
    icon: 'savings',
    children: [
      { name: 'Fuel', iconText: 'SI', path: '/session/signin' },
      { name: 'ATC', iconText: 'SU', path: '/session/signup' },
      { name: 'Airport', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Ground Handling', iconText: '404', path: '/session/404' },
    ],
  },
  {
    name: 'Operations',
    icon: 'dataset',
    children: [
      { name: 'Flight Data', icon:'flight',iconText: 'SI', path: '/session/signin' },

         ],
  },
  {
    name: 'Pages',
    icon: 'dataset',
    children: [
      { name: 'Flight Data', icon:'flight',iconText: 'SI', path: '/app/pages/AirlinePages' },

         ],
  },
  {
    name: 'Invoices',
    icon: 'receipt',
    children: [
      { name: 'Search', icon:'search',iconText: 'SI', path: '/session/signin' },
      { name: 'Manual Capture',icon:'add', iconText: 'SI', path: '/session/signin' },
         ],
  },
  {
    name: 'Accruals',
    icon: 'device_hub',
    children: [
      { name: 'Setup',iconText: 'SI', path: '/session/signin' },
      { name: 'Generation', iconText: 'SI', path: '/session/signin' },
      { name: 'Closure', iconText: 'SI', path: '/session/signin' },
    
    ],
  },
  {
    name: 'Accounting',
    icon: 'account_balance_wallet',
    children: [
      { name: 'Chart of Accounts',iconText: 'SI', path: '/session/signin' },
      { name: 'Valid Accounts', iconText: 'SI', path: '/session/signin' },
      { name: 'Calendar', iconText: 'SI', path: '/session/signin' },
    ],
  },
  {
    name: 'Workflows',
    icon: 'timeline',
    children: [
      { name: 'Dashboard', icon:'dashboard',iconText: 'SI', path: '/session/signin' },
    ],
  },
  {
    name: 'Reconcilation',
    icon: 'settings',
    children: [
      { name: 'Setup',iconText: 'SI', path: '/session/signin' },
    ],
  },
  {
    name: 'SIS Complicance',
    icon: 'business',
    children: [
      { name: 'ISXML Tracking', icon:'dashboard',iconText: 'SI', path: '/session/signin' },
    ],
  },{
    name: 'Budget',
    icon: 'savings',
    children: [
      { name: 'Setup',iconText: 'SI', path: '/session/signin' },
      { name: 'Variance Analysis',iconText: 'SI', path: '/session/signin' },

    ],
  },
  
];
