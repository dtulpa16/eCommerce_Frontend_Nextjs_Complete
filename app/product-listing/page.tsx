import axios from "axios";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const ProductListing: React.FC = () => {
  const handleSubmit = async (data: FormData) => {
    "use server";
    const name = data.get("name")?.toString();
    const description = data.get("description")?.toString();
    const price = Number(data.get("price"));
    const imageUrl = data.get("imageUrl")?.toString();

    let body = {
      name: name,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
    
    await axios.post("http://localhost:5000/api/products", body);

    revalidateTag("productFetch");
    redirect("/");
  };
  return (
    <div>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
        <form
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          action={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Product Name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Product Description"
              rows={4}
              name="description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              step="0.01"
              placeholder="Product Price"
              name="price"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="imageUrl"
              type="text"
              placeholder="Image URL"
              name="imageUrl"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProductListing;
