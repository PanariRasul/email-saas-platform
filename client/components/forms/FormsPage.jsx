// components/forms/FormsPage.jsx
import { useState } from "react"
import  FormToolbar  from "./FormToolbar"
import FormsTable   from "./FormsTable"
import CreateFormModal from "./CreateFormModal"
import FormSettingsDrawer  from "./FormSettingsDrawer"
import  FormStatsCards from "./FormStatsCards"
import FormPreview  from "./FormPreview"

export default function FormsPage() {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showSettingsDrawer, setShowSettingsDrawer] = useState(false)
    const [selectedForm, setSelectedForm] = useState(null)

    const handleEdit = (form) => {
        setSelectedForm(form)
        setShowSettingsDrawer(true)
    }
    console.log({
        FormToolbar,
        FormsTable,
        CreateFormModal,
        FormSettingsDrawer,
        FormStatsCards,
        FormPreview
    });
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-[#7F27FF]">📝Forms</h1>

            <FormStatsCards />

            <FormToolbar onCreateClick={() => setShowCreateModal(true)} />

            <FormsTable onEdit={handleEdit} />

            <FormPreview form={selectedForm} />

            <CreateFormModal
                open={showCreateModal}
                onClose={() => setShowCreateModal(false)}
            />

            <FormSettingsDrawer
                open={showSettingsDrawer}
                onClose={() => setShowSettingsDrawer(false)}
                form={selectedForm}
            />


        </div>
    )
}
