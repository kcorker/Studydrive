import {
  ProtectedLayout,
  ProctectAdminlayout,
} from "@/components/layouts/protectLayouts";

export const metadata = {
  title: "Dashboard | pasc hub",
  description: "study material web app for students",
};

export default function AdminLayout({ children }) {
  return (
    <ProtectedLayout>
      <ProctectAdminlayout>{children} </ProctectAdminlayout>
    </ProtectedLayout>
  );
}
