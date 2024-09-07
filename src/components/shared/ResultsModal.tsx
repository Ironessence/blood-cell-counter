import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import jsPDF from 'jspdf';

type ResultsModalProps = {
  maxCells: number;
  cellCounts: number[];
  onClose: () => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ResultsModal({ maxCells, cellCounts, onClose, isOpen, onOpenChange }: ResultsModalProps) {
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Cells count', 10, 10);
    doc.text(`Maximum number of cells: ${maxCells}`, 10, 20);
    cellCounts.forEach((count, index) => {
      const percentage = ((count / maxCells) * 100).toFixed(2);
      doc.text(`Cell ${index + 1}: ${percentage}% (${count})`, 10, 30 + index * 10);
    });
    doc.save('cell-count-results.pdf');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-gray-800 text-black dark:text-white">
        <DialogHeader>
          <DialogTitle>Results Summary</DialogTitle>
        </DialogHeader>
        <div>
          <p>Maximum number of cells: <span className="font-bold">{maxCells}</span></p>
          <p>Current count: <span className="font-bold">{cellCounts.reduce((a, b) => a + b, 0)}</span></p>
          <h3 className="mt-4 mb-2 font-semibold">Cells:</h3>
          <ul className="space-y-1">
            {cellCounts.map((count, index) => (
              <li key={index}>
                Cell {index + 1}: <span className="font-bold">{((count / maxCells) * 100).toFixed(2)}%</span> ({count})
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={handleExportPDF}>Export PDF</Button>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}