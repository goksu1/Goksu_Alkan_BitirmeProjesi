import React, { useState } from "react";

import type { Dayjs } from "dayjs";
import { DatePickerCalendar } from "./DatePickerCalender/DatePickerCalendar";
import { DatePickerSelector } from "./DayPickerSelector/DatePickerSelector";
import { Styled } from "./DatePicker.styled";

export interface IDatePickerProps {
  selectedDate: Dayjs;
  selectorDateFormat?: string;

  onChange: (newDate: Dayjs) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  const [shownDate, setShownDate] = useState(selectedDate.clone());

  return (
    <Styled>
      <div className={"DatePicker"}>
        <DatePickerSelector shownDate={shownDate} setShownDate={setShownDate} />

        <DatePickerCalendar
          selectedDate={selectedDate}
          shownDate={shownDate}
          onChange={onChange}
        />
      </div>
    </Styled>
  );
};
