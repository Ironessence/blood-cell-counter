import CountContent from '@/components/shared/CountContent';
import { Suspense } from 'react';


export default function Count() {
  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <CountContent />
      </Suspense>
    </div>
  );
}