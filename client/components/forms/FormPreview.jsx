export default function FormPreview ({ form }) {
    if (!form) return null

    return (
        <div className="bg-white dark:bg-black p-6 rounded-2xl shadow space-y-4">
            <h2 className="text-xl font-semibold text-[#7F27FF]">Live Preview</h2>

            <div className="bg-gray-50 dark:bg-[#0F044C] p-4 rounded-xl space-y-4">
                <h3 className="text-lg font-medium">{form.name}</h3>

                {(form.fields || []).map((field, idx) => (
                    <div key={idx} className="flex flex-col">
                        <label className="text-sm mb-1">{field.label}</label>
                        <input
                            type={field.type}
                            disabled
                            className="border px-3 py-2 rounded-md bg-white dark:bg-black text-black dark:text-white"
                            placeholder={field.label}
                        />
                    </div>
                ))}

                <button
                    disabled
                    className="mt-4 bg-[#7F27FF] text-white px-4 py-2 rounded-xl opacity-80 cursor-not-allowed"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}




























// export default function FormPreview({ fields }) {
//     return (
//         <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mt-6">
//             <h2 className="text-lg font-semibold mb-4">Form Preview</h2>
//             <form className="space-y-4">
//                 {fields.map((field, idx) => (
//                     <div key={idx}>
//                         <label className="block text-sm font-medium mb-1">{field.label}</label>
//                         <input
//                             type={field.type}
//                             placeholder={field.placeholder}
//                             className="w-full px-3 py-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
//                             disabled
//                         />
//                     </div>
//                 ))}
//                 <button
//                     type="submit"
//                     disabled
//                     className="mt-4 w-full py-2 bg-gray-400 text-white rounded cursor-not-allowed"
//                 >
//                     Submit (Preview)
//                 </button>
//             </form>
//         </div>
//     );
// }
