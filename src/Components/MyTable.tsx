"use client";
import { capitalizeFirstLetter, isDateValid } from "@/Helper";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

interface MyTableProps {
  dataList: any[];
  columnNames: string[];
}
// TODO: Добавить сортировку колонок, стилизацию ссылок, написать докер файл
export default function MyTable({ dataList, columnNames }: MyTableProps) {
  const [data, setData] = useState(dataList);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const editRow = (rowIdx: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("modalData", rowIdx.toString());
    window.history.pushState(null, "", url.toString());

    openModal();
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
    <div className="bg-slate-800 p-6 text-neutral-100 rounded-3xl">
      <table className="min-w-full">
        <tbody>
          <tr className="bg-gray-100 text-black">
            {columnNames.map((columnTitle, idx) => (
              <th
                key={columnTitle}
                className="px-4 py-2 text-left cursor-pointer border-l border-r border-slate-400 hover:bg-slate-200"
                onClick={() => {
                  console.log("sorting", idx, data);
                  const sortedData = data.sort((a, b) => (a[idx] > b[idx] ? 1 : -1));
                  console.log(sortedData);
                }}
              >
                {capitalizeFirstLetter(columnTitle)}
              </th>
            ))}
            <th></th>
          </tr>
          {data.map((row, rowIdx) => {
            return (
              <tr key={row[0]} className="border-b-2 border-gray-500 px-4 py-2 hover:bg-slate-700">
                <>
                  {row.map((cell: any) => formatCell(cell))}
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded "
                      onClick={() => editRow(rowIdx)}
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalInner closeModal={closeModal} data={data} setData={setData} />
      </Modal>
    </div>
  );
}

function ModalInner({
  closeModal,
  data,
  setData,
}: {
  closeModal: () => void;
  data: any[][];
  setData: (data: React.SetStateAction<any>) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submit = () => {
    // Добавить проверку на пустоту строки?
    const dataListId = parseInt(new URLSearchParams(location.search).get("modalData")!);
    console.log(dataListId, inputRef.current!.value, data[dataListId][1]);

    const newData = [...data];

    newData[dataListId][1] = inputRef.current!.value;

    setData(newData);
    closeModal();
  };

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="styled-input" className="mb-2 text-sm font-medium text-gray-700">
          Edit Name/Descr
        </label>
        <input
          type="text"
          id="styled-input"
          className="block w-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type something..."
          maxLength={25}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              submit();
            }
          }}
        />
      </div>
      <div className="flex justify-end">
        <button onClick={submit} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
