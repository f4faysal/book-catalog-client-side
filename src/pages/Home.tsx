import { Card } from "../components/ui/Card";
import { CarouselHome } from "../components/ui/CarouselHome";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <CarouselHome />;
      </div>
      <div className="mt-2">
        <Card />;
      </div>
    </div>
  );
}
