const headingMenu = {
    order: 0,
    name: 'MENU',
    heading: true
};

const Dashboard = {
    name: 'Dashboard',
    link: '/dashboard',
    iconclass: 'ion-ios-speedometer-outline',
    order: 1
};
/*
const Widgets = {
    name: 'Widgets',
    link: '/widgets',
    order: 2,
    iconclass: 'ion-ios-box-outline',
    label: {
        value: '!',
        classname: 'badge-rounded bg-primary'
    }
};
*/
const headingComponents = {
    order: 2.1,
    name: 'CONFIG',
    heading: true
};

const Elements = {
    name: 'Service Set Up',
    link: '/elements',
    iconclass: 'ion-ios-settings',
    order: 3,
    subitems: [{
        name: 'Categories',
        link: '/elements/bootstrapui'
    }, {
        name: 'Category Items',
        link: '/elements/modals'
    }, {
        name: 'Sub Categories Items',
        link: '/elements/toaster'
    }
               /*, {
        name: 'Sweet-alert',
        link: '/elements/sweetalert'
    }, {
        name: 'Spinners',
        link: '/elements/spinners'
    }, {
        name: 'Nestable',
        link: '/elements/nestable'
    }, {
        name: 'Grid',
        link: '/elements/grid'
    }, {
        name: 'Grid Masonry',
        link: '/elements/gridmasonry'
    }, {
        name: 'Typography',
        link: '/elements/typography'
    }, {
        name: 'Icons',
        link: '/elements/icons'
    }, {
        name: 'Utilities',
        link: '/elements/utilities'
    }, {
        name: 'Colors',
        link: '/elements/colors'
    }*/
              ]
};

const headingComponentsTable = {
    order: 3.1,
    name: 'CLIENT SERVICE',
    heading: true
};

const Forms = {
    name: 'My Client Details',
    link: '/forms',
    iconclass: 'ion-ios-gear-outline',
    order: 4,
    subitems: [{
        name: 'Add Client',
        link: '/forms/standard'
    }, {
        name: 'Edit Client',
        link: '/forms/advanced'
    }/*, {
        name: 'Dropzone',
        link: '/forms/dropzone'
    }, {
        name: 'Summernote',
        link: '/forms/summernote'
    }, {
        name: 'Wizard Steps',
        link: '/forms/wizard'
    }, {
        name: 'Typeahead',
        link: '/forms/typeahead'
    }*/]
};


const headingComponentsTablel = {
    order: 4.1,
    name: 'BOOKINGS',
    heading: true
};
const Tables = {
    name: 'My Bookings',
    link: 'tables',
    order: 5,
    iconclass: 'ion-ios-list-outline',
    subitems: [{
        name: 'Upcoming Bookings',
        link: '/tables/classic'
    }, {
        name: 'Booking History',
        link: '/tables/responsive'
    }, {
        name: 'Add Booking',
        link: '/tables/datatables'
    }, {
        name: 'Edit Booking',
        link: '/tables/ngxdatatable'
    }]
};
/*
const Charts = {
    name: 'Charts',
    link: '/charts',
    iconclass: 'ion-ios-pulse',
    order: 6,
    subitems: [{
        name: 'Flot',
        link: '/charts/flot'
    }, {
        name: 'Peity',
        link: '/charts/peity'
    }, {
        name: 'Radial',
        link: '/charts/radial'
    }]
};

const Maps = {
    name: 'Maps',
    link: 'maps',
    iconclass: 'ion-ios-location-outline',
    order: 7,
    subitems: [{
        name: 'Google Maps',
        link: '/maps/google'
    }, {
        name: 'Vector Maps',
        link: '/maps/vector'
    }]
};
*/
const headingMore = {
    order: 7.1,
    name: 'MORE',
    heading: true
};

const User = {
    name: 'User',
    link: 'user',
    order: 8,
    iconclass: 'ion-ios-person-outline',
    subitems: [{
        name: 'Signin',
        link: '/signin'
    }, {
        name: 'Signup',
        link: '/signup'
    }, {
        name: 'Lock',
        link: '/lock'
    }, {
        name: 'Recover',
        link: '/recover'
    }]
};

const Pages = {
    name: 'Pages',
    link: 'pages',
    order: 9,
    iconclass: 'ion-ios-keypad-outline',
    subitems: [{
        name: 'Forum',
        link: '/pages/forum'
    }, {
        name: 'Calendar',
        link: '/pages/calendar'
    }, {
        name: 'Timeline',
        link: '/pages/timeline'
    }, {
        name: 'Invoice',
        link: '/pages/invoice'
    }, {
        name: 'FullMap',
        link: '/pages/fullmap'
    }, {
        name: 'Pricing',
        link: '/pages/pricing'
    }, {
        name: 'People',
        link: '/pages/people'
    }, {
        name: 'Contact',
        link: '/pages/contact'
    }, {
        name: 'Wall',
        link: '/pages/wall'
    }, {
        name: 'Mailbox',
        link: '/pages/mailbox'
    }, {
        name: 'Errors',
        link: 'error',
        subitems: [{
            name: '404',
            link: '/error/404'
        }, {
            name: '403',
            link: '/error/403'
        }, {
            name: '500',
            link: '/error/500'
        }, {
            name: '503',
            link: '/error/503'
        }]
    }]
};


export const menu = [
    headingMenu,
    Dashboard,
    //Widgets,
    headingComponents,
    Elements,
    Forms,
    headingComponentsTablel,
    headingComponentsTable,
    Tables,
    //Charts,
    //Maps,
    headingMore,
    User,
    Pages
];
