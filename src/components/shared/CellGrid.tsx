import bloodCell from '@/app/assets/blood-cell.png';
import Image from 'next/image';

type CellGridProps = {
  cellCounts: number[];
  onCellClick: (index: number) => void;
};

export default function CellGrid({ cellCounts, onCellClick }: CellGridProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {cellCounts.map((count, index) => (
        <div
          key={index}
          className="border p-2 text-center cursor-pointer flex flex-col items-center select-none rounded-xl"
          onClick={() => onCellClick(index)}
        >
          <div className="pointer-events-none">
            <Image src={bloodCell} alt={`Cell ${index + 1}`} width={80} height={80} className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
          </div>
          <p className="pointer-events-none">Cell {index + 1}</p>
          <p className="pointer-events-none font-bold text-xl">{count}</p>
        </div>
      ))}
    </div>
  );
}