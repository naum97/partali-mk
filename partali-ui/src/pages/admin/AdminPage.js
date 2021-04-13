import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";
import AddButton from "../../components/Admin/AddButton/AddButton";
import ProductTable from "../../containers/Admin/ProductTable/ProductTable";

const AdminPage = () => {
  const history = useHistory();

  return (
    <AdminLayout>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
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
      <ProductTable />
    </AdminLayout>
  );
};

export default AdminPage;
