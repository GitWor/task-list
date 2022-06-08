import { Popover } from '@headlessui/react';
import { useDate } from '../hooks/UseDate';
import { DateListBox } from '../shared/DateListBox';

export function DateButton() {
  const { date, UpdateDate } = useDate();

  function handleDaySet(day: number) {
    var newDate = new Date(date.getFullYear(), date.getMonth(), day);
    UpdateDate(newDate);
  }

  function handleMonthSet(month: number) {
    var newDaysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
    UpdateDate(
      new Date(
        date.getFullYear(),
        month,
        date.getDate() > newDaysInMonth ? newDaysInMonth : date.getDate()
      )
    );
  }

  function handleYearSet(year: number) {
    UpdateDate(new Date(year, date.getMonth(), date.getDate()));
  }
  return (
    <Popover className="flex justify-center justify-items-center items-center">
      <Popover.Panel className="mt-4">
        <DateListBox
          date={date}
          handleDaySet={handleDaySet}
          handleMonthSet={handleMonthSet}
          handleYearSet={handleYearSet}
        />
      </Popover.Panel>
      <Popover.Button className="mt-4 bg-blue-500 p-4 rounded-full text-white font-bold">
        {date.toLocaleDateString('pt-BR')}
      </Popover.Button>
    </Popover>
  );
}
