import Link from "next/link";
import Image from "next/image";

const DataCard = ({ data, route, course }) => {
  //https://daisyui.com/components/card/
  return (
    <div className="rounded-lg bg-[#1c1c24] hover:bg-[#2c2f32] py-2">
      <Link
        href={{
          pathname: `/${route}/`,
          query: { name: course, category: data.link },
        }}
      >
        <div className="card cursor-pointer items-center">
          <figure className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full overflow-hidden">
            <Image src={data.imgUrl} alt={data.description} />
          </figure>
          <div className="items-center text-center">
            <h2 className="text-base font-medium md:font-semibold font-sans md:font-mono mt-2 text-white">
              {data.name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCard;
