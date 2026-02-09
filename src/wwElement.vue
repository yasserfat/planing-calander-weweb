<template>
    <div class="fullcalendar-wrapper modern-buttons" :style="calendarStyles">
        <FullCalendar ref="fullCalendarRef" :key="calendarKey" :options="calendarOptions"></FullCalendar>
    </div>
</template>

<script>
import { useTemplateRef, computed, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';
import luxonPlugin from '@fullcalendar/luxon3';

export default {
    components: {
        FullCalendar,
    },
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ['trigger-event'],
    setup(props, { emit }) {
        const fullCalendarRef = useTemplateRef(null);
        const { resolveMappingFormula } = wwLib.wwFormula.useFormula();

        const isEditing = computed(() => props.wwEditorState?.isEditing);

        // Define the WeWeb variables
        const { setValue: setCurrentView } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid, name: 'currentView', type: 'string',
            defaultValue: computed(() => props.content.defaultView || 'dayGridMonth'),
        });
        const { setValue: setSelectedEvent } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid, name: 'selectedEvent', type: 'object', defaultValue: null,
        });
        const { setValue: setStartTime } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid, name: 'starttime', type: 'string', defaultValue: '',
        });
        const { setValue: setEndTime } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid, name: 'endtime', type: 'string', defaultValue: '',
        });

        const calendarKey = computed(() => `calendar-${props.content?.defaultView || 'dayGridMonth'}`);

        const calendarStyles = computed(() => ({
            '--fc-font-family': props.content?.fontFamily || 'inherit',
            '--fc-font-size': props.content?.fontSize || '14px',
            '--fc-font-weight': props.content?.fontWeight || '400',
            '--fc-border-color': props.content?.borderColor || '#ddd',
            '--fc-button-text-color': props.content?.buttonTextColor || '#fff',
            '--fc-button-bg-color': props.content?.buttonBackgroundColor || '#2C3E50',
            '--fc-button-hover-bg-color': props.content?.buttonHoverBackgroundColor || '#1e2b37',
            '--fc-button-hover-text-color': props.content?.buttonHoverTextColor || '#fff',
            '--fc-button-active-bg-color': props.content?.buttonActiveBackgroundColor || '#1a252f',
            '--fc-button-active-text-color': props.content?.buttonActiveTextColor || '#fff',
            '--fc-button-border-radius': props.content?.buttonBorderRadius || '4px',
            '--fc-today-button-bg-color': props.content?.todayButtonBackgroundColor || null,
            '--fc-today-button-text-color': props.content?.todayButtonTextColor || null,
            '--fc-today-button-hover-bg-color': props.content?.todayButtonHoverBackgroundColor || null,
            '--fc-today-button-hover-text-color': props.content?.todayButtonHoverTextColor || null,
            '--fc-event-bg-color': props.content?.defaultEventBackgroundColor || '#3788d8',
            '--fc-event-border-color': props.content?.defaultEventBorderColor || '#3788d8',
            '--fc-event-text-color': props.content?.defaultEventTextColor || '#fff',
            '--fc-today-bg-color': props.content?.todayBackgroundColor || 'rgba(255, 220, 40, 0.15)',
            '--fc-now-indicator-color': props.content?.nowIndicatorColor || 'red',
            '--fc-header-height': props.content?.headerHeight || 'auto',
            '--fc-day-header-height': props.content?.dayHeaderHeight || 'auto',
            '--fc-header-bg-color': props.content?.headerBackgroundColor || null,
            '--fc-header-padding': props.content?.headerBackgroundColor ? '10px' : '0px',
            '--fc-header-text-color': props.content?.headerTextColor || null,
            '--fc-day-header-bg-color': props.content?.dayHeaderBackgroundColor || null,
            '--fc-day-header-text-color': props.content?.dayHeaderTextColor || null,
            '--fc-day-header-font-size': props.content?.dayHeaderFontSize || null,
            '--fc-day-header-font-weight': props.content?.dayHeaderFontWeight || null,
            '--fc-cell-bg-color': props.content?.cellBackgroundColor || null,
            '--fc-cell-text-color': props.content?.cellTextColor || null,
            '--fc-time-grid-bg-color': props.content.timeGridBackgroundColor || null,
            '--fc-other-month-bg-color': props.content?.otherMonthBackgroundColor || null,
            '--fc-other-month-text-color': props.content?.otherMonthTextColor || null,
            '--fc-weekend-text-color': props.content?.weekendTextColor || null,
        }));

        const processedEvents = computed(() => {
            const singleEvents = Array.isArray(props.content.singleEvents) ? props.content.singleEvents : [];
            const processedSingle = singleEvents.map(event => {
                if (!event || typeof event !== 'object') return null;
                return {
                    id: resolveMappingFormula(props.content.singleEventsIdFormula, event) ?? event.id,
                    title: resolveMappingFormula(props.content.singleEventsTitleFormula, event) ?? event.title,
                    start: resolveMappingFormula(props.content.singleEventsStartFormula, event) ?? event.start,
                    end: resolveMappingFormula(props.content.singleEventsEndFormula, event) ?? event.end,
                    allDay: resolveMappingFormula(props.content.singleEventsAllDayFormula, event) ?? event.allDay,
                    backgroundColor: resolveMappingFormula(props.content.singleEventsBackgroundColorFormula, event) ?? event.backgroundColor,
                    borderColor: resolveMappingFormula(props.content.singleEventsBorderColorFormula, event) ?? event.borderColor,
                    textColor: resolveMappingFormula(props.content.singleEventsTextColorFormula, event) ?? event.textColor,
                    groupId: resolveMappingFormula(props.content.singleEventsGroupIdFormula, event) ?? event.groupId,
                    extendedProps: {
                        content: resolveMappingFormula(props.content.singleEventsContentFormula, event) ?? event.content,
                        data: resolveMappingFormula(props.content.singleEventsDataFormula, event) ?? event.data,
                        originalEvent: event,
                        isRecurring: false,
                    },
                };
            }).filter(Boolean);

            const recurringEvents = Array.isArray(props.content.recurringEvents) ? props.content.recurringEvents : [];
            const processedRecurring = recurringEvents.map(event => {
                if (!event || typeof event !== 'object') return null;
                return {
                    id: resolveMappingFormula(props.content.recurringEventsIdFormula, event) ?? event.id,
                    title: resolveMappingFormula(props.content.recurringEventsTitleFormula, event) ?? event.title,
                    daysOfWeek: resolveMappingFormula(props.content.recurringEventsDaysOfWeekFormula, event) ?? event.daysOfWeek,
                    startTime: resolveMappingFormula(props.content.recurringEventsStartTimeFormula, event) ?? event.startTime,
                    endTime: resolveMappingFormula(props.content.recurringEventsEndTimeFormula, event) ?? event.endTime,
                    startRecur: resolveMappingFormula(props.content.recurringEventsStartRecurFormula, event) ?? event.startRecur,
                    endRecur: resolveMappingFormula(props.content.recurringEventsEndRecurFormula, event) ?? event.endRecur,
                    allDay: resolveMappingFormula(props.content.recurringEventsAllDayFormula, event) ?? event.allDay,
                    backgroundColor: resolveMappingFormula(props.content.recurringEventsBackgroundColorFormula, event) ?? event.backgroundColor,
                    borderColor: resolveMappingFormula(props.content.recurringEventsBorderColorFormula, event) ?? event.borderColor,
                    textColor: resolveMappingFormula(props.content.recurringEventsTextColorFormula, event) ?? event.textColor,
                    groupId: resolveMappingFormula(props.content.recurringEventsGroupIdFormula, event) ?? event.groupId,
                     extendedProps: {
                        content: resolveMappingFormula(props.content.recurringEventsContentFormula, event) ?? event.content,
                        data: resolveMappingFormula(props.content.recurringEventsDataFormula, event) ?? event.data,
                        originalEvent: event,
                        isRecurring: true,
                    },
                };
            }).filter(Boolean);

            return [...processedSingle, ...processedRecurring];
        });
        
        const availableViews = computed(() => {
            const views = {};
            if (props.content?.yearView) views.multiMonthYear = { type: 'multiMonth', duration: { year: 1 } };
            if (props.content?.monthView) views.dayGridMonth = { type: 'dayGrid', duration: { month: 1 } };
            if (props.content?.weekView) views.timeGridWeek = { type: 'timeGrid', duration: { week: 1 } };
            if (props.content?.dayView) views.timeGridDay = { type: 'timeGrid', duration: { day: 1 } };
            if (props.content?.listView) views.listWeek = { type: 'list', duration: { week: 1 } };
            return views;
        });

        const hiddenDays = computed(() => {
            const hideDaysOfWeek = Array.isArray(props.content.hideDaysOfWeek) ? props.content.hideDaysOfWeek : [];
            const hidden = new Set(hideDaysOfWeek);
            if (props.content?.hideWeekends) {
                hidden.add(0);
                hidden.add(6);
            }
            const hiddenArray = Array.from(hidden);
            return hiddenArray.length >= 7 ? [] : hiddenArray;
        });

        const calendarOptions = computed(() => {
            const buttonText = {};
            if (props.content?.buttonTextToday) buttonText.today = wwLib.wwLang.getText(props.content.buttonTextToday);
            if (props.content?.buttonTextYear) buttonText.year = wwLib.wwLang.getText(props.content.buttonTextYear);
            if (props.content?.buttonTextMonth) buttonText.month = wwLib.wwLang.getText(props.content.buttonTextMonth);
            if (props.content?.buttonTextWeek) buttonText.week = wwLib.wwLang.getText(props.content.buttonTextWeek);
            if (props.content?.buttonTextDay) buttonText.day = wwLib.wwLang.getText(props.content.buttonTextDay);
            if (props.content?.buttonTextList) buttonText.list = wwLib.wwLang.getText(props.content.buttonTextList);

            return {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, multiMonthPlugin, luxonPlugin],
                initialView: props.content?.defaultView || 'dayGridMonth',
                headerToolbar: props.content?.showHeader ? { left: 'prev,next today', center: 'title', right: Object.keys(availableViews.value).join(',') || 'dayGridMonth' } : false,
                views: availableViews.value,
                events: processedEvents.value,
                editable: !props.content?.disableInteractions && !isEditing.value,
                selectable: !props.content?.disableInteractions && !isEditing.value,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: !props.content?.hideWeekends,
                firstDay: props.content?.startWeekOnSunday ? 0 : 1,
                locale: props.content?.locale === 'auto' ? wwLib.wwLang.lang : props.content?.locale || 'en',
                timeZone: props.content?.timezone || 'local',
                hiddenDays: hiddenDays.value,
                slotMinTime: props.content?.timeStart || '00:00:00',
                slotMaxTime: props.content?.timeEnd || '24:00:00',
                allDaySlot: props.content?.allDaySlot,
                nowIndicator: true,
                height: 'auto',
                contentHeight: 'auto',
                stickyHeaderDates: true,
                noEventsContent: props.content?.noEventsText ? wwLib.wwLang.getText(props.content.noEventsText) : 'No events to display',
                buttonText: Object.keys(buttonText).length > 0 ? buttonText : undefined,
                
                // CORE FIX IS HERE
                datesSet: info => {
                    // This function runs whenever the calendar's date range changes.
                    // We ALWAYS update the variables so they are correct in the editor and in preview.
                    setStartTime(info.startStr);
                    setEndTime(info.endStr);
                    setCurrentView(info.view.type);

                    // We ONLY trigger the workflow event when we are NOT in the editor.
                    if (isEditing.value) return;
                    
                    emit('trigger-event', { 
                        name: 'viewChange', 
                        event: { 
                            value: { 
                                view: info.view.type, 
                                start: info.startStr, 
                                end: info.endStr, 
                                title: info.view.title 
                            } 
                        } 
                    });
                },
                eventClick: info => {
                    if (isEditing.value || props.content?.disableInteractions) return;
                    setSelectedEvent(info.event.extendedProps.originalEvent);
                    emit('trigger-event', { name: 'eventClick', event: { value: info.event.extendedProps.originalEvent } });
                },
                select: info => {
                    if (isEditing.value || props.content?.disableInteractions) return;
                    emit('trigger-event', { name: 'eventCreated', event: { value: { start: info.startStr, end: info.endStr, allDay: info.allDay } } });
                },
                eventChange: info => {
                    if (isEditing.value || props.content?.disableInteractions) return;
                    emit('trigger-event', { name: 'eventUpdated', event: { value: info.event.extendedProps.originalEvent } });
                },
            };
        });

        watch(
            () => [props.content.singleEvents, props.content.recurringEvents, props.content.timezone],
            () => {
                fullCalendarRef.value?.getApi().refetchEvents();
            },
            { deep: true }
        );

        const getApi = () => fullCalendarRef.value?.getApi();
        const changeView = viewName => getApi()?.changeView(viewName);
        const goToDate = date => getApi()?.gotoDate(date);
        const next = () => getApi()?.next();
        const prev = () => getApi()?.prev();
        const today = () => getApi()?.today();

        return {
            fullCalendarRef,
            calendarOptions,
            calendarStyles,
            calendarKey,
            changeView,
            goToDate,
            next,
            prev,
            today,
        };
    },
};
</script>

