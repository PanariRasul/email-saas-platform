export default  function FormTable({ forms }) {
    return (
        <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Saved Forms</h2>
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th className="px-4 py-2">Form Name</th>
                        <th className="px-4 py-2">Fields</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.map((form, idx) => (
                        <tr key={idx} className="border-t dark:border-gray-700">
                            <td className="px-4 py-2">{form.name || `Form ${idx + 1}`}</td>
                            <td className="px-4 py-2">{form.fields.length} fields</td>
                            <td className="px-4 py-2">
                                <button className="text-blue-600 hover:underline mr-3">Edit</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
