import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

export default function Map() {
  const LeafletMap = dynamic(() => import('../../features/LeafletMap'), {
    ssr: false,
  });
  const router = useRouter();
  const map = router.query.Map as string;

  return (
    <LeafletMap
      url={`https://raw.githubusercontent.com/caioctt/tilemaps/main/${map}/{z}_{x}_{y}.png`}
    />
  );
}
