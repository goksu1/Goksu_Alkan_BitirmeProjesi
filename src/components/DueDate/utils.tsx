import { Dayjs } from "dayjs";

export function changeDateMonth(date: Dayjs, isNextMonth: boolean): Dayjs {
  if (date.month() === 0 && !isNextMonth) {
    return date.set("year", date.year() - 1).set("month", 11);
  }

  if (date.month() === 11 && isNextMonth) {
    return date.set("year", date.year() + 1).set("month", 0);
  }

  return date.add(isNextMonth ? 1 : -1, "month");
}

export interface ICalendarCell {
  text: string;
  value: Dayjs;
}

function getCalendarCells(date: Dayjs): ICalendarCell[] {
  const daysArray = new Array(date.daysInMonth()).fill(1);
  const calendarCells: ICalendarCell[] = [];

  const prepareCell = (date: Dayjs, dayNumber: number) => {
    return {
      text: String(dayNumber),
      value: date.clone().set("date", dayNumber)
    };
  };
  daysArray.forEach((_, i) => {
    calendarCells.push(prepareCell(date, i + 1));
  });

  const cellsToAdd = 35 - daysArray.length;

  const lastMonth = date.subtract(1, "month");
  for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
    calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i));
  }

  const nextMonth = date.add(1, "month");
  for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
    calendarCells.push(prepareCell(nextMonth, i + 1));
  }

  return calendarCells;
}

export function getCalendarRows(date: Dayjs): Array<ICalendarCell[]> {
  const cells = getCalendarCells(date);
  const rows: Array<ICalendarCell[]> = [];

  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
}
