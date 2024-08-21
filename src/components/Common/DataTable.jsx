import React from 'react';

const DataTable = ({ columns, data, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        {columns.map((column, index) => (
                            <th key={index} className="p-4 text-left text-gray-600">{column}</th>
                        ))}
                        {(onEdit || onDelete) && <th className="p-4 text-left text-gray-600">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b">
                            {Object.values(row).map((value, cellIndex) => (
                                <td key={cellIndex} className="p-4 text-gray-700">{value}</td>
                            ))}
                            {(onEdit || onDelete) && (
                                <td className="p-4">
                                    {onEdit && (
                                        <button
                                            onClick={() => onEdit(row)}
                                            className="text-blue-600 hover:underline mr-2"
                                        >
                                            Edit
                                        </button>
                                    )}
                                    {onDelete && (
                                        <button
                                            onClick={() => onDelete(row)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
