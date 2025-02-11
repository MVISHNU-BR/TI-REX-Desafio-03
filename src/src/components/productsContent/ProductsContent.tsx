import { useEffect, useState } from "react";
import CardItem from "../cardItem/CardItem";
import { Button } from "../ui/button";
import { cardItemProps } from "../cardItem/types.cardItem";
import { ProductsProps } from "./tyeps.products";
import { getProductsPagined } from "@/services/getProducts";

export default function ProductsContent({ sectionTitle }: ProductsProps) {
  const [products, setProducts] = useState<cardItemProps[]>([]);
  const [start, setStart] = useState<number>(8);
  const limit = 8;
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchInitialProducts = async () => {
      setLoading(true);
      try {
        const initialProducts = await getProductsPagined(0, limit);
        setProducts(initialProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialProducts();
  }, []);

  const handleShowMore = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const newProducts = await getProductsPagined(start, limit);
      setProducts((prev) => [...prev, ...newProducts]);
      setStart((prev) => prev + limit);
      if (newProducts.length < limit) setHasMore(false);
    } catch (error) {
      console.error("Erro ao carregar mais produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-8 mb-14 w-full min-h-[1084px] items-center">
      <h2 className="font-bold text-[40px]">{sectionTitle}</h2>
      <div className="flex gap-8 items-center justify-center flex-wrap max-w-[1440px]">
        {products.map((item: cardItemProps) => (
          <CardItem
            key={item.id}
            imgItem={item.imgItem}
            title={item.title}
            typeItem={item.typeItem}
            price={item.price}
            fullPrice={item.fullPrice}
            state={item.state}
          />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={handleShowMore} disabled={loading}>
            {loading ? "Carregando..." : "Show More"}
          </Button>
        </div>
      )}
    </section>
  );
}
