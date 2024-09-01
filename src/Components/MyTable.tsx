"use client";
import { capitalizeFirstLetter, isDateValid } from "@/Helper";
import { useCallback, useState } from "react";
import Modal from "./Modal";

interface MyTableProps {
  dataList: any[];
  columnNames: string[];
}

export default function MyTable({ dataList, columnNames }: MyTableProps) {
  const [data, setData] = useState(dataList);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const editRow = (row: any, rowIdx: number) => {
    // setIsModalOpen(true);
    const newData = [...data];

    row[1] = "kek";

    newData[rowIdx] = row;
    console.log(rowIdx, row, newData);
    // const newData = (data[rowIdx][1]);
    setData(newData);
  };

  console.log("RERENDER");

  const formatCell = (cell: any) => {
    let output;

    switch (typeof cell) {
      case "number":
        output = cell.toString();
        break;
      case "boolean":
        output = (
          <span className={`${cell ? "bg-green-500" : "bg-red-500"} p-1 rounded-md`}>
            {cell ? "Yes" : "No"}
          </span>
        );
        break;
      case "object":
        output = JSON.stringify(cell, null, 2);
        break;
      case "string":
        if (isDateValid(cell)) {
          output = new Date(cell).toLocaleString();
          break;
        }
        output = cell;
        break;

      default:
        break;
    }
    return (
      <td key={cell} className="px-4 py-2">
        {output}
      </td>
    );
  };

  // Еще можно добавить виртуализацию
  return (
    <div className="bg-slate-800 p-10 text-neutral-100">
      <table className="min-w-full">
        <tbody>
          <tr className="bg-gray-100 text-slate-700">
            {columnNames.map((columnTitle) => (
              <th key={columnTitle} className="px-4 py-2 text-left">
                {capitalizeFirstLetter(columnTitle)}
              </th>
            ))}
            <th></th>
          </tr>
          {data.map((row, rowIdx) => {
            return (
              <tr key={row[0]} className="border-b-2 border-gray-500 px-4 py-2">
                <>
                  {row.map((cell: any) => formatCell(cell))}
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded "
                      onClick={() => editRow(row, rowIdx)}
                    >
                      Edit
                    </button>
                  </td>
                </>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <h2 className="text-lg font-bold">Modal Title</h2>
        <p className="mt-2">This is the content of the modal.</p>
        <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </Modal>
    </div>
  );
}
