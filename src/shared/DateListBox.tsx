import { Listbox } from '@headlessui/react';
import { useEffect, useState } from 'react';

interface DateListBoxProps {
  date: Date;
  handleDaySet: (day: number) => void;
  handleMonthSet: (month: number) => void;
  handleYearSet: (year: number) => void;
}

export function DateListBox({
  date,
  handleDaySet,
  handleMonthSet,
  handleYearSet,
}: DateListBoxProps) {
  const [daysInMonth, setDaysInMonth] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  );

  useEffect(
    () =>
      setDaysInMonth(
        new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
      ),
    [date]
  );

  const currentYear = new Date().getFullYear();
  return (
    <div className="grid grid-cols-3 gap-x-4 bg-surface p-2 max-w-[13rem]">
      <div className="text-center bg-primary-light text-onPrimary-light font-medium px-2 rounded-t-md border border-b-0 border-primary">
        Dia
      </div>
      <div className="text-center bg-primary-light text-onPrimary-light font-medium px-2 rounded-t-md rounded-t-md border border-b-0 border-primary">
        Mês
      </div>
      <div className="text-center bg-primary-light text-onPrimary-light font-medium px-2 rounded-t-md rounded-t-md border border-b-0 border-primary">
        Ano
      </div>
      <Listbox value={date.getDate()} onChange={handleDaySet}>
        <div className="relative flex justify-center rounded-b-md border border-t-0 border-primary">
          <Listbox.Button>{date.getDate()}</Listbox.Button>
          <Listbox.Options className="absolute max-h-[6.25rem] z-20 top-5 overflow-auto bg-surface scrollbar-thin scrollbar-thumb-primary-dark scrollbar-track-surface p-2 shadow-sm">
            {[...Array(daysInMonth).keys()].map((day) => (
              <Listbox.Option
                key={day}
                value={day + 1}
                className="hover:bg-primary-light hover:text-onPrimary-light hover:font-medium hover:cursor-pointer"
              >
                {({ active }) => (
                  <li
                    className={`${
                      active
                        ? 'bg-primary-light text-onPrimary-light font-medium'
                        : 'bg-surface text-onSurface'
                    }`}
                  >
                    {day + 1}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      <Listbox value={date.getMonth()} onChange={handleMonthSet}>
        <div className="relative flex justify-center rounded-b-md border border-t-0 border-primary">
          <Listbox.Button>{date.getMonth() + 1}</Listbox.Button>
          <Listbox.Options className="absolute max-h-[6.25rem] z-20 top-5 bg-surface overflow-auto bg-slate-100 scrollbar-thin scrollbar-thumb-primary-dark scrollbar-track-surface p-2 shadow-sm">
            {[...Array(12).keys()].map((month) => {
              return (
                <Listbox.Option
                  key={month}
                  value={month}
                  className="hover:bg-primary-light hover:text-onPrimary-light hover:font-medium  hover:cursor-pointer"
                >
                  {({ active }) => (
                    <li
                      className={`${
                        active
                          ? 'bg-primary-light text-onPrimary-light font-medium'
                          : 'bg-surface text-onSurface'
                      }`}
                    >
                      {month + 1}
                    </li>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </div>
      </Listbox>
      <Listbox value={date.getFullYear()} onChange={handleYearSet}>
        <div className="relative flex justify-center rounded-b-md border border-t-0 border-primary">
          <Listbox.Button>{date.getFullYear()}</Listbox.Button>
          <Listbox.Options className="absolute max-h-[6.25rem] z-20 top-5 bg-surface overflow-auto bg-slate-100 scrollbar-thin scrollbar-thumb-primary-dark scrollbar-track-surface p-2 shadow-sm">
            {[...Array(currentYear + 1).keys()]
              .filter((year) => year > 1989)
              .map((year) => {
                return (
                  <Listbox.Option
                    key={year}
                    value={year}
                    className="hover:bg-primary-light hover:text-onPrimary-light hover:font-medium  hover:cursor-pointer"
                  >
                    {({ active }) => (
                      <li
                        className={`${
                          active
                            ? 'bg-primary-light text-onPrimary-light font-medium'
                            : 'bg-surface text-onSurface'
                        }`}
                      >
                        {year}
                      </li>
                    )}
                  </Listbox.Option>
                );
              })}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
