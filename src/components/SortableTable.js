import React from "react";
import { HiMiniArrowSmallUp, HiMiniArrowSmallDown } from "react-icons/hi2";
import Table from "./Table";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)} {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      {/* {sortOrder} - {sortBy} // for debugging sortOrder and sortBy state */}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <HiMiniArrowSmallUp />
        <HiMiniArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <HiMiniArrowSmallUp />
        <HiMiniArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <HiMiniArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <HiMiniArrowSmallDown />
      </div>
    );
  }
};

export default SortableTable;
