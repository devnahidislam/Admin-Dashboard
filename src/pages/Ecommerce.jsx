import React from 'react';
import { earningData, SparklineAreaData } from './../data/dummy';
import { GoPrimitiveDot } from 'react-icons/go';
import { Button, SparkLine, Stacked } from '../components';

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className=" items-center">
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">$6500</p>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center items-center gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 p-4 rounded-full hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">${item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}{' '}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Ecommerce first section design completed */}

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 m-3 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center flex-wrap gap-10">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$9346</span>
                  <span className="text-xs p-1.5 hover:drop-shadow-xl cursor-pointer text-white bg-green-600 rounded-full ml-2">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$4837</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  border="2px red-500"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
