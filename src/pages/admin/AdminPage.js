import React from "react";
import AdminProductsTable from "../../containers/Admin/AdminProductsTable/AdminProductsTable";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";
import AddButton from "../../components/Admin/AddButton/AddButton";

const AdminPage = () => {
  const history = useHistory();

  return (
    <AdminLayout>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Products</h1>
        <AddButton
          icon={<AddIcon />}
          height="15%"
          margin="15px 0px"
          clicked={() => history.push("/admin/add-product")}
        >
          Add product
        </AddButton>
      </div>
      <AdminProductsTable />
    </AdminLayout>
  );
};

export default AdminPage;
