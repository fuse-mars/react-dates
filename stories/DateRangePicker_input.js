import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import isInclusivelyBeforeDay from '../src/utils/isInclusivelyBeforeDay';
import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';

import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';

const TestCustomInputIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    C
  </span>
);

const TestCustomArrowIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    {'--->'}
  </span>
);

const TestCustomCloseIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >'X'</span>
);

storiesOf('DRP - Input Props', module)
  .addWithInfo('default', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
    />
  ))
  .addWithInfo('disabled', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
      disabled
    />
  ))
  .addWithInfo('disabled start date', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
      disabled="startDate"
      isOutsideRange={day => !isInclusivelyAfterDay(day, moment().add(3, 'months'))}
    />
  ))
  .addWithInfo('disabled end date', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
      disabled="endDate"
      isOutsideRange={day => !isInclusivelyAfterDay(day, moment()) ||
        !isInclusivelyBeforeDay(day, moment().add(3, 'months').add(10, 'days'))}
    />
  ))
  .addWithInfo('readOnly', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'months')}
      initialEndDate={moment().add(3, 'months').add(10, 'days')}
      readOnly
    />
  ))
  .addWithInfo('with clear dates button', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
    />
  ))
  .addWithInfo('reopens DayPicker on clear dates', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      reopenPickerOnClearDates
    />
  ))
  .addWithInfo('with custom display format', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      displayFormat="MMM D"
    />
  ))
  .addWithInfo('with show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showDefaultInputIcon
    />
  ))
  .addWithInfo('with custom show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      customInputIcon={<TestCustomInputIcon />}
    />
  ))
  .addWithInfo('with custom arrow icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      customArrowIcon={<TestCustomArrowIcon />}
    />
  ))
  .addWithInfo('with custom close icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      customCloseIcon={<TestCustomCloseIcon />}
    />
  ))
  .addWithInfo('with show calendar icon after input', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showDefaultInputIcon
      inputIconPosition="after"
    />
  ))
  .addWithInfo('with screen reader message', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
    />
  ))
  .addWithInfo('noBorder', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      noBorder
    />
  ))
  .addWithInfo('block styling', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      block
    />
  ))
  .addWithInfo('small styling', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      small
    />
  ))
  .addWithInfo('regular styling', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      regular
    />
  ))
  .addWithInfo('with onInputKeyDown handler', () => (
    <div>
      {/*
        Description:
        React-dates handles 'Tab'(on startDate), 'Shift+Tab'(endDate), 'ArrowDown',
        '?' key events internally.
        However, it does not provide a way for calling components to take actions on
        unhandled key events (ex: Escape, Tab from startDate, ....).
        So, `onInputKeyDown` prop will act as a handler for all unhandled key events
      */}
      <p>Use case: Close Calendar when escape key is pressed from startDate input field</p>
      <DateRangePickerWrapper
        startDateId="DepartureDate"
        endDateId="ReturnDate"
        initialStartDate={moment().add(3, 'days')}
        initialEndDate={moment().add(10, 'days')}
        showClearDates
        regular
        onInputKeyDown={action('onInputKeyDown called')}
      />
    </div>
  ))
  .addWithInfo('with onCalendarKeyDown handler', () => (
    <div>
      {/*
        Description:
        For a11y reasons, we want to make sure that calendar is always closed when
        focus is outside the DateRangePicker component.
        However, pressing Tab from the Calendar eventually
        sends focus outside of the DateRangePicker componene without closing the Calendar.
        So, `onCalendarKeyDown` prop will act as a handler for
        the Tab key and all other unhandled key events
      */}
      <p>Use case: Focus trap inside the Calendar.</p>
      <DateRangePickerWrapper
        startDateId="DepartureDate"
        endDateId="ReturnDate"
        initialStartDate={moment().add(3, 'days')}
        initialEndDate={moment().add(10, 'days')}
        showClearDates
        regular
        onCalendarKeyDown={action('onCalendarKeyDown called')}
      />
    </div>
  ));