<style lang="scss" scoped>
/* Styles are unchanged */
.fullcalendar-wrapper {
    width: 100%;
    --fc-border-color: #ddd;
    --fc-button-text-color: #fff;
    --fc-button-bg-color: #2c3e50;
    --fc-button-border-color: #2c3e50;
    --fc-button-hover-bg-color: #1e2b37;
    --fc-button-hover-border-color: #1a252f;
    --fc-button-active-bg-color: #1a252f;
    --fc-button-active-border-color: #151e27;
    --fc-event-bg-color: #3788d8;
    --fc-event-border-color: #3788d8;
    --fc-event-text-color: #fff;
    --fc-today-bg-color: rgba(255, 220, 40, 0.15);
    --fc-now-indicator-color: red;
    position: relative;
    overflow: auto;
}
:deep(.fc) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-family: var(--fc-font-family);
    font-size: var(--fc-font-size);
    font-weight: var(--fc-font-weight);
}
:deep(.fc-event) {
    cursor: pointer;
}
:deep(.fc-toolbar-title) {
    font-size: var(--fc-font-size);
    font-weight: var(--fc-font-weight);
    color: var(--fc-header-text-color);
}
:deep(.fc-button) {
    font-size: var(--fc-font-size);
    padding: 0.4em 0.65em;
    border-radius: var(--fc-button-border-radius);
}
:deep(.fc-header-toolbar) {
    background-color: var(--fc-header-bg-color);
    padding: var(--fc-header-padding);
    height: var(--fc-header-height);
}
:deep(.fc-col-header-cell) {
    height: var(--fc-day-header-height);
    background-color: var(--fc-day-header-bg-color) !important;
}
:deep(.fc-col-header-cell-cushion) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2px 4px;
    color: var(--fc-day-header-text-color);
    font-size: var(--fc-day-header-font-size);
    font-weight: var(--fc-day-header-font-weight);
}
:deep(.fc-timegrid-axis) {
    background-color: var(--fc-day-header-bg-color) !important;
}
:deep(.fc-day-today) {
    background-color: var(--fc-today-bg-color) !important;
}
:deep(.fc-daygrid-day) {
    background-color: var(--fc-cell-bg-color) !important;
    color: var(--fc-cell-text-color) !important;
}
:deep(.fc-day-other .fc-daygrid-day-top) {
    color: var(--fc-other-month-text-color, #888) !important;
}
:deep(.fc-day-sat .fc-col-header-cell-cushion),
:deep(.fc-day-sun .fc-col-header-cell-cushion) {
    color: var(--fc-weekend-text-color) !important;
}
:deep(.fc-timegrid-body), :deep(.fc-timegrid-slots) {
    background-color: var(--fc-time-grid-bg-color) !important;
}
:deep(.fc-today-button) {
    text-transform: capitalize;
    background: var(--fc-today-button-bg-color, var(--fc-button-bg-color));
    color: var(--fc-today-button-text-color, var(--fc-button-text-color));
    border: none;
}
:deep(.fc-today-button:hover) {
    background-color: var(--fc-today-button-hover-bg-color, var(--fc-button-hover-bg-color));
    color: var(--fc-today-button-hover-text-color, var(--fc-button-hover-text-color));
}
.fullcalendar-wrapper.modern-buttons :deep(.fc-button-group) {
    background-color: var(--fc-button-bg-color);
    color: var(--fc-button-text-color);
    padding: 2px;
    border-radius: var(--fc-button-border-radius);
    overflow: hidden;
}
.fullcalendar-wrapper.modern-buttons :deep(.fc-button) {
    color: var(--fc-button-text-color);
    border: none;
    box-shadow: none;
    text-transform: capitalize;
}
.fullcalendar-wrapper.modern-buttons :deep(.fc-button:hover) {
    background-color: var(--fc-button-hover-bg-color);
    border-radius: var(--fc-button-border-radius);
    color: var(--fc-button-hover-text-color);
}
.fullcalendar-wrapper.modern-buttons :deep(.fc-button-active) {
    background-color: var(--fc-button-active-bg-color);
    border-radius: var(--fc-button-border-radius);
    color: var(--fc-button-active-text-color);
    box-shadow: none;
}
.fullcalendar-wrapper.modern-buttons :deep(.fc-prev-button),
.fullcalendar-wrapper.modern-buttons :deep(.fc-next-button) {
    background: transparent;
    color: var(--fc-button-text-color);
}
</style>