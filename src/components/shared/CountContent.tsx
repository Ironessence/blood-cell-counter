'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import CellGrid from './CellGrid';
import ResultsModal from './ResultsModal';


export default function CountContent() {
  const searchParams = useSearchParams();
  const maxCells = Number(searchParams.get('maxCells'));
  const [cellCounts, setCellCounts] = useState<number[]>([]);
  const [actionStack, setActionStack] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter(); 

  useEffect(() => {
    if (maxCells) {
      setCellCounts(Array(12).fill(0));
    }
  }, [maxCells]);

  const totalCount = cellCounts.reduce((a, b) => a + b, 0);

  const handleCellClick = useCallback((index: number) => {
    if (totalCount < maxCells) {
      setCellCounts(prev => {
        const newCounts = [...prev];
        newCounts[index]++;
        return newCounts;
      });
      setActionStack(prev => [...prev, index]);
    }
  }, [maxCells, totalCount]);

  const handleUndo = useCallback(() => {
    if (actionStack.length > 0) {
      const lastAction = actionStack[actionStack.length - 1];
      setCellCounts(prev => {
        const newCounts = [...prev];
        newCounts[lastAction]--;
        return newCounts;
      });
      setActionStack(prev => prev.slice(0, -1));
    }
  }, [actionStack]);

  const handleReset = () => {
    setCellCounts(Array(12).fill(0));
    setActionStack([]);
  };

  const handleFinish = () => {
    setShowModal(true);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <>
      <div className="flex-col justify-between items-center mb-4 xl:flex xl:flex-row">
        <div className="mb-5">
          <p>Maximum number of cells: <span className="font-bold">{maxCells}</span></p>
          <p>Current count: <span className="font-bold">{totalCount}</span></p>
        </div>
        <div className="flex gap-2 justify-center xl:justify-end">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleUndo} disabled={actionStack.length === 0}>Undo</Button>
          <Button onClick={handleReset}>Reset count</Button>
          <Button onClick={handleFinish} disabled={totalCount !== maxCells}>Finish</Button>
        </div>
      </div>
      <CellGrid cellCounts={cellCounts} onCellClick={handleCellClick} />
      <ResultsModal
        maxCells={maxCells}
        cellCounts={cellCounts}
        onClose={() => setShowModal(false)}
        isOpen={showModal}
        onOpenChange={setShowModal}
      />
    </>
  );
}