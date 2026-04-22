import Button from "./Button";
export default function CardProject({ img, judul, keterangan }) {
  return (
    <div className="thumbnial p-2 bg-gray-50 shadow-lg rounded-2xl dark:bg-gray-700 text-sm">
      <img src={img} alt="" className="" />
      <div className="p-2">
        <h1 className="text-xl font-sm py-1">{judul}</h1>
        <p className="py-1">{keterangan}</p>
        <Button action={"lihat selengkapnya"} />
      </div>
    </div>
  );
}
