export default {
    editor: {
        label: {
            en: 'FullCalendar',
        },
        icon: 'calendar',
        customSettingsPropertiesOrder: [
            'disableInteractions',
            'showHeader',
            {
                label: "View settings",
                isCollapsible: true,
                properties: [
                    'locale',
                    'timezone',
                    'defaultView',
                    'yearView',
                    'monthView',
                    'weekView',
                    'dayView',
                    'listView',
                    'allDaySlot',
                    'timeStart',
                    'timeEnd',
                    'hideWeekends',
                    'startWeekOnSunday',
                    'hideDaysOfWeek'
                ]
            },
            // SECTION 1: SINGLE EVENTS
            {
                label: 'Single Events',
                isCollapsible: true,
                properties: [
                    'singleEvents',
                    'singleEventsIdFormula',
                    'singleEventsTitleFormula',
                    'singleEventsStartFormula',
                    'singleEventsEndFormula',
                    'singleEventsAllDayFormula',
                    'singleEventsBackgroundColorFormula',
                    'singleEventsBorderColorFormula',
                    'singleEventsTextColorFormula',
                    'singleEventsContentFormula',
                    'singleEventsDataFormula',
                    'singleEventsGroupIdFormula',
                ]
            },
            // SECTION 2: RECURRING EVENTS
            {
                label: 'Recurring Events',
                isCollapsible: true,
                properties: [
                    'recurringEvents',
                    'recurringEventsIdFormula',
                    'recurringEventsTitleFormula',
                    'recurringEventsDaysOfWeekFormula',
                    'recurringEventsStartTimeFormula',
                    'recurringEventsEndTimeFormula',
                    'recurringEventsStartRecurFormula',
                    'recurringEventsEndRecurFormula',
                    'recurringEventsAllDayFormula',
                    'recurringEventsBackgroundColorFormula',
                    'recurringEventsBorderColorFormula',
                    'recurringEventsTextColorFormula',
                    'recurringEventsContentFormula',
                    'recurringEventsDataFormula',
                    'recurringEventsGroupIdFormula',
                ]
            },
            ['buttonTextToday', 'buttonTextYear', 'buttonTextMonth', 'buttonTextWeek', 'buttonTextDay', 'buttonTextList', 'noEventsText']
        ],
        customStylePropertiesOrder: [
            {
                label: "General",
                isCollapsible: true,
                properties: ['fontFamily', 'fontSize', 'fontWeight', 'nowIndicatorColor'],

            },
            {
                label: "Header",
                isCollapsible: true,
                properties: ['headerBackgroundColor', 'headerTextColor', 'headerHeight'],

            },
            {
                label: "Day header",
                isCollapsible: true,
                properties: [
                    'dayHeaderBackgroundColor',
                    'dayHeaderTextColor',
                    'dayHeaderHeight',
                    'dayHeaderFontSize',
                    'dayHeaderFontWeight',
                    'weekendTextColor',
                ],
            },
            {
                label: "Cells",
                isCollapsible: true,
                properties: [
                    'todayBackgroundColor',
                    'cellBackgroundColor',
                    'cellTextColor',
                    'otherMonthBackgroundColor',
                    'otherMonthTextColor']
            },
            {
                label: "Time grid",
                isCollapsible: true,
                properties: ['timeGridBackgroundColor'],
            },
            {
                label: "Buttons",
                isCollapsible: true,
                properties: [
                    'buttonBackgroundColor',
                    'buttonTextColor',
                    'buttonHoverBackgroundColor',
                    'buttonHoverTextColor',
                    'buttonActiveBackgroundColor',
                    'buttonActiveTextColor',
                    'buttonBorderRadius',
                    'todayButtonBackgroundColor',
                    'todayButtonTextColor',
                    'todayButtonHoverBackgroundColor',
                    'todayButtonHoverTextColor',
                ],
            },
            {
                label: "Borders",
                isCollapsible: true,
                properties: ['borderColor'],
            },
            {
                label: "Events",
                isCollapsible: true,
                properties: ['defaultEventBackgroundColor', 'defaultEventBorderColor', 'defaultEventTextColor'],
            },
        ],
    },
    properties: {
        // STYLE & VIEW SETTINGS (Unchanged)
        fontFamily: { label: { en: 'Font family' }, type: 'FontFamily', section: 'style', bindable: true, defaultValue: null },
        fontSize: { label: { en: 'Font size' }, type: 'Length', section: 'style', bindable: true, responsive: true, defaultValue: '14px', options: { unitChoices: [{ value: 'px', label: 'px', min: 10, max: 50 }, { value: 'em', label: 'em', min: 1, max: 50 }, { value: 'rem', label: 'rem', min: 1, max: 50 }], noRange: true }, },
        fontWeight: { label: { en: 'Font weight' }, type: 'TextSelect', section: 'style', bindable: true, responsive: true, defaultValue: '400', options: { options: [{ value: '100', label: '100 (Thin)' }, { value: '200', label: '200 (Extra Light)' }, { value: '300', label: '300 (Light)' }, { value: '400', label: '400 (Normal)' }, { value: '500', label: '500 (Medium)' }, { value: '600', label: '600 (Semi Bold)' }, { value: '700', label: '700 (Bold)' }, { value: '800', label: '800 (Extra Bold)' }, { value: '900', label: '900 (Black)' }] }, },
        headerBackgroundColor: { label: { en: 'Background' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        headerTextColor: { label: { en: 'Text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        dayHeaderBackgroundColor: { label: { en: 'Background' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        dayHeaderTextColor: { label: { en: 'Text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        dayHeaderFontSize: { label: { en: 'Font size' }, type: 'Length', section: 'style', bindable: true, responsive: true, defaultValue: '14px', options: { unitChoices: [{ value: 'px', label: 'px', min: 10, max: 50 }, { value: 'em', label: 'em', min: 1, max: 50 }, { value: 'rem', label: 'rem', min: 1, max: 50 }], noRange: true }, },
        dayHeaderFontWeight: { label: { en: 'Font weight' }, type: 'TextSelect', section: 'style', bindable: true, responsive: true, defaultValue: '400', options: { options: [{ value: '100', label: '100 (Thin)' }, { value: '200', label: '200 (Extra Light)' }, { value: '300', label: '300 (Light)' }, { value: '400', label: '400 (Normal)' }, { value: '500', label: '500 (Medium)' }, { value: '600', label: '600 (Semi Bold)' }, { value: '700', label: '700 (Bold)' }, { value: '800', label: '800 (Extra Bold)' }, { value: '900', label: '900 (Black)' }] }, },
        todayBackgroundColor: { label: { en: 'Today background' }, type: 'Color', section: 'style', bindable: true, defaultValue: 'rgba(255, 220, 40, 0.15)' },
        cellBackgroundColor: { label: { en: 'Background' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        cellTextColor: { label: { en: 'Text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        weekendTextColor: { label: { en: 'Weekend text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        otherMonthBackgroundColor: { label: { en: 'Other month background' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        otherMonthTextColor: { label: { en: 'Other month text' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        buttonBackgroundColor: { label: { en: 'Background' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#2C3E50' },
        buttonTextColor: { label: { en: 'Text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#FFFFFF' },
        buttonHoverBackgroundColor: { label: { en: 'Hover background' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#1e2b37' },
        buttonHoverTextColor: { label: { en: 'Hover text' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#FFFFFF' },
        buttonActiveBackgroundColor: { label: { en: 'Active background' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#1a252f' },
        buttonActiveTextColor: { label: { en: 'Active text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#FFFFFF' },
        buttonBorderRadius: { label: { en: 'Border radius' }, type: 'Length', section: 'style', bindable: true, defaultValue: '4px' },
        todayButtonBackgroundColor: { label: { en: 'Today button background' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        todayButtonTextColor: { label: { en: 'Today button text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        todayButtonHoverBackgroundColor: { label: { en: 'Today button hover background' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        todayButtonHoverTextColor: { label: { en: 'Today button hover text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        borderColor: { label: { en: 'Color' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#ddd' },
        defaultEventBackgroundColor: { label: { en: 'Background' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#3788d8' },
        defaultEventBorderColor: { label: { en: 'Border' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#3788d8' },
        defaultEventTextColor: { label: { en: 'Text color' }, type: 'Color', section: 'style', bindable: true, defaultValue: '#ffffff' },
        headerHeight: { label: { en: 'Header height' }, type: 'Length', section: 'style', bindable: true, responsive: true, defaultValue: null },
        dayHeaderHeight: { label: { en: 'Day header height' }, type: 'Length', section: 'style', bindable: true, responsive: true, defaultValue: null },
        nowIndicatorColor: { label: { en: 'Now indicator Color' }, type: 'Color', section: 'style', bindable: true, defaultValue: 'red' },
        locale: { label: { en: 'Locale' }, type: 'TextSelect', section: 'settings', bindable: true, defaultValue: 'auto', options: { options: [{ value: 'auto', label: 'Current Lang' }, { value: 'en', label: 'English' }, { value: 'fr', label: 'French' }, { value: 'es', label: 'Spanish' }] } },
        yearView: { label: { en: 'Year view' }, type: 'OnOff', section: 'settings', bindable: true, responsive: true, defaultValue: true },
        monthView: { label: { en: 'Month view' }, type: 'OnOff', section: 'settings', bindable: true, responsive: true, defaultValue: true },
        weekView: { label: { en: 'Week view' }, type: 'OnOff', section: 'settings', bindable: true, responsive: true, defaultValue: true },
        dayView: { label: { en: 'Day view' }, type: 'OnOff', section: 'settings', bindable: true, responsive: true, defaultValue: true },
        listView: { label: { en: 'List view' }, type: 'OnOff', section: 'settings', bindable: true, responsive: true, defaultValue: true },
        defaultView: { label: { en: 'Default view' }, type: 'TextSelect', section: 'settings', bindable: true, responsive: true, defaultValue: 'dayGridMonth', options: { options: [{ value: 'multiMonthYear', label: 'Year' }, { value: 'dayGridMonth', label: 'Month' }, { value: 'timeGridWeek', label: 'Week' }, { value: 'timeGridDay', label: 'Day' }, { value: 'listWeek', label: 'List' }] } },
        timezone: { label: { en: 'Timezone' }, type: 'TextSelect', section: 'settings', bindable: true, defaultValue: 'local', options: { options: [{ value: 'local', label: 'Local Browser Time' }, { value: 'UTC', label: 'UTC' }] } },
        allDaySlot: { label: { en: 'Show all-day events' }, type: 'OnOff', section: 'settings', bindable: true, defaultValue: true },
        timeStart: { label: { en: 'Time start' }, type: 'Text', section: 'settings', bindable: true, defaultValue: '00:00:00' },
        timeEnd: { label: { en: 'Time end' }, type: 'Text', section: 'settings', bindable: true, defaultValue: '24:00:00' },
        hideWeekends: { label: { en: 'Hide weekends' }, type: 'OnOff', section: 'settings', bindable: true, defaultValue: false },
        startWeekOnSunday: { label: { en: 'Start week on Sunday' }, type: 'OnOff', section: 'settings', bindable: true, defaultValue: false },
        hideDaysOfWeek: { label: { en: 'Hide days of week' }, type: 'Array', section: 'settings', bindable: true, defaultValue: [], options: { expandable: true, getItemLabel(item) { const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; return days[item] || `Day ${item}`; }, item: { type: 'TextSelect', defaultValue: 0, options: { options: [{ value: 0, label: 'Sunday' }, { value: 1, label: 'Monday' }, { value: 2, label: 'Tuesday' }, { value: 3, label: 'Wednesday' }, { value: 4, label: 'Thursday' }, { value: 5, label: 'Friday' }, { value: 6, label: 'Saturday' }] } } } },
        timeGridBackgroundColor: { label: { en: 'Background' }, type: 'Color', section: 'style', bindable: true, defaultValue: null },
        showHeader: { label: { en: 'Header' }, type: 'OnOff', section: 'settings', bindable: true, defaultValue: true },
        disableInteractions: { label: { en: 'Readonly' }, type: 'OnOff', section: 'settings', bindable: true, defaultValue: false },

        // SINGLE EVENTS
        singleEvents: {
            label: { en: 'Events Data' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [],
            options: {
                expandable: true,
                getItemLabel(item) {
                    return item?.title || 'Untitled Event';
                },
                item: {
                    type: 'Object',
                    defaultValue: { id: '', title: 'New Event', start: new Date().toISOString(), end: '' },
                    options: {
                        item: {
                            id: { label: { en: 'ID' }, type: 'Text' },
                            title: { label: { en: 'Title' }, type: 'Text' },
                            start: { label: { en: 'Start' }, type: 'Text', options: { placeholder: 'YYYY-MM-DDTHH:MM:SS' } },
                            end: { label: { en: 'End' }, type: 'Text', options: { placeholder: 'YYYY-MM-DDTHH:MM:SS' } },
                            allDay: { label: { en: 'All Day' }, type: 'OnOff' },
                            backgroundColor: { label: { en: 'BG Color' }, type: 'Color' },
                            borderColor: { label: { en: 'Border Color' }, type: 'Color' },
                            textColor: { label: { en: 'Text Color' }, type: 'Color' },
                            data: { label: { en: 'Data' }, type: 'Text', options: { placeholder: '{ "key": "value" }' } },
                            groupId: { label: { en: 'Group ID' }, type: 'Text' },
                        },
                    },
                },
            },
        },
        
        // RECURRING EVENTS
        recurringEvents: {
            label: { en: 'Events Data' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [],
            options: {
                expandable: true,
                getItemLabel(item) {
                    return item?.title || 'Untitled Recurring Event';
                },
                item: {
                    type: 'Object',
                    defaultValue: { id: '', title: 'New Recurring Event', daysOfWeek: [1], startTime: '10:00:00', endTime: '12:00:00' },
                    options: {
                        item: {
                            id: { label: { en: 'ID' }, type: 'Text' },
                            title: { label: { en: 'Title' }, type: 'Text' },
                            daysOfWeek: {
                                label: { en: 'Days of Week' },
                                type: 'Array',
                                options: {
                                    item: { // This definition fixes the 'defaultValue' error
                                        type: 'TextSelect',
                                        defaultValue: 1,
                                        options: {
                                            options: [
                                                { value: 0, label: 'Sunday' }, { value: 1, label: 'Monday' }, { value: 2, label: 'Tuesday' },
                                                { value: 3, label: 'Wednesday' }, { value: 4, label: 'Thursday' }, { value: 5, label: 'Friday' },
                                                { value: 6, label: 'Saturday' },
                                            ]
                                        }
                                    }
                                }
                            },
                            startTime: { label: { en: 'Start Time' }, type: 'Text', options: { placeholder: 'HH:MM:SS' } },
                            endTime: { label: { en: 'End Time' }, type: 'Text', options: { placeholder: 'HH:MM:SS' } },
                            startRecur: { label: { en: 'Date Range Start' }, type: 'Text', options: { placeholder: 'YYYY-MM-DD' } },
                            endRecur: { label: { en: 'Date Range End' }, type: 'Text', options: { placeholder: 'YYYY-MM-DD' } },
                            allDay: { label: { en: 'All Day' }, type: 'OnOff' },
                            backgroundColor: { label: { en: 'BG Color' }, type: 'Color' },
                            borderColor: { label: { en: 'Border Color' }, type: 'Color' },
                            textColor: { label: { en: 'Text Color' }, type: 'Color' },
                            data: { label: { en: 'Data' }, type: 'Text', options: { placeholder: '{ "key": "value" }' } },
                            groupId: { label: { en: 'Group ID' }, type: 'Text' },
                        },
                    },
                },
            },
        },

        // FORMULAS - SINGLE
        singleEventsIdFormula: { label: { en: 'ID Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['id']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsTitleFormula: { label: { en: 'Title Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['title']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsStartFormula: { label: { en: 'Start Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['start']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsEndFormula: { label: { en: 'End Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['end']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsAllDayFormula: { label: { en: 'All Day Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['allDay']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsBackgroundColorFormula: { label: { en: 'BG Color Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['backgroundColor']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsBorderColorFormula: { label: { en: 'Border Color Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['borderColor']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsTextColorFormula: { label: { en: 'Text Color Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['textColor']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsContentFormula: { label: { en: 'Content Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['content']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsDataFormula: { label: { en: 'Data Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['data']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        singleEventsGroupIdFormula: { label: { en: 'Group ID Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.singleEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['groupId']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.singleEvents, },
        
        // FORMULAS - RECURRING
        recurringEventsIdFormula: { label: { en: 'ID Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['id']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsTitleFormula: { label: { en: 'Title Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['title']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsDaysOfWeekFormula: { label: { en: 'Days of Week Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['daysOfWeek']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsStartTimeFormula: { label: { en: 'Start Time Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['startTime']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsEndTimeFormula: { label: { en: 'End Time Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['endTime']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsStartRecurFormula: { label: { en: 'Range Start Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['startRecur']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsEndRecurFormula: { label: { en: 'Range End Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['endRecur']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsAllDayFormula: { label: { en: 'All Day Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['allDay']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsBackgroundColorFormula: { label: { en: 'BG Color Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['backgroundColor']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsBorderColorFormula: { label: { en: 'Border Color Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['borderColor']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsTextColorFormula: { label: { en: 'Text Color Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['textColor']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsContentFormula: { label: { en: 'Content Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['content']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsDataFormula: { label: { en: 'Data Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['data']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        recurringEventsGroupIdFormula: { label: { en: 'Group ID Field' }, type: 'Formula', section: 'settings', options: content => ({ template: content.recurringEvents?.[0] }), defaultValue: { type: 'f', code: "context.mapping?.['groupId']" }, hidden: (content, sidepanelContent, boundProps) => !boundProps.recurringEvents, },
        
        // OTHER PROPERTIES
        buttonTextToday: { label: { en: '"Today" button text' }, type: 'Text', section: 'settings', multilang: true, bindable: true, defaultValue: '' },
        buttonTextYear: { label: { en: '"Year" button text' }, type: 'Text', section: 'settings', multilang: true, bindable: true, defaultValue: '' },
        buttonTextMonth: { label: { en: '"Month" button text' }, type: 'Text', section: 'settings', multilang: true, bindable: true, defaultValue: '' },
        buttonTextWeek: { label: { en: '"Week" button text' }, type: 'Text', section: 'settings', multilang: true, bindable: true, defaultValue: '' },
        buttonTextDay: { label: { en: '"Day" button text' }, type: 'Text', section: 'settings', multilang: true, bindable: true, defaultValue: '' },
        buttonTextList: { label: { en: '"List" button text' }, type: 'Text', section: 'settings', multilang: true, bindable: true, defaultValue: '' },
        noEventsText: { label: { en: 'No events text' }, type: 'Text', section: 'settings', multilang: true, bindable: true, defaultValue: '' },
    },
    triggerEvents: [
        { name: 'eventClick', label: { en: 'On event click' }, event: { value: {} } },
        { name: 'viewChange', label: { en: 'On view change' }, event: { value: {} } },
        { name: 'eventCreated', label: { en: 'On event created' }, event: { value: {} } },
        { name: 'eventUpdated', label: { en: 'On event updated' }, event: { value: {} } },
    ],
    actions: [
        { action: 'changeView', label: { en: 'Change view' }, args: [{ name: 'viewName', type: 'select', options: [{ value: 'multiMonthYear', label: 'multiMonthYear' }, { value: 'dayGridMonth', label: 'dayGridMonth' }, { value: 'timeGridWeek', label: 'timeGridWeek' }, { value: 'timeGridDay', label: 'timeGridDay' }, { value: 'listWeek', label: 'listWeek' }] }] },
        { action: 'goToDate', label: { en: 'Go to date' }, args: [{ name: 'date', type: 'string' }] },
        { action: 'next', label: { en: 'Next period' } },
        { action: 'prev', label: { en: 'Previous period' } },
        { action: 'today', label: { en: 'Go to today' } },
    ],
};