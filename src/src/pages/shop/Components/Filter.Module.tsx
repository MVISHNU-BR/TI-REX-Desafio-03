import { Button } from "@/components/ui/button";
import filterIcon from "@/assets/filterIcon.svg";
import viewGrid from "@/assets/viewGrid.svg";
import viewList from "@/assets/viewList.svg";
import { cardItemProps } from "@/components/cardItem/types.cardItem";
import CardItem from "@/components/cardItem/CardItem";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/getProducts";

const Filter = () => {
  const [products, setProducts] = useState<cardItemProps[]>([]);
  const [show, setShow] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterPopup, setFilterPopup] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<cardItemProps[]>([]);

  useEffect(() => {
    const fetchInitialProducts = async () => {
      setLoading(true);
      try {
        const result = await getProducts();
        setProducts(result);
        setFilteredProducts(result);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialProducts();
  }, []);

  const totalPages = Math.ceil(filteredProducts.length / show);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * show,
    currentPage * show
  );

  const applyFilter = (type: "lowerPrice" | "higherPrice") => {
    const sortedProducts = [...products].sort((a, b) =>
      type === "lowerPrice" ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sortedProducts);
    setCurrentPage(1);
  };

  return (
    <section className="flex flex-col gap-16">
      <div className="h-[100px] bg-filterBanner w-full flex items-center justify-between px-24">
        <div className="flex items-center gap-6">
          <Button
            variant={"ghost"}
            size={"none"}
            onClick={() => setFilterPopup(true)}
          >
            <img src={filterIcon} alt="filter icon" /> Filter
          </Button>
          <Button variant={"ghost"} size={"none"}>
            <img src={viewGrid} alt="view grid icon" />
          </Button>
          <Button variant={"ghost"} size={"none"}>
            <img src={viewList} alt="view list icon" />
          </Button>
          <div className="border-r-2 border-secondFadeGray h-[37px]"></div>
          <p>
            Showing 1 - {paginatedProducts.length} of {filteredProducts.length}{" "}
            results
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <label htmlFor="numberShow">Show</label>
            <input
              id="numberShow"
              type="number"
              value={show}
              min={5}
              max={filteredProducts.length}
              className="h-[55px] w-[55px] text-center text-secondFadeGray"
              onChange={(e) => {
                const value = Math.max(5, Number(e.target.value));
                setShow(value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className=" flex items-center gap-4">
            <label htmlFor="shortBy">Short By</label>
            <select
              name="ShortBy"
              id="shortBy"
              className="w-[188px] h-[55px] text-center text-secondFadeGray"
            >
              <option value={"default"} selected>
                Default
              </option>
              <option value={"valor1"}>New</option>
              <option value={"valor2"}>Discount</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-8 mb-14 w-full min-h-[1084px] items-center">
        <div className="flex gap-8 items-center justify-center flex-wrap max-w-[1440px]">
          {paginatedProducts.map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
        </div>
        <div className="flex gap-9  mt-10">
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              size="none"
              variant={"outline"}
              className={`${
                currentPage === index + 1 ? "bg-primary text-white" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            size="none"
            variant={"outline"}
            className="h-[60px] w-[98px] hover:bg-primary hover:text-white"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </Button>
        </div>
      </div>

      {filterPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md w-[300px] relative">
            <h2 className="text-lg font-bold">Filtrar Produtos</h2>
            <div className="flex mt-4 gap-2">
              <Button
                onClick={() => applyFilter("lowerPrice")}
                size={"none"}
                className="p-3 rounded-sm text-black hover:text-white"
              >
                Menor Preço
              </Button>
              <Button
                onClick={() => applyFilter("higherPrice")}
                size={"none"}
                className="p-3 rounded-sm text-black hover:text-white"
              >
                Maior Preço
              </Button>
            </div>
            <Button
              variant={"none"}
              onClick={() => setFilterPopup(false)}
              size={"none"}
              className="absolute top-2 right-2 px-2 py-[0.5px] text-red-600 text-2xl rounded-sm"
            >
              x
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Filter;
