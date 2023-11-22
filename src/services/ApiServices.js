import instance from "./axios";

class ApiServices {
  getAllVendors = () => instance.post("vendors/all/vendors");
  changeVendorStatus = (id, data) =>
    instance.post("vendors/approvereject", {
      vendor_id: id,
      ...data,
    });
}

export default new ApiServices();
