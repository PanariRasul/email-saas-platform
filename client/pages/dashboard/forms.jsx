import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
import FormsPage from '../../components/forms/FormsPage';

export default function Forms() {
    return (
        <DashboardLayout>
            <Head><title>Forms - EmailAI Pro</title></Head>
            <div className="p-6 mt-[5%] w-full">
                <FormsPage />
            </div>
        </DashboardLayout>
    );
}
