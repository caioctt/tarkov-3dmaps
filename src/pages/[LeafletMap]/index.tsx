import { useRouter } from 'next/router';
import React from 'react';

export default function LeafletMap() {
  const router = useRouter();
  const map = router.query.LeafletMap as string;

  return <div>{map}</div>;
}
