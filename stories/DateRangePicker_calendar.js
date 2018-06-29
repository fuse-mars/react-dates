import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { VERTICAL_ORIENTATION, ANCHOR_RIGHT, OPEN_UP } from '../src/constants';

import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';

function CustomMonthNav({ children, style }) {
  return (
    <span
      style={{
        border: '1px solid #dce0e0',
        borderRadius: 2,
        backgroundColor: '#fff',
        color: '#484848',
        fontSize: 24,
        padding: '0 3px',
        position: 'absolute',
        marginTop: -2,
        top: 30,
        left: 26,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

const TestCustomInfoPanel = () => (
  <div
    style={{
      padding: '10px 21px',
      color: '#484848',
    }}
  >
    &#x2755; Some useful info here
  </div>
);

storiesOf('DRP - Calendar Props', module)
  .addWithInfo('default', () => (
    <DateRangePickerWrapper autoFocus />
  ))
  .addWithInfo('open up', () => (
    <div style={{ marginTop: '450px' }}>
      <DateRangePickerWrapper
        openDirection={OPEN_UP}
        autoFocus
      />
    </div>
  ))
  .addWithInfo('single month', () => (
    <DateRangePickerWrapper numberOfMonths={1} autoFocus />
  ))
  .addWithInfo('3 months', () => (
    <DateRangePickerWrapper numberOfMonths={3} autoFocus />
  ))
  .addWithInfo('with custom day size', () => (
    <DateRangePickerWrapper daySize={50} autoFocus />
  ))
  .addWithInfo('anchored right', () => (
    <div style={{ float: 'right' }}>
      <DateRangePickerWrapper
        anchorDirection={ANCHOR_RIGHT}
        autoFocus
      />
    </div>
  ))
  .addWithInfo('vertical', () => (
    <DateRangePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      autoFocus
    />
  ))
  .addWithInfo('vertical anchored right', () => (
    <div style={{ float: 'right' }}>
      <DateRangePickerWrapper
        orientation={VERTICAL_ORIENTATION}
        anchorDirection={ANCHOR_RIGHT}
        autoFocus
      />
    </div>
  ))
  .addWithInfo('horizontal with portal', () => (
    <DateRangePickerWrapper
      withPortal
      autoFocus
    />
  ))
  .addWithInfo('horizontal with fullscreen portal', () => (
    <DateRangePickerWrapper withFullScreenPortal autoFocus />
  ))
  .addWithInfo('vertical with full screen portal', () => (
    <DateRangePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      withFullScreenPortal
      autoFocus
    />
  ))
  .addWithInfo('disable scroll', () => (
    <div style={{ height: '100vh' }}>
      <div>This content scrolls.</div>
      <DateRangePickerWrapper preventScroll autoFocus />
    </div>
  ))
  .addWithInfo('appended to body', () => <DateRangePickerWrapper appendToBody autoFocus />)
  .addWithInfo('appended to body (in scrollable container)', () => (
    <div style={{ height: 200, overflow: 'auto', background: 'whitesmoke' }}>
      <div>This content scrolls.</div>
      <div style={{ marginBottom: 300 }}>
        <DateRangePickerWrapper appendToBody autoFocus />
      </div>
    </div>
  ))
  .addWithInfo('does not autoclose the DayPicker on date selection', () => (
    <DateRangePickerWrapper
      keepOpenOnDateSelect
      autoFocus
    />
  ))
  .addWithInfo('with custom month navigation', () => (
    <DateRangePickerWrapper
      navPrev={<CustomMonthNav>&#8249;</CustomMonthNav>}
      navNext={<CustomMonthNav style={{ left: 48 }}>&#8250;</CustomMonthNav>}
      numberOfMonths={1}
      autoFocus
    />
  ))
  .addWithInfo('vertical with custom month navigation', () => (
    <DateRangePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      navPrev={<CustomMonthNav>&#8249;</CustomMonthNav>}
      navNext={<CustomMonthNav style={{ left: 48 }}>&#8250;</CustomMonthNav>}
      autoFocus
    />
  ))
  .addWithInfo('with outside days enabled', () => (
    <DateRangePickerWrapper
      numberOfMonths={1}
      enableOutsideDays
      autoFocus
    />
  ))
  .addWithInfo('with month specified on open', () => (
    <DateRangePickerWrapper
      initialVisibleMonth={() => moment().add(10, 'months')}
      autoFocus
    />
  ))
  .addWithInfo('with info panel default', () => (
    <DateRangePickerWrapper
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
      autoFocus
    />
  ))
  .addWithInfo('with info panel before', () => (
    <DateRangePickerWrapper
      calendarInfoPosition="before"
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
      autoFocus
    />
  ))
  .addWithInfo('with info panel after', () => (
    <DateRangePickerWrapper
      calendarInfoPosition="after"
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
      autoFocus
    />
  ))
  .addWithInfo('with info panel bottom', () => (
    <DateRangePickerWrapper
      calendarInfoPosition="bottom"
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
      autoFocus
    />
  ))
  .addWithInfo('with info panel top', () => (
    <DateRangePickerWrapper
      calendarInfoPosition="top"
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
      autoFocus
    />
  ))
  .addWithInfo('with keyboard shortcuts panel hidden', () => (
    <DateRangePickerWrapper
      hideKeyboardShortcutsPanel
      autoFocus
    />
  ))
  .addWithInfo('with RTL support (and anchor right)', () => (
    <div style={{ float: 'right' }}>
      <DateRangePickerWrapper
        anchorDirection={ANCHOR_RIGHT}
        isRTL
        autoFocus
      />
    </div>
  ))
  .addWithInfo('vertical with RTL support', () => (
    <DateRangePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      isRTL
      autoFocus
    />
  ))
  .addWithInfo('with custom first day of week', () => (
    <DateRangePickerWrapper
      firstDayOfWeek={3}
      autoFocus
    />
  ))
  .addWithInfo('with onClose handler', () => (
    <DateRangePickerWrapper
      onClose={({ startDate, endDate }) => alert(`onClose: startDate = ${startDate}, endDate = ${endDate}`)}
      autoFocus
    />
  ))
  .addWithInfo('with onClose handler event object', () => (
    /*
      Description:
      React-dates closes the calendar, when user perform multiple actions
      1. user presses Shift+Tab from startDate field
      2. user presses Tab from endDate field
      3. user presses Enter from a calendar day
      4. user clicks on the of the DateRangePicker component
      5. user clicks outside of the DateRangePicker component
      All there actions trigger the onClose callback, but do not provide it with
      the event object. This makes it hard for calling component to make decision on
      how to procede once the calendar is closed
      Example: move focus to desired element if user clicks on
      an non-focusable element outside of DateRangePicker component.
      So, providing this event object will help in this desicion making process.
    */
    <DateRangePickerWrapper
      onClose={(dates, e) => {
        action('onClose called with')(dates, `${e.type} - ${e.key}`);
      }}
      autoFocus
    />
  ))
  .addWithInfo('with no animation', () => (
    <DateRangePickerWrapper
      transitionDuration={0}
      autoFocus
    />
  ))
  .addWithInfo('with custom vertical spacing', () => (
    <DateRangePickerWrapper
      verticalSpacing={0}
      autoFocus
    />
  ))
  .addWithInfo('with onOpen handler', () => (
    <div>
      {/*
        Description:
        For a11y reasons, we usually want to perform DOM level tasks on the calendar ui once
        it has been fully loaded/attached to the DOM.
        Example: sending focus to selected date when calendar opens.

        Comment:
        Focusing on selected date inside `CalendarDay.componentDidMount`, does not work because of
        use of setTimeout inside `CalendarMonth.componentDidMount`,
        so users will be able to manually set this focus inside `onOpen` callback

        onOpen is called with a metaData object that contains important information about
        the open calendar
        Example: metaData = { selectedDayRef }
      */}
      <p>Use case: Moving focus on Calendar in fullscreen mode.</p>
      <DateRangePickerWrapper
        readOnly
        withFullScreenPortal
        initialStartDate={moment().add(3, 'days')}
        initialEndDate={moment().add(10, 'days')}
        showClearDates
        regular
        onOpen={({ selectedDayRef }) => {
          selectedDayRef.focus();
          action('onOpen called with selectedDay')(selectedDayRef.textContent);
        }}
      />
    </div>
  ));

